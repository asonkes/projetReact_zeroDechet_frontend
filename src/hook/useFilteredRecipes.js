/********************************************/
/** Composant pour JS dans composant Recipe */
/********************************************/
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const useFilteredRecipes = (recipes, selectedIngredients) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedIngredients.length === 0) {
      const timer = setTimeout(() => {
        navigate("/ingredients_recoltes");
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [selectedIngredients, navigate]);

  const filteredRecipes = useMemo(() => {
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
