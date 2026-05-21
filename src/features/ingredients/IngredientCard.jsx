/********************************************/
/** Composant pour la card des ingrédients  */
/********************************************/

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import { ButtonCard } from "../../shared/button/ButtonCard";
import { IngredientImage } from "./IngredientImage";
import { IngredientText } from "./IngredientText";
import { SkeletonImage } from "../../shared/skeleton/SkeletonImage";
import { IngredientLightBox } from "./IngredientLightBox";
import { useSelectedIngredients } from "../../hook/useSelectedIngredients";

export const IngredientCard = (props) => {
  const { ingredient, onClick } = props;
  /** Ici active/setActive ==> pour click sur le bouton */
  const [active, setActive] = useState(false);
  /** Permet de savoir si image est téléchargée */
  const [imgLoaded, setImgLoaded] = useState(false);
  /** Pour les media-queries */
  const desktop = window.matchMedia("(min-width: 769px)").matches;
  /** On récupère les informations JS pour ajout/suppression des éléments */
  const { isSelected, addIngredient, removeIngredient } =
    useSelectedIngredients();

  return (
    <li
      className={`relative flex flex-col w-19 xs:w-24 md:w-18 md:h-17-375 mx-auto odd:bg_ingredient1 even:bg_ingredient2 bg-no-repeat bg-cover bg-center rounded-lg z-1 transition-all duration-500 ease-in-out ${active ? `h-18 md:h-24` : `h-10-5 md:h-17-375`}`}
    >
      <div className="h-full flex items-start md:flex-col md:[align-items:initial] flex-1 px-3 py-2 z-3">
        <div className="relative flex justify-center">
          <div className="w-7-5 md:w-9 absolute bottom-0 flex items-center pt-10">
            <h3 className="w-7-5 md:w-9 h-16 font-montserrat font-semibold text-white text-lg text-center bg-linear-to-t from-special-black to-transparent z-10">
              {ingredient.name}
            </h3>
          </div>

          {/** On met 'group' sur l'élément parent qui doit déclencher qqchose */}
          {/** et group:hover sur l'enfant qui doit */}
          <div className="relative w-7-5 h-8-5 min-h-8-5 md:w-9 md:h-11 md:min-h-11-25 overflow-hidden group">
            {/** Icone + */}
            <div
              onClick={() => {
                if (desktop) {
                  onClick(`/images/ingredients/${ingredient.slug}.webp`);
                }
              }}
              className="absolute bottom-[50%] right-1 rounded-md p-0.5 bg-special-white z-40
              opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlassPlus}
                className="text-xl text-primary-600 md:cursor-pointer"
              />
            </div>

            {/** Skeleton de l'image */}
            {!imgLoaded && (
              <SkeletonImage className="absolute inset-0 w-full h-full border-4 border-gray-300 rounded-t-[9.5rem] z-10" />
            )}

            <IngredientImage
              width="220"
              height="280"
              src={`/images/ingredients/${ingredient.slug}.webp`}
              alt={`Image représentant l'ingrédient '${ingredient.name}' sur fond en bois foncé`}
              onLoad={() => setImgLoaded(true)}
              className={`absolute inset-0 w-full h-full transition-opacity duration-200 ${
                imgLoaded ? "opacity-100" : "opacity-0"
              }
              }`}
            />
          </div>
          {/** Si image pas téléchargé, on affiche le skeleton */}
        </div>

        <div className="absolute w-full h-[77%] top-[15%] xs:h-[65%] xs:top-[20%] right-0 md:top-[30%] md:h-[71%] md:left-0 py-0 px-2.5 md:py-4 md:px-4 -z-2">
          <div
            className={`h-full rounded-md origin-top transition-all duration-800 ease-out bg-special-white ${active ? `md:opacity-100 md:scale-y-100` : `md:opacity-0 md:scale-y-0`}`}
          ></div>
        </div>

        <IngredientText
          className={`flex-1 text-sm xs:text-base px-3 absolute top-[33%] left-[43%] xs:top-[30%] xs:left-[35%] md:relative md:top-0 md:left-0 md:px-10 pt-2 transition-all duration-500 ease-out overflow-hidden ${active ? `md:opacity-100 md:max-h-45` : `md:opacity-0 md:max-h-0`}`}
        >
          {ingredient.description}
        </IngredientText>

        <div
          className={`w-full flex justify-between md:justify-around pr-1 pt-1 md:px-6 md:py-4`}
        >
          <ButtonCard
            text="Voir plus"
            onClick={() => setActive(!active)}
            className="h-0 opacity-0 invisible cursor-none md:h-full md:opacity-100 md:visible md:cursor-pointer mr-2"
          />
          <ButtonCard
            onClick={() => {
              isSelected(ingredient)
                ? removeIngredient(ingredient)
                : addIngredient(ingredient);
            }}
            text={isSelected(ingredient) ? `Supprimer` : `Ajouter`}
            className={
              isSelected(ingredient)
                ? `bg-secondary-400 hover:bg-secondary-400`
                : `bg-primary-800`
            }
          />
        </div>
      </div>
    </li>
  );
};
