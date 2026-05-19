import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import { RecipeImage } from "./RecipeImage";
import { RecipeText } from "../recipes/RecipeText";
import { ButtonCard } from "../../shared/button/ButtonCard";
import { SkeletonImage } from "../../shared/skeleton/SkeletonImage";

export const RecipeCard = (props) => {
  const { recipe, onClick } = props;
  /** Ici active/setActive ==> pour click sur le bouton */
  const [active, setActive] = useState(false);
  /** Permet de savoir si image est téléchargée */
  const [imgLoaded, setImgLoaded] = useState(false);
  /** Pour les media-queries */
  const desktop = window.matchMedia("(min-width: 769px)").matches;

  return (
    <li
      className={`relative flex flex-col w-[18rem] h-auto mx-auto bg-special-green rounded-lg z-1 transition-all duration-500 ease-in-out ${active ? `h-24` : `h-17-375`}`}
    >
      <div className="h-full flex flex-col flex-1 p-4 z-3">
        <div className="relative flex justify-center">
          <div className="w-full absolute bottom-0 flex items-center pt-10">
            <h3 className="w-full flex justify-center items-center h-16 font-montserrat font-semibold text-white text-base text-center bg-linear-to-t from-special-black to-transparent z-10">
              {recipe.name}
            </h3>
          </div>

          {/** On met 'group' sur l'élément parent qui doit déclencher qqchose */}
          {/** et group:hover sur l'enfant qui doit */}
          <div className="relative w-full aspect-square overflow-hidden group">
            {/** Icone + */}
            <div
              onClick={() => {
                if (desktop) {
                  onClick(`/images/recipes/${recipe.slug}.webp`);
                }
              }}
              className="absolute bottom-[50%] right-1 rounded-md p-0.5 bg-special-white z-40
                 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlassPlus}
                className="text-xl text-primary-600 sm:cursor-pointer"
              />
            </div>

            {/** Skeleton de l'image */}
            {!imgLoaded && (
              <SkeletonImage className="absolute inset-0 w-full h-full border-4 border-gray-300 rounded-t-[9.5rem] z-10" />
            )}

            <RecipeImage
              width="256"
              height="256"
              src={`/images/recipes/${recipe.slug}.webp`}
              alt={`Image représentant l'ingrédient '${recipe.name}' sur fond en bois foncé`}
              onLoad={() => setImgLoaded(true)}
              className={`absolute inset-0 w-full h-full transition-opacity duration-200 rounded-lg ${
                imgLoaded ? "opacity-100" : "opacity-0"
              }
                 }`}
            />
          </div>
          {/** Si image pas téléchargé, on affiche le skeleton */}
        </div>

        <div className="absolute w-full h-[70%] top-[30%] left-0 py-4 px-2 -z-2">
          <div
            className={`h-full rounded-md origin-top transition-all duration-800 ease-out bg-special-white ${active ? `opacity-100 scale-y-100` : `opacity-0 scale-y-0`}`}
          ></div>
        </div>

        <RecipeText
          className={`flex-1 px-3 xs:px-8 lg:px-6 2xl:px-10 pt-2 transition-all duration-500 ease-out overflow-hidden ${active ? `opacity-100 max-h-45` : `opacity-0 max-h-0`}`}
        >
          {recipe.description}
        </RecipeText>

        <div className={`flex justify-around px-3 xs:px-8 lg:px-6 py-4`}>
          <ButtonCard text="Voir plus" onClick={() => setActive(!active)} />
          <ButtonCard text="Recette" />
        </div>
      </div>
    </li>
  );
};
