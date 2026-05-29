import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const SearchBar = (props) => {
  const { className = "", children, onIngredientSelect } = props;

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log("La touche enter a été pressée !");

      const inputValue = event.target.value.trim();
      console.log(inputValue);

      if (inputValue !== "") {
        onIngredientSelect(inputValue);
      }

      event.target.value = "";
    }
  };

  return (
    <div
      className={`absolute top-3-75 w-full h-[calc(100vh-63px)] bg-special-greenLight z-45 ${className}`}
    >
      <div className="w-full h-10-5 flex flex-col justify-center bg-primary-600">
        <div className="w-full text-center">
          <input
            type="text"
            id="ingredientValue"
            placeholder="Veuillez insérer le nom de l'ingrédient que vous avez choisit..."
            className="w-[50%] border-b-2 border-b-white focus:outline-0 caret-white text-white font-quicksand"
            onKeyDown={handleKeyDown}
          ></input>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-white text-xl ml-4"
          />
        </div>
        {children}
      </div>
    </div>
  );
};
