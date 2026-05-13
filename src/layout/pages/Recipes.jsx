/************************************/
/** Composant pour la page Recettes */
/************************************/
import { FullScreen } from "../../shared/FullScreen";
import { useSelectedIngredients } from "../../hook/useSelectedIngredients";

export const Recipes = () => {
  /* variable pour pouvoir afficher les ingrédients via 'jootai' */
  const { selectedIngredient } = useSelectedIngredients();
  console.log(selectedIngredient);

   return (
      <>
        <section className="w-full flex">
          {/* <FullScreen>
           <div className="container border-4 border-red-500">
             {selectedIngredient.Array.map((ingredient) => {
               <div key={ingredient._id}>{ingredient.name}</div>
             })}
              
            </div>
          </FullScreen> */}
        </section>
      </>
    );
};
