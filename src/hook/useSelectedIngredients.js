/*************************************************/
/** Composant pour JS dans composant ingredients */
/*************************************************/

/** On va importer l'atome */
import { useAtom } from "jotai";
/** On va importer le plan global (la boîte) */
import { selectedIngredientsAtom } from "../store/ingredientStore";

export const useSelectedIngredients = () => {
  // FORMATEUR : Si fonctionnement backend, tout ceux-ci ne sera plus utile :o

  /** On va créer le tableau(selectedIngredient) et set... => fonction pour modifier le tableau */
  const [selectedIngredient, setSelectedIngredient] = useAtom(
    selectedIngredientsAtom,
  );

  /** Voir si la tableau est composé au moins d'1 élément */
  const hasIngredient = selectedIngredient.length > 0;

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
          slug: ingredient.slug,
          name: ingredient.name,
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

  return {
    hasIngredient,
    selectedIngredient,
    isSelected,
    addIngredient,
    removeIngredient,
  };
};
