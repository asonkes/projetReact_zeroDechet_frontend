import { useEffect, useState } from "react";
import ingredientService from "../../services/ingredients.service";
import { Title } from "../../shared/Title";
import { Pagination } from "../../shared/Pagination";
import { FullScreen } from "../../shared/FullScreen";
import { IngredientCard } from "../../features/ingredients/IngredientCard";
import { IngredientText } from "../../features/ingredients/IngredientText";

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
  const itemsPerPage = 8;

  useEffect(() => {
    const response = async () => {
      try {
        // Appel backend paginé
        const data = await ingredientService.getPaginated(
          currentPage,
          itemsPerPage,
        );

        console.log("FRONT → données reçues :", data);

        /* Backend renvoie déjà items, page, limit, totalItems, total Pages => plus besoin */
        setIngredients(data.items);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.log(error);
      }
    };

    response();
  }, [currentPage]);

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
            {ingredients.map((ingredient) => (
              <IngredientCard key={ingredient._id} ingredient={ingredient} />
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
