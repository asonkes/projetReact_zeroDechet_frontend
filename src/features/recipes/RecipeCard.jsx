import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  return (
    <li
      className={`relative flex flex-col w-19 xs:w-24 md:w-18 md:h-23 mx-auto bg-special-green rounded-lg z-1 transition-all duration-500 ease-in-out ${active ? `h-18 md:h-29` : `h-10-5 md:h-23`}`}
    >
      <div className="h-full flex items-start md:flex-col md:[align-items:initial] flex-1 p-4 z-3">
        <div className="relative flex justify-center -ml-2 mt-1.5 md:ml-0 md:mt-0">
          <div className="w-full absolute bottom-0 flex items-center pt-10">
            <h3 className="w-full flex justify-center items-center h-16 font-montserrat font-semibold text-white text-xs md:text-base text-center bg-linear-to-t from-special-black to-transparent z-10">
              {recipe.name}
            </h3>
          </div>

          {/** On met 'group' sur l'élément parent qui doit déclencher qqchose */}
          {/** et group:hover sur l'enfant qui doit */}
          <div className="relative w-7-5 md:w-full aspect-square overflow-hidden group">
            {/** Icone + */}
            <div
              onClick={() => {
                if (desktop) {
                  onClick(`/images/recipes/${recipe.slug}.webp`);
                  window.history.pushState({}, "", `/recipes/${recipe.slug}`);
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
              <SkeletonImage className="absolute inset-0 w-full h-full border-4 border-gray-300 rounded-lg z-10" />
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

        <div className="absolute w-full h-[80%] top-[10%] xs:h-[80%] xs:top-[10%] right-0 md:h-[70%] md:top-[30%] md:left-0 py-4 px-2 -z-2">
          <div
            className={`h-full rounded-md origin-top transition-all duration-800 ease-out bg-special-white ${active ? `md:opacity-100 md:scale-y-100` : `md:opacity-0 md:scale-y-0`}`}
          ></div>
        </div>

        <RecipeText
          className={`flex-1 text-sm absolute top-[38%] left-[43%] xs:top-[35%] xs:left-[35%] md:relative px-3 md:top-0 md:left-0 md:px-7 pt-2 transition-all duration-500 ease-out overflow-hidden line-clamp-3 md:line-clamp-none ${active ? `md:opacity-100 md:max-h-45` : `md:opacity-0 md:max-h-0`}`}
        >
          {recipe.description}
        </RecipeText>

        <div
          className={`w-full flex justify-between md:justify-around md:px-3 md:py-4`}
        >
          <ButtonCard
            text="Voir plus"
            onClick={() => setActive(!active)}
            className="h-0 opacity-0 invisible cursor-none md:h-full md:opacity-100 md:visible md:cursor-pointer mr-2"
          />
          <ButtonCard
            text="Recette"
            onClick={() => navigate("recipes_details")}
          />
        </div>
      </div>
    </li>
  );
};
