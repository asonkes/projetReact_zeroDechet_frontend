import { NavItem } from "../../shared/NavItem";

export const Header = () => {
  return (
    <header className="w-full border border-primary-600 shadow-primary-400 shadow fixed z-9999999">
      <nav className="w-full">
        <ul className="flex justify-center p-1">
          <NavItem href="/" text="Home" />
          <NavItem href="/ingredients" text="Ingrédients" />
          <NavItem href="/recipes" text="Recettes" />
          <NavItem href="/astuces" text="Trucs et Astuces" />
          <NavItem href="/contact" text="Contact" />
        </ul>
      </nav>
    </header>
  );
};
