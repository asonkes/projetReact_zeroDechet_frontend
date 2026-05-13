import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const IngredientMiniCard = (props) => {

    const { text, className = "" } = props;
    
  return (
      <li className="inline-flex items-center px-3 border border-white">
            <p className={`font-quicksand font-bold text-base text-primary-600 border-4 border-amber-400 ${className}`}>{text}</p>
            <div className="w-auto h-full flex items-center rounded-md p-0.5 bg-secondary-800">
                <FontAwesomeIcon icon={faXmark} className="text-white "/>
            </div>
    </li>
  )
}
