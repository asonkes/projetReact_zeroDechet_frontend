/********************************************/
/** Composant pour la card des ingrédients  */
/********************************************/

import { useState } from "react";
import { ButtonCard } from "../../shared/button/ButtonCard";
import { IngredientImage } from "./IngredientImage";
import { IngredientText } from "./IngredientText";
import { SkeletonImage } from "../../shared/skeleton/SkeletonImage";
import { IngredientLightBox } from "./IngredientLightBox";

export const IngredientCard = (props) => {
  const { ingredient, onClick } = props;
  /** Ici active/setActive ==> pour click sur le bouton */
  const [active, setActive] = useState(false);
  /** Permet de savoir si image est téléchargée */
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <li
      className={`relative flex flex-col w-[18rem] h-17-375 mx-auto odd:bg_ingredient1 even:bg_ingredient2 bg-no-repeat bg-cover bg-center rounded-lg z-1 transition-all duration-500 ease-in-out ${active ? `h-24` : `h-17-375`}`}
    >
      <div className="h-full flex flex-col flex-1 px-3 py-2 z-3">
        <div className="relative flex justify-center">
          <div className="w-9 absolute bottom-0 flex items-center pt-10 bg-linear-to-t from-special-black to-transparent">
            <h3 className="w-9 h-16 font-montserrat font-semibold text-white text-lg text-center z-10">
              {ingredient.name}
            </h3>
          </div>

          <div className="relative w-9 h-11 min-h-11-25 overflow-hidden">
            {!imgLoaded && (
              <SkeletonImage className="absolute inset-0 w-full h-full border-4 border-gray-300 rounded-t-[9.5rem] z-10" />
            )}

            <IngredientImage
              width="220"
              height="280"
              src={`/images/ingredients/${ingredient.slug}.webp`}
              alt={`Image représentant l'ingrédient '${ingredient.name}' sur fond en bois foncé`}
              onLoad={() => setImgLoaded(true)}
              onClick={() =>
                onClick(`/images/ingredients/${ingredient.slug}.webp`)
              }
              className={`absolute inset-0 w-full h-full transition-opacity duration-200 ${
                imgLoaded ? "opacity-100" : "opacity-0"
              }
              }`}
            />
          </div>
          {/** Si image pas téléchargé, on affiche le skeleton */}
        </div>

        <div className="absolute w-full h-[62%] top-[40%] left-0 py-4 px-3 xs:px-8 lg:px-6 2xl:px-10 -z-2">
          <div
            className={`h-full rounded-md origin-top transition-all duration-800 ease-out bg-special-white ${active ? `opacity-100 scale-y-100` : `opacity-0 scale-y-0`}`}
          ></div>
        </div>

        <IngredientText
          className={`flex-1 px-3 xs:px-8 lg:px-6 2xl:px-10 pt-2 transition-all duration-500 ease-out overflow-hidden ${active ? `opacity-100 max-h-45` : `opacity-0 max-h-0`}`}
        >
          {ingredient.description}
        </IngredientText>

        <div className={`flex justify-around px-3 xs:px-8 lg:px-6 py-4`}>
          <ButtonCard text="Ajouter" />
          <ButtonCard text="Voir plus" onClick={() => setActive(!active)} />
        </div>
      </div>
    </li>
  );
};
