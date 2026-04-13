import { useEffect, useState } from "react";
import ingredientService from "../../services/ingredients.service";

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
    <div>
      <h1>Page Ingrédients</h1>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient._id}>{ingredient.name}</li>
        ))}
      </ul>
    </div>
  );
};
