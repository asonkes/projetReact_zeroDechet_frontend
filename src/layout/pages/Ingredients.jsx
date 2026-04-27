import { useEffect, useState } from "react";
import ingredientService from "../../services/ingredients.service";
import { Title } from "../../shared/Title";
import { Pagination } from "../../shared/Pagination";
import { FullScreen } from "../../shared/FullScreen";
import { IngredientCard } from "../../features/ingredients/IngredientCard";
import { IngredientText } from "../../features/ingredients/IngredientText";
import { Loader } from "../../shared/Loader";
import { SkeletonCard } from "../../shared/skeleton/SkeletonCard";

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

  const [firstLoad, setFirstLoad] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const response = async () => {
      setLoading(true);

      /** On met le 'setLoading' dans la fonction asynchrone
       * Au sinon, react voit le setLoading => donc re-render
       * Avant que le 'useEffect' soit lancé
       */

      try {
        // Appel backend pagination
        // CurrentPage ==> num de la page que laquelle on se trouve
        const data = await ingredientService.getPaginated(currentPage);

        console.log("FRONT → données reçues :", data);

        /* Backend renvoie déjà items, page, limit, totalItems, total Pages => plus besoin */
        setIngredients(data.items);
        setTotalPages(data.totalPages);

        setLoading(false);

        setFirstLoad(false);
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

  return (
    <section className="w-full min-h-[calc(100vh-102px)] bg-primary-600">
      <FullScreen
        height="min-h-[calc(100vh-106.5px)]"
        className="flex flex-col"
      >
        <Title
          text="Quels ingrédients as-tu récoltés ?"
          className="text-white"
        />
        <div className="w-full flex flex-col flex-1 container py-4">
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
