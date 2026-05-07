/***************************************/
/** Composant pour la page Ingrédient  */
/***************************************/

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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

export const Ingredients = () => {
  // Pk useState()
  // Car react affiche la page immédiatement, laffichage peut etre non respecté
  // Quand promesse tenue, données vont dans useState()
  // Et re-render et avec 'setIngredients' données s'affichent

  // Si Cross-origin-request => installer npm cors dans backend
  const [ingredients, setIngredients] = useState([]);

  // Pour la pagination
  const [currentPage, setCurrentPage] = useState(1);
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
    <section
      className={`w-full min-h-[calc(100vh-102px)] bg-primary-600 ${lightBoxImage ? `h-[calc(100vh-102px)]` : `min-h-[calc(100vh-102px)]`}`}
    >
      <FullScreen
        height={`${lightBoxImage ? `h-[calc(100vh-102px)]` : `min-h-[calc(100vh-102px)]`}`}
        className="flex flex-col"
      >

      {isVisibleSearch && (
        <SearchBar 
          onClose={() => setIsVisibleSearch(false)} 
          className={`${isVisibleSearch ? `opacity-100 visible` : `opacity-0 invisible`}`}
        />
      )}

        <Title
          text="Quels ingrédients as-tu récoltés ?"
          className={`text-white ${lightBoxImage ? "opacity-0 invisible" : "opacity-100 visible"}`}
        />

        {lightBoxImage && (
          <IngredientLightBox
            src={lightBoxImage}
            onClose={() => setLightBoxImage(null)}
          />
        )}

        <div
          className={`w-full h-auto flex flex-col flex-1 container py-4 ${lightBoxImage ? "opacity-0 invisible" : "opacity-100 visible"}`}
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

          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </FullScreen>
    </section>
  );
};
