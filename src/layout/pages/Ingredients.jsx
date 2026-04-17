import { useEffect, useState } from "react";
import ingredientService from "../../services/ingredients.service";
import { Title } from "../../shared/Title";
import { Button } from "../../shared/Button";

export const Ingredients = () => {
  // Pk useState()
  // Car react affiche la page immédiatement, laffichage peut etre non respecté
  // Quand promesse tenue, données vont dans useState()
  // Et re-render et avec 'setIngredients' données s'affichent

  // Si Cross-origin-request => installer npm cors dans backend
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const response = async () => {
      try {
        const data = await ingredientService.getAll();

        setIngredients(data.ingredients);
      } catch (error) {
        console.log(error);
      }
    };

    response();
  }, []);

  return (
    <div className="bg-primary-600 border-4 border-amber-600">
      <Title
        text="Ingrédients"
        className="text-white border-4 border-red-500"
      />
      <div className="w-full container border-4 border-blue-600 p-8">
        <ul className="grid grid-cols-4 gap-8">
          {ingredients.map((ingredient) => (
            <li
              className="relative odd:bg_ingredient1 even:bg_ingredient2 bg-no-repeat bg-cover bg-center z-1"
              key={ingredient._id}
            >
              <h3 className="font-montserrat font-semibold text-primary-600 text-lg text-center p-3">
                {ingredient.name}
              </h3>
              <div className="px-8 border-4 border-red-600 z-3">
                <img
                  className="w-[13.75rem] h-[17.5rem] object-cover rounded-t-[9.5rem] m-auto border-4 border-blue-800"
                  src={`/images/ingredients/${ingredient.slug}.webp`}
                  alt={`Image représentant l'ingrédient '${ingredient.name}' sur fond en bois foncé`}
                />
                <div className="font-bree_Serif border-4 border-green-500 py-4">
                  {ingredient.description}
                </div>
                <div className="flex justify-around py-2 border-4 border-amber-300">
                  <button className="font-montserrat font-semibold bg-primary-600 text-white cursor-pointer py-2 px-4 hover:scale-105 transition-transorm duration-300 ease-in-out">
                    Ajouter
                  </button>
                  <button className="font-montserrat font-semibold bg-primary-600 text-white cursor-pointer py-2 px-4 hover:scale-105">
                    Voir plus
                  </button>
                </div>
              </div>
              <div className="absolute top-[50%] h-[50%] border-4 border-blue-500 py-2 px-6 -z-2">
                <div className="bg-white border-4 border-red-400 h-full">
                  {ingredient.description}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
