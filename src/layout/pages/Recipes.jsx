/************************************/
/** Composant pour la page Recettes */
/************************************/
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FullScreen } from "../../shared/FullScreen";
import { Title } from "../../shared/Title";
import { IngredientMiniCard } from "../../features/ingredients/IngredientMiniCard";
import { Button } from "../../shared/button/Button";
import recipeService from "../../services/recipes.service";
import { useSelectedIngredients } from "../../hook/useSelectedIngredients";
import { useFilteredRecipes } from "../../hook/useFilteredRecipes";
import { RecipeCard } from "../../features/recipes/RecipeCard";
import { RecipeLightBox } from "../../features/recipes/RecipeLightBox";
import { Pagination } from "../../shared/Pagination";
import { Loader } from "../../shared/Loader";
import { SkeletonCardImageNoRound } from "../../shared/skeleton/SkeletonCardImageNoRound";
import { IngredientText } from "../../features/ingredients/IngredientText";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const Recipes = () => {
  // FORMATEUR : Si ingre dans l'url -> les recup et ne plus utiliser jotai pour les stocker
  // FORMATEUR : Pour un traitement back, le composant doit "juste" connaitre la liste des ingrédients (slug)

  /* set qui permettra d'afficher les recettes */
  const [recipes, setRecipes] = useState([]);
  /* Permet d'avoir les ingrédients sélectionnés sur page ingrédients */
  const { selectedIngredient, removeIngredient } = useSelectedIngredients();

  // FORMATEUR : Tips temporaire pour avoir a liste des ingrés (pour construire ton back)
  // const ingres = selectedIngredient.map(ingredient => ingredient.slug);
  // console.log(ingres);

  /* Filtre des recettes(voir si ingrédients sélectionnés sont dedans) */
  // FORMATEUR : Objectif, viré ça ↓
  const filteredRecipes = useFilteredRecipes(recipes, selectedIngredient);

  // Utilisation de l'url comme stockage de donnée (Remplace le state)
  const [searchParams, setSearchParams] = useSearchParams({ page: "1" });

  // Pour la pagination
  // Remplace : const [currentPage, setCurrentPage] = useState(1);
  /* Permet que si on clique sur la page 2 d ela pagination => on voit 2 dans l'url */
  const currentPage = parseInt(searchParams.get("page"));
  const setCurrentPage = (targetPage) => {
    setSearchParams((params) => {
      params.set("page", targetPage);
      return params;
    });
  };
  const [totalPages, setTotalPages] = useState(1);

  // Pour la lightbox
  const [lightBoxImage, setLightBoxImage] = useState(null);

  /* UseState pour le 'loader' */
  /* On le met en true => reste actif */
  const [firstLoad, setFirstLoad] = useState(true);
  /* UseState pour activer le skeleton */
  const [loading, setLoading] = useState(true);

  const ITEMS_PER_PAGE = 8;

  useEffect(() => {
    const response = async () => {
      /* Ici agit pour le skeleton, donc doit se remettre à true avec chaque re-render */
      /* Avant chaque appel à l'API */
      setLoading(true);

      try {
        // Appel backend pagination
        // CurrentPage ==> num de la page que laquelle on se trouve

        // FORMATEUR : Modification a faire, envoyer au service la page et les ingrédients
        const data = await recipeService.getAll();

        /* Backend renvoie déjà items, page, limit, totalItems, total Pages => plus besoin */
        setRecipes(data);
        setTotalPages(false);

        /* Ici passe à 'false' pour le loader => car on a reçu la réponse de l'API (les 8ers éléments) */
        /* Et donc le loader ne doit plus fonctionner */
        setFirstLoad(false);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    response();

    // FORMATEUR : Dépendence de l'effet : page et les ingrés
  }, []);

  // Calcul du nombre total de pages après filtrage
  useEffect(() => {
    setTotalPages(Math.ceil(filteredRecipes.length / ITEMS_PER_PAGE));
  }, [filteredRecipes]);

  // Pagination front
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const paginatedRecipes = filteredRecipes.slice(start, end);

  if (firstLoad && loading) {
    return (
      <section className="w-full min-h-[calc(100vh-102px)] bg-primary-600">
        <FullScreen
          height="min-h-[calc(100vh-106.5px)]"
          className="flex justify-center items-center"
        >
          <Loader />
        </FullScreen>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>Recettes - Potager zéro déchet</title>
        <meta
          name="description"
          content="Découvrez des recettes adaptées aux légumes que vous avez sélectionnés et cuisinez facilement en mode zéro déchet."
        />
      </Helmet>
      <section
        className={`w-full min-h-[calc(100vh-102px)] flex bg-primary-600 ${lightBoxImage ? `h-[calc(100vh-102px)]` : `min-h-[calc(100vh-102px)]`}`}
      >
        <FullScreen
          height={`${lightBoxImage ? `h-[calc(100vh-102px)]` : `min-h-[calc(100vh-102px)]`}`}
        >
          <div className="container py-4">
            <Title
              className={`text-white ${lightBoxImage ? `hidden opacity-0 invisble` : `block opacity-100 visible`}`}
              text="Mes Recettes"
            />

            {selectedIngredient.length === 0 && (
              <div className="p-4">
                <IngredientText
                  text="Veuillez choisir un ingrédient s'il vous plaît, pour découvrir
                    vos recettes..."
                  className="w-fit m-auto bg-secondary-400 text-white text-center text-xl rounded-lg mt-20 p-2 px-6 border border-white"
                />
              </div>
            )}

            <div
              className={`w-full h-auto flex flex-col items-center ${lightBoxImage ? `hidden opacity-0 invisible` : `block opacity-100 visible`}`}
            >
              <ul className="w-2/3 p-2">
                {selectedIngredient.map((ingredient) => (
                  <IngredientMiniCard
                    key={ingredient._id}
                    text={ingredient.name}
                    ingredient={ingredient}
                    icon={faXmark}
                    onClick={() => removeIngredient(ingredient)}
                  />
                ))}
              </ul>
            </div>

            {lightBoxImage && (
              <RecipeLightBox
                src={lightBoxImage}
                onClose={() => {
                  setLightBoxImage(null);
                  window.history.pushState({}, "", "/recipes");
                }}
              />
            )}

            <div className="w-full h-auto flex flex-col flex-1 container py-4">
              <ul className="w-fit m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {loading
                  ? [...Array(8)].map((_, i) => (
                      <SkeletonCardImageNoRound key={i} />
                    ))
                  : paginatedRecipes.map((recipe) => (
                      <RecipeCard
                        key={recipe._id}
                        recipe={recipe}
                        onClick={(src) => setLightBoxImage(src)}
                      />
                    ))}
              </ul>
            </div>
            {selectedIngredient.length !== 0 && (
              <Pagination
                className={`${lightBoxImage ? `hidden opacity-0` : `block opacity-100`}`}
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            )}
          </div>
        </FullScreen>
      </section>
    </>
  );
};
