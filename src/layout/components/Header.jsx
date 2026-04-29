import { useState, useEffect, useRef } from "react";
import { NavItem } from "../../shared/NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef();

  /* On utilise un useEffect pour agir en dehors du composant */
  useEffect(() => {
    const closeBurger = (e) => {
      /* Et on vérifie si le click a eu lieu en dehors ou dans le menu */
      if (!menuRef.current.contains(e.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", closeBurger);

    /* On enlève l'écouteur d'évènement */
    return () => removeEventListener("click", closeBurger);
  }, []);

  /* 'isActive' dans le tableau des dépendances => car on veut qu'il se déclenche à chaque fois que 'isActive' change */
  useEffect(() => {
    if (isActive) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    /* Evite de retenir l'évènement */
    /* Ex : j'ai ouvert mon menu => scroll annulé
    Je vais sur une autre page ==> annulé je peux scroller */
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isActive]);

  return (
    <header className="w-full min-h-3-75 flex items-center border border-primary-600 shadow-primary-400 shadow fixed bg-white z-50">
      <nav className="relative w-full h-3-75 inline-flex justify-center">
        <ul
          ref={menuRef}
          className={`max-w-full h-[calc(100vh-60px)] absolute right-0 top-3-75 flex flex-col p-1 bg-white border border-primary-600 shadow-primary-400 shadow lg:relative lg:h-auto lg:top-0 lg:flex-row lg:border-none lg:shadow-none transition-opacity duration-300 ease-in ${isActive ? `opacity-100` : `opacity-0 lg:opacity-100`}`}
        >
          <NavItem to="/" text="Home" />
          <NavItem to="/#about" text="About" />
          <NavItem
            className=""
            to="ingredients_recoltes"
            text="Ingrédients récoltés"
          />
          <NavItem to="/recipes" text="Recettes" />
          <NavItem to="/contact" text="Contact" />
          <NavItem to="/login">
            <FontAwesomeIcon icon={faCircleUser} />
          </NavItem>
        </ul>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setIsActive(!isActive);
          }}
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
