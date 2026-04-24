import { NavLink, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

export const NavItem = ({ text, to, className = "" }) => {
  const location = useLocation();
  const isHash = to.includes("#");
  const Component = isHash ? NavHashLink : NavLink;

  const isHome = to === "/";
  const isAbout = to === "/#about";

  // Props supplémentaires uniquement pour NavHashLink
  const extraProps = isHash ? { smooth: true } : {};

  return (
    <li className={`p-3 font-borel text-xl ${className}`}>
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
                : "text-primary-600"
            }`;
          }

          /* Pour about */
          if (isAbout) {
            return `${
              location.hash === "#about"
                ? "text-secondary-500"
                : "text-primary-600"
            }`;
          }

          /* Pour le reste */
          return `${isActive ? "text-secondary-500" : "text-primary-600"}`;
        }}
      >
        {text}
      </Component>
    </li>
  );
};
