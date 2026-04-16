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
    <div className="bg-primary-700 border-4 border-amber-600">
      <Title
        text="Ingrédients"
        className="text-white border-4 border-red-500"
      />
      <div className="w-full container border-4 border-blue-600 p-8">
        <ul className="grid grid-cols-4 gap-8">
          {ingredients.map((ingredient) => (
            <li
              className="odd:bg_ingredient1 even:bg_ingredient2 bg-no-repeat bg-cover bg-center"
              key={ingredient._id}
            >
              <h3 className="font-montserrat text-primary-700 text-lg text-center p-3">
                {ingredient.name}
              </h3>
              <div className="px-12 border-4 border-red-600">
                <img
                  className="rounded-t-[9.5rem] border-4 border-blue-800"
                  src={`/images/ingredients/${ingredient.slug}.webp`}
                  alt={`Image représentant l'ingrédient '${ingredient.name}' sur fond en bois foncé`}
                />
                <div className="flex justify-around py-2 border-4 border-amber-300">
                  <Button className="p-3.5" text="Ajouter" />
                  <Button className="p-3.5" text="Voir plus" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
