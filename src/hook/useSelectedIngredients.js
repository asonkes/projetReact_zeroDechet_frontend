/** On va importer l'atome */
import { useAtom } from "jotai";
/** On va importer le plan global (la boîte) */
import { selectedIngredientsAtom } from "../store/ingredientStore";

export const useSelectedIngredients = () => {
  /** On va créer le tableau(selectedIngredient) et set... => fonction pour modifier le tableau */
  const [selectedIngredient, setSelectedIngredient] = useAtom(
    selectedIngredientsAtom,
  );

  /** On doit d'abord voir s'il l'ingredient existe */
  const isSelected = (ingredient) =>
    selectedIngredient.some((item) => item._id === ingredient._id);

  /** Là, on ajoute un élément */
  const addIngredient = (ingredient) => {
    setSelectedIngredient((prev) => {
      const array = [
        ...prev,
        {
          _id: ingredient._id,
          name: ingredient.name,
          slug: ingredient.slug,
        },
      ];

      console.log(array);

      return array;
    });
  };

  /** Donc là on supprime un élément */
  const removeIngredient = (ingredient) => {
    setSelectedIngredient((prev) => {
      const array = prev.filter((item) => item._id !== ingredient._id);
      console.log(array);
      return array;
    });
  };

  return { selectedIngredient, isSelected, addIngredient, removeIngredient };
};
