import { useState } from "react";
import { ButtonCard } from "../../shared/button/ButtonCard";
import { IngredientImage } from "./IngredientImage";
import { IngredientText } from "./IngredientText";

export const IngredientCard = (props) => {
  const { ingredient } = props;
  const [active, setActive] = useState(false);

  return (
    <li className="relative flex flex-col w-[18rem] max-h-24 mx-auto odd:bg_ingredient1 even:bg_ingredient2 bg-no-repeat bg-cover bg-center rounded-lg z-1">
      <div className="flex flex-col flex-1 p-2 z-3">
        <div className="relative flex justify-center">
          <div className="w-9 absolute bottom-0 flex items-center pt-10 bg-linear-to-t from-special-black to-transparent">
            <h3 className="w-9 h-16 font-montserrat font-semibold text-white text-lg text-center">
              {ingredient.name}
            </h3>
          </div>

          <IngredientImage
            width="220"
            height="280"
            src={`/images/ingredients/${ingredient.slug}.webp`}
            alt={`Image représentant l'ingrédient '${ingredient.name}' sur fond en bois foncé`}
          />
        </div>

        <div className="absolute flex-1 w-full h-[62%] top-[40%] left-0 py-4 px-3 xs:px-8 lg:px-6 2xl:px-10 -z-2">
          <div
            className={`h-full rounded-md ${active ? `bg-special-white` : `bg-none`}`}
          ></div>
        </div>

        <IngredientText
          className={`flex-1 px-3 xs:px-8 lg:px-6 2xl:px-10 py-2 ${active ? `opacity-100 block` : `opacity-0 hidden`}`}
        >
          {ingredient.description}
        </IngredientText>

        <div
          className={`flex justify-around px-3 xs:px-8 lg:px-6 2xl:px-10 ${active ? `py-2` : `py-4`}`}
        >
          <ButtonCard text="Ajouter" />
          <ButtonCard text="Voir plus" onClick={() => setActive(!active)} />
        </div>
      </div>
    </li>
  );
};
