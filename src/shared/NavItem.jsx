import { NavLink } from "react-router";
import { NavHashLink } from "react-router-hash-link";

export const NavItem = ({ text, to, className = "" }) => {
  const isHash = to.includes("#");
  const Component = isHash ? NavHashLink : NavLink;

  // Props supplémentaires uniquement pour NavHashLink
  const extraProps = isHash ? { smooth: true } : {};

  return (
    <li className={`p-3 ${className}`}>
      <Component
        to={to}
        {...extraProps}
        onClick={() => {
          if (!isHash) {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        className={`font-borel text-xl text-primary-600 ${className}`}
      >
        {text}
      </Component>
    </li>
  );
};
