import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavItem } from "../../shared/NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../shared/button/Button";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef();

  const location = useLocation();
  const navigate = useNavigate();

  // L'état réel de la search bar (vient de la page ingrédients)
  const isSearchOpen = location.state?.openSearch === true;

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

  // Gestion du clic sur la loupe
  const handleSearchClick = () => {
    // Si on n'est PAS sur la page ingrédients → redirection + ouverture
    if (location.pathname !== "/ingredients_recoltes") {
      navigate("/ingredients_recoltes", { state: { openSearch: true } });
      setIsActive(false);
      return;
    }

    // Si on est sur la page ingrédients → toggle réel
    navigate(".", { state: { openSearch: !isSearchOpen } });
    setIsActive(false);
  };

  return (
    <header className={`w-full min-h-3-75 flex items-center border border-primary-600 shadow-primary-400 shadow fixed bg-white z-50`}>
      <nav className="relative w-full h-3-75 inline-flex justify-center">
        <ul
          ref={menuRef}
          className={`max-w-full h-[calc(100vh-60px)] absolute right-0 top-3-75 flex flex-col p-1 bg-white border border-primary-600 shadow-primary-400 shadow lg:relative lg:h-auto lg:top-0 lg:flex-row lg:border-none lg:shadow-none transition-opacity duration-300 ease-in ${isActive ? `opacity-100 visible` : `opacity-0 invisible lg:opacity-100 lg:visible`}`}
        >
          <NavItem to="/" text="Home" />
          <NavItem to="/#about" text="About" />
          <NavItem
            className=""
            to="ingredients_recoltes"
            text="Ingrédients récoltés"
          />
          <NavItem to="/contact" text="Contact" />
          <NavItem to="/login" className="lg:pt-[14px]">
            <FontAwesomeIcon icon={faCircleUser} />
          </NavItem>

          {/** On envoie l'information, je viens sur cette page via la loupe ==> ouvre la barre de recherche */}
          <li
            onClick={handleSearchClick}
            className="text-primary-600 flex items-center hover:text-secondary-500 border-b-primary-600 px-3 py-4 mx-2 font-borel text-xl cursor-pointer hover:scale-105 transition-transform duration-200 ease-out border-b-2 lg:flex lg:items-center lg:py-0 -lg:mt-[2px] lg:border-none"
          >
            <FontAwesomeIcon icon={isSearchOpen ? faXmark : faMagnifyingGlass} />
          </li>

          <li className="text-primary-600 flex items-center hover:text-secondary-500 border-b-primary-600 px-3 py-4 mx-2 font-borel text-xl cursor-pointer hover:scale-105 transition-transform duration-200 ease-out border-b-2 lg:flex lg:items-center lg:py-0 lg:border-none">
            <Button
              to="/recipes"
              text="Voir mes recettes"
              className="px-4 py-2"
            />
          </li>
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
