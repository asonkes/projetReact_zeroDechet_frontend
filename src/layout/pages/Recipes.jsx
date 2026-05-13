/************************************/
/** Composant pour la page Recettes */
/************************************/
import { FullScreen } from "../../shared/FullScreen";
import { useSelectedIngredients } from "../../hook/useSelectedIngredients";
import { Title } from "../../shared/Title";
import { IngredientMiniCard } from "../../features/ingredients/ingredientMiniCard";

export const Recipes = () => {
  /* variable pour pouvoir afficher les ingrédients via 'jootai' */
  const { selectedIngredient } = useSelectedIngredients();

   return (
      <>
        <section className="w-full flex bg-primary-700">
          <FullScreen>
           <div className="container border-4 border-red-500">
             <Title className="text-white" text="Mes Recettes" />
             <ul className="py-2 border-4 border-blue-400">
               {selectedIngredient.map((ingredient) => (
                 <IngredientMiniCard key={ingredient._id} text={ingredient.name} />
              ))}
             </ul>
            </div>
          </FullScreen>
        </section>
      </>
    );
};
