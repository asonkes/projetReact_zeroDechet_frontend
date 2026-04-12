import { NavItem } from "../../shared/NavItem";

export const Header = () => {
  return (
    <header className="w-full border border-primary-600 shadow-primary-400 shadow fixed z-9999999">
      <nav className="w-full">
        <ul className="flex justify-center p-1">
          <NavItem to="/" text="Home" />
          <NavItem to="/ingredients" text="Ingrédients" />
          <NavItem to="/recipes" text="Recettes" />
          <NavItem to="/bonus" text="Trucs et Astuces" />
          <NavItem to="/contact" text="Contact" />
        </ul>
      </nav>
    </header>
  );
};
