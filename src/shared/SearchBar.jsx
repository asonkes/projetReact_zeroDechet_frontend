import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";

export const SearchBar = (props) => {
  const { className = "", children, onIngredientSelect, onClose } = props;

  /** Constante pour référence de la partie qui doit se fermer */
  const searchRef = useRef();

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

  useEffect(() => {
    const closeSearchBar = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("click", closeSearchBar);

    return () => document.removeEventListener("click", closeSearchBar);
  }, [onClose]);

  return (
    <div
      className={`absolute top-3-75 w-full h-[calc(100vh-63px)] bg-special-greenLight z-45 ${className}`}
    >
      <div
        ref={searchRef}
        className="w-full h-10-5 flex flex-col justify-center bg-primary-600"
      >
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
