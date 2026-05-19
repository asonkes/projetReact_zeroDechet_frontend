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
import { RecipeCard } from "../../features/recipes/RecipeCard";
import { RecipeLightBox } from "../../features/recipes/RecipeLightBox";

export const Recipes = () => {
  /* set qui permettra d'afficher les recettes */
  const [recipes, setRecipes] = useState([]);
  /* Permet d'avoir les ingrédients sélectionnés sur page ingrédients */
  const { selectedIngredient } = useSelectedIngredients();
  /* Filtre des recettes(voir si ingrédients sélectionnés sont dedans) */
  const filteredRecipes = useFilteredRecipes(recipes, selectedIngredient);
  // Pour la lightbox
  const [lightBoxImage, setLightBoxImage] = useState(null);

  useEffect(() => {
    const response = async () => {
      try {
        const data = await recipeService.getAll();
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
      <section
        className={`w-full min-h-[calc(100vh-102px)] flex bg-primary-600 ${lightBoxImage ? `h-[calc(100vh-102px)]` : `min-h-[calc(100vh-102px)]`}`}
      >
        <FullScreen
          height={`${lightBoxImage ? `h-[calc(100vh-102px)]` : `min-h-[calc(100vh-102px)]`}`}
          className="border-4 border-red-400"
        >
          <div className="container border-4 border-red-500">
            <Title
              className={`text-white border-4 border-blue-500 ${lightBoxImage ? `opacity-0 invisble` : `opacity-100 visible`}`}
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

            {lightBoxImage && (
              <RecipeLightBox
                src={lightBoxImage}
                onClose={() => setLightBoxImage(null)}
              />
            )}

            <div className="w-full h-auto flex flex-col flex-1 container py-4">
              <ul className="w-fit m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredRecipes.map((recipe) => (
                  <RecipeCard
                    key={recipe._id}
                    recipe={recipe}
                    onClick={(src) => setLightBoxImage(src)}
                  />
                ))}
              </ul>
            </div>
          </div>
        </FullScreen>
      </section>
    </>
  );
};
