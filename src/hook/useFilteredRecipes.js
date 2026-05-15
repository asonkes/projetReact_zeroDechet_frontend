/********************************************/
/** Composant pour JS dans composant Recipe */
/********************************************/
import { useMemo } from "react";

export const useFilteredRecipes = (recipes, selectedIngredients) => {
  const filteredRecipes = useMemo(() => {
    if (selectedIngredients.length === 0) return recipes;

    /* On filtre les recettes */
    return recipes.filter((recipe) =>
      /* On reprend les ingrédients sélectionnés */
      selectedIngredients.some((ing) =>
        /* Et on compare avec les ingrédients dans la DB */
        recipe.ingredients.some((rIng) => {
          /* ici sécurité, si ingrédient pas d'id */
          if (!rIng._id) return false;
          return rIng._id === ing._id;
        }),
      ),
    );
  }, [recipes, selectedIngredients]);

  return filteredRecipes;
};
