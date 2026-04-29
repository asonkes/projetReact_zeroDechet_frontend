import { NavLink, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

export const NavItem = ({ children, text, to, className = "" }) => {
  const location = useLocation();
  const isHash = to.includes("#");
  const Component = isHash ? NavHashLink : NavLink;

  const isHome = to === "/";
  const isAbout = to === "/#about";

  // Props supplémentaires uniquement pour NavHashLink
  const extraProps = isHash ? { smooth: true } : {};

  return (
    <li
      className={`border-b-primary-600 px-3 py-4 mx-2 font-borel text-xl hover:scale-105 transition-transform duration-200 ease-out border-b-2 lg:flex lg:items-center lg:py-0 lg:border-none ${className}`}
    >
      <Component
        to={to}
        {...extraProps}
        onClick={() => {
          if (!isHash) {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        className={({ isActive }) => {
          /* Pour Home */
          if (isHome) {
            return `${
              location.pathname === "/" && location.hash === ""
                ? "text-secondary-500"
                : "text-primary-600 flex items-center hover:text-secondary-500"
            }`;
          }

          /* Pour about */
          if (isAbout) {
            return `${
              location.hash === "#about"
                ? "text-secondary-500"
                : "text-primary-600 flex items-center hover:text-secondary-500"
            }`;
          }

          /* Pour le reste */
          return `${isActive ? "text-secondary-500" : "text-primary-600 flex items-center hover:text-secondary-500"}`;
        }}
      >
        {children || text}
      </Component>
    </li>
  );
};
