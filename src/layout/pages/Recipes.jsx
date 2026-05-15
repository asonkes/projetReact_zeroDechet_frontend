/************************************/
/** Composant pour la page Recettes */
/************************************/
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FullScreen } from "../../shared/FullScreen";
import { Title } from "../../shared/Title";
import { IngredientMiniCard } from "../../features/ingredients/IngredientMiniCard";
import { Button } from "../../shared/button/Button";
import { useEffect } from "react";
import recipeService from "../../services/recipes.service";
import { useSelectedIngredients } from "../../hook/useSelectedIngredients";
import { useFilteredRecipes } from "../../hook/useFilteredRecipes";

export const Recipes = () => {
  /* set qui permettra d'afficher les recettes */
  const [recipes, setRecipes] = useState([]);
  const { selectedIngredient } = useSelectedIngredients();
  const filteredRecipes = useFilteredRecipes(recipes, selectedIngredient);

  useEffect(() => {
    const response = async () => {
      try {
        const data = await recipeService.getAll();
        console.log("DATA REÇUE :", data);
        console.log("RECIPES DANS DATA :", data.recipes);
        setRecipes(data.recipes);
      } catch (error) {
        console.log(error);
      }
    };

    response();
  }, []);

  return (
    <>
      <Helmet>
        <title>Recettes - Potager zéro déchet</title>
        <meta
          name="description"
          content="Découvrez des recettes adaptées aux légumes que vous avez sélectionnés et cuisinez facilement en mode zéro déchet."
        />
      </Helmet>
      <section className="w-full flex bg-primary-700">
        <FullScreen className="border-4 border-red-400">
          <div className="container border-4 border-red-500">
            <Title
              className="text-white border-4 border-blue-500"
              text="Mes Recettes"
            />
            <div className="w-full h-auto flex flex-col items-center border-4 border-amber-400">
              <ul className="w-2/3 p-2 border-4 border-blue-400">
                {selectedIngredient.map((ingredient) => (
                  <IngredientMiniCard
                    key={ingredient._id}
                    text={ingredient.name}
                    ingredient={ingredient}
                  />
                ))}
              </ul>

              <Button className="mt-4" text="Réinitialiser" />
            </div>

            <div className="mt-4-219 border-4 border-red-400">
              <ul className="border-4 border-orange-300">
                {filteredRecipes.map((recipe) => (
                  <li key={recipe._id}>{recipe.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </FullScreen>
      </section>
    </>
  );
};
