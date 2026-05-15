import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelectedIngredients } from "../../hook/useSelectedIngredients";

export const IngredientMiniCard = (props) => {
  const { text, ingredient, className = "" } = props;
  const { selectedIngredient, removeIngredient } = useSelectedIngredients();
  console.log("Array dans MiniCard...", selectedIngredient);

  return (
    <li className="min-w-21 inline-flex items-center justify-between bg-special-white border border-white rounded-lg mx-2 p-1">
      <p
        className={`font-quicksand font-semibold text-base text-primary-700 ${className}`}
      >
        {text}
      </p>
      <div
        onClick={() => removeIngredient(ingredient)}
        className="w-auto h-full flex items-center rounded-md ml-2 bg-secondary-800"
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="text-white p-1 cursor-pointer"
        />
      </div>
    </li>
  );
};
