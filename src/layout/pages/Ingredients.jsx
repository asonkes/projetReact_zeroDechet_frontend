import { useEffect, useState } from "react";
import ingredientService from "../../services/ingredients.service";
import { Title } from "../../shared/Title";
import { Pagination } from "../../shared/Pagination";
import { FullScreen } from "../../shared/FullScreen";
import { IngredientCard } from "../../features/ingredients/ingredientCard";
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
  const itemsPerPage = 8;

  useEffect(() => {
    const response = async () => {
      try {
        const data = await ingredientService.getAll();

        /** On fait une copie du tableau de base, au sinon 'sort()' copie le tableau de base */
        const sortedWords = [...data.ingredients].sort((a, b) =>
          a.name.localeCompare(b.name),
        );

        setIngredients(sortedWords);
      } catch (error) {
        console.log(error);
      }
    };

    response();
  }, []);

  /* Va renvoyer le nombre de pages totales, ici 59/8 => 8pages */
  const totalPages = Math.ceil(ingredients.length / itemsPerPage);

  /*  */
  const currentData = ingredients.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <section className="w-full bg-primary-600 border-4 border-red-400">
      <FullScreen
        height="min-h-[calc(100vh-106.5px)]"
        className="flex flex-col"
      >
        <Title
          text="Quels ingrédients as-tu récoltés ?"
          className="text-white"
        />
        <div className="w-full container py-4">
          <IngredientText
            text="Sélectionne les ingrédients que tu as dans ton potager pour
            découvrir des recettes adaptées."
          />

          <ul className="w-fit m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {currentData.map((ingredient) => (
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
