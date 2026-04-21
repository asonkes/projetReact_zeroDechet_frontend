import { useEffect, useState } from "react";
import ingredientService from "../../services/ingredients.service";
import { Title } from "../../shared/Title";
import { Button } from "../../shared/Button";
import { Pagination } from "../../shared/Pagination";

export const Ingredients = () => {
  // Pk useState()
  // Car react affiche la page immédiatement, laffichage peut etre non respecté
  // Quand promesse tenue, données vont dans useState()
  // Et re-render et avec 'setIngredients' données s'affichent

  // Si Cross-origin-request => installer npm cors dans backend
  const [ingredients, setIngredients] = useState([]);

  const [active, setActive] = useState(false);

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
    <div className="bg-primary-600">
      <Title text="Ingrédients" className="text-white" />
      <div className="w-full container p-4 xxs:p-8">
        <ul className="w-fit m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 border-4 border-red-500">
          {currentData.map((ingredient) => (
            <li
              className="relative flex flex-col w-[18rem] max-h-[24rem] mx-auto odd:bg_ingredient1 even:bg_ingredient2 bg-no-repeat bg-cover bg-center z-1 border-4 border-blue-600"
              key={ingredient._id}
            >
              <div className="flex flex-col flex-1 p-2 z-3">
                <div className="relative flex justify-center">
                  <h3 className="w-auto absolute top-[65%] font-montserrat font-semibold text-white text-lg text-center bg-special p-3 border-4 border-red-500">
                    {ingredient.name}
                  </h3>
                  <img
                    width="220"
                    height="280"
                    className="w-[9rem] h-[11rem] object-cover rounded-t-[9.5rem] m-auto border-4 border-primary-600"
                    src={`/images/ingredients/${ingredient.slug}.webp`}
                    alt={`Image représentant l'ingrédient '${ingredient.name}' sur fond en bois foncé`}
                  />
                </div>

                <div className="absolute flex-1 w-full h-[62%] top-[40%] left-0 py-4 px-3 xs:px-8 lg:px-6 2xl:px-10 -z-2">
                  <div className="h-full bg-white"></div>
                </div>

                <div 
                  className={
                    `flex-1 font-quicksand px-3 xs:px-8 lg:px-6 2xl:px-10 py-2 border-4 border-amber-500
                    ${active ? `opacity-100 block` : `opacity-0 hidden` }
                    `
                    }>
                  {ingredient.description}
                </div>
                <div className={`
                  flex justify-around px-3 xs:px-8 lg:px-6 2xl:px-10 border-4 border-red-600
                  ${active ? `py-2` : `py-4` }
                  `}>
                  <button 
                  className="font-montserrat bg-primary-600 text-white cursor-pointer py-2 px-2 hover:scale-105"
                  >
                    Ajouter
                  </button>
                  <button 
                    className="font-montserrat bg-primary-600 text-white cursor-pointer py-2 px-2 hover:scale-105"
                    onClick={() => setActive(!active)}
                  >
                    Voir plus
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};
