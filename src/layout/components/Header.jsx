import { useState } from "react";
import { NavItem } from "../../shared/NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className="w-full min-h-3-75 border border-primary-600 shadow-primary-400 shadow fixed bg-white z-50">
      <nav className="relative w-full min-h-3-75 inline-flex justify-center">
        <ul className="max-w-full absolute right-0 top-[66px] lg:top-0 lg:relative flex flex-col lg:flex-row p-1 bg-white border border-primary-600 shadow-primary-400 lg:border-none lg:shadow-none">
          <NavItem to="/" text="Home" />
          <NavItem to="/#about" text="About" />
          <NavItem
            className=""
            to="ingredients_recoltes"
            text="Ingrédients récoltés"
          />
          <NavItem to="/recipes" text="Recettes" />
          <NavItem to="/contact" text="Contact" />
        </ul>
        <div
          onClick={() => setIsActive(!isActive)}
          className="max-w-full h-full absolute top-0 right-0 flex items-center mr-4 lg:hidden cursor-pointer"
        >
          {!isActive ? (
            <FontAwesomeIcon
              className="font-borel text-3xl text-primary-600"
              icon={faBars}
            />
          ) : (
            <FontAwesomeIcon
              className="font-borel text-3xl text-primary-600"
              icon={faXmark}
            />
          )}
        </div>
      </nav>
    </header>
  );
};
