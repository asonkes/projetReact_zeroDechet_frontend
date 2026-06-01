/***************************************/
/** Composant pour la page Ingrédient  */
/***************************************/
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import ingredientService from "../../services/ingredients.service";
import { Title } from "../../shared/Title";
import { Pagination } from "../../shared/Pagination";
import { FullScreen } from "../../shared/FullScreen";
import { IngredientCard } from "../../features/ingredients/IngredientCard";
import { IngredientText } from "../../features/ingredients/IngredientText";
import { Loader } from "../../shared/Loader";
import { SkeletonCard } from "../../shared/skeleton/SkeletonCard";
import { IngredientLightBox } from "../../features/ingredients/IngredientLightBox";
import { SearchBar } from "../../shared/SearchBar";
import { Button } from "../../shared/button/Button";
import { useSelectedIngredients } from "../../hook/useSelectedIngredients";

export const Ingredients = () => {
  // Pk useState()
  // Car react affiche la page immédiatement, laffichage peut etre non respecté
  // Quand promesse tenue, données vont dans useState()
  // Et re-render et avec 'setIngredients' données s'affichent

  // Si Cross-origin-request => installer npm cors dans backend
  const [ingredients, setIngredients] = useState([]);

  // Utilisation de l'url comme stockage de donnée (Remplace le state)
  const [searchParams, setSearchParams] = useSearchParams({ page: "1" });

  // Pour la pagination
  // Remplace : const [currentPage, setCurrentPage] = useState(1);
  /* Permet que si on clique sur la page 2 de la pagination => on voit 2 dans l'url */
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
  /* Rendre la barre de recherche visible */
  const location = useLocation();
  const [isVisibleSearch, setIsVisibleSearch] = useState(false);
  /** State pour affiche le message */
  const [message, setMessage] = useState("");

  /** on reprend hasIngredient pour apparition du bouton => voir mes recettes  */
  const { addIngredient, hasIngredient } = useSelectedIngredients();

  useEffect(() => {
    const response = async () => {
      /* Ici agit pour le skeleton, donc doit se remettre à true avec chaque re-render */
      /* Avant chaque appel à l'API */
      setLoading(true);

      try {
        // Appel backend pagination
        // CurrentPage ==> num de la page que laquelle on se trouve
        const data = await ingredientService.getPaginated(currentPage);

        /* Backend renvoie déjà items, page, limit, totalItems, total Pages => plus besoin */
        setIngredients(data.items);
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

  const handleIngredientSelect = async (name) => {
    const ingredient = await ingredientService.getByName(name);

    if (!ingredient) return;

    addIngredient(ingredient);

    setMessage(
      `L'ingrédient '${ingredient.name}' a bien été ajouté à votre liste !`,
    );
  };

  /* Use Effect sert à récupérer l'état envoyé par le header et à ouvrir la searchBar qd on arrive sur la loupe */
  useEffect(() => {
    setIsVisibleSearch(location.state?.openSearch === true);
  }, [location]);

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
        <title>Ingrédients – Potager zéro déchet</title>
        <meta
          name="description"
          content="Explorez les légumes de saison, leurs bienfaits et ajoutez-les à votre sélection pour créer des recettes zéro déchet."
        />
      </Helmet>
      <section
        className={`w-full min-h-[calc(100vh-102px)] bg-primary-600 ${lightBoxImage ? `h-[calc(100vh-102px)]` : `min-h-[calc(100vh-102px)]`}`}
      >
        <FullScreen
          height={`${lightBoxImage ? `h-[calc(100vh-102px)]` : `min-h-[calc(100vh-102px)]`}`}
          className="flex flex-col"
        >
          <SearchBar
            onIngredientSelect={handleIngredientSelect}
            onClose={() => setIsVisibleSearch(false)}
            className={`transition-opacity duration-500 ease-in-out ${isVisibleSearch ? "opacity-100 visible" : "opacity-0 invisible"}`}
          >
            <p className="font-quicksand font-semibold text-center mt-4 text-secondary-400">
              {message}
            </p>
          </SearchBar>

          <Title
            text="Quels ingrédients as-tu récoltés ?"
            className={`text-white ${lightBoxImage ? "opacity-0 invisible" : "opacity-100 visible"}`}
          />

          {lightBoxImage && (
            <IngredientLightBox
              src={lightBoxImage}
              onClose={() => {
                setLightBoxImage(null);
                window.history.pushState({}, "", "/ingredients_recoltes");
              }}
            />
          )}

          <div
            className={`w-full h-auto flex flex-col flex-1 container py-4 ${lightBoxImage ? "opacity-0 invisible" : "opacity-100 visible"} ${isVisibleSearch ? `blur-xl` : `blur-none`}`}
          >
            <IngredientText
              className="text-xl text-white text-center p-4"
              text="Sélectionne les ingrédients que tu as dans ton potager pour
            découvrir des recettes adaptées."
            />
            <ul className="w-fit m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {loading
                ? [...Array(8)].map((_, i) => <SkeletonCard key={i} />)
                : ingredients.map((ingredient) => (
                    <IngredientCard
                      key={ingredient._id}
                      ingredient={ingredient}
                      onClick={(src) => setLightBoxImage(src)}
                    />
                  ))}
            </ul>

            {/* Ajouter les ingrédiants dans l'url (optionnel -> UX partage ta recherche) */}
            <Button
              to="/recipes"
              text="Voir mes recettes"
              className={`w-50 self-center mt-7 py-3 transition-opacity duration-500 ease-in ${hasIngredient ? `w-auto opacity-100 visible` : `w-0 opacity-0 invisible`}`}
            />

            <Pagination
              className={`${lightBoxImage ? `hidden opacity-0` : `block opacity-100`}`}
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </FullScreen>
      </section>
    </>
  );
};
