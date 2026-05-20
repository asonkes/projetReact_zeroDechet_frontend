/********************************************/
/** Composant pour JS dans composant Recipe */
/********************************************/
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const useFilteredRecipes = (recipes, selectedIngredients) => {
  const navigate = useNavigate();

  const filteredRecipes = useMemo(() => {
    setTimeout(() => {
      if (selectedIngredients.length === 0) {
        setTimeout(() => {
          const textError = document.createElement("div");
          textError.innerHTML =
            "Veuillez choisir un ingrédient, s'il vous plaît...";
          document.body.appendChild(textError);
          navigate("/ingredients_recoltes");
        }, [1000]);
      }
    });

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
