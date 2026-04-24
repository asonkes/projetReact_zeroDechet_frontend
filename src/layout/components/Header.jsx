import { NavItem } from "../../shared/NavItem";

export const Header = () => {
  return (
    <header className="w-full border border-primary-600 shadow-primary-400 shadow fixed bg-white z-50">
      <nav className="w-full">
        <ul className="flex justify-center p-1">
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
      </nav>
    </header>
  );
};
