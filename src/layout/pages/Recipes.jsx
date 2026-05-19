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
import { SkeletonCard } from "../../shared/skeleton/SkeletonCard";

export const Recipes = () => {
  /* set qui permettra d'afficher les recettes */
  const [recipes, setRecipes] = useState([]);
  /* Permet d'avoir les ingrédients sélectionnés sur page ingrédients */
  const { selectedIngredient } = useSelectedIngredients();
  /* Filtre des recettes(voir si ingrédients sélectionnés sont dedans) */
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

  useEffect(() => {
    const response = async () => {
      /* Ici agit pour le skeleton, donc doit se remettre à true avec chaque re-render */
      /* Avant chaque appel à l'API */
      setLoading(true);

      try {
        // Appel backend pagination
        // CurrentPage ==> num de la page que laquelle on se trouve
        const data = await recipeService.getPaginated(currentPage);

        /* Backend renvoie déjà items, page, limit, totalItems, total Pages => plus besoin */
        setRecipes(data.items);
        setTotalPages(data.totalPages);

        /* Ici passe à 'false' pour le loader => car on a reçu la réponse de l'API (les 8ers éléments) */
        /* Et donc le loader ne doit plus fonctionner */
        setFirstLoad(false);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    response();
  }, [currentPage]);

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
          className="border-4 border-red-400"
        >
          <div className="container border-4 border-red-500">
            <Title
              className={`text-white border-4 border-blue-500 ${lightBoxImage ? `hidden opacity-0 invisble` : `block opacity-100 visible`}`}
              text="Mes Recettes"
            />
            <div
              className={`w-full h-auto flex flex-col items-center border-4 border-amber-400 ${lightBoxImage ? `hidden opacity-0 invisible` : `block opacity-100 visible`}`}
            >
              <ul className="w-2/3 p-2 border-4 border-blue-400">
                {selectedIngredient.map((ingredient) => (
                  <IngredientMiniCard
                    key={ingredient._id}
                    text={ingredient.name}
                    ingredient={ingredient}
                  />
                ))}
              </ul>

              <Button className="mt-4" text="Réinitialiser" />
            </div>

            {lightBoxImage && (
              <RecipeLightBox
                src={lightBoxImage}
                onClose={() => setLightBoxImage(null)}
              />
            )}

            <div className="w-full h-auto flex flex-col flex-1 container py-4">
              <ul className="w-fit m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {loading
                  ? [...Array(8)].map((_, i) => <SkeletonCard key={i} />)
                  : filteredRecipes.map((recipe) => (
                      <RecipeCard
                        key={recipe._id}
                        recipe={recipe}
                        onClick={(src) => setLightBoxImage(src)}
                      />
                    ))}
              </ul>

              <Pagination
                className={`${setLightBoxImage ? `block opacity-100` : `hidden opacity-0`}`}
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </FullScreen>
      </section>
    </>
  );
};
