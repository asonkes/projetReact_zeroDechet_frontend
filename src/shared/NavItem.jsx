import { NavLink } from "react-router";

export const NavItem = (props) => {
  const { text, to, className = "" } = props;

  return (
    <li className={`p-3 ${className}`}>
      <NavLink
        to={to}
        className={`font-borel text-xl text-primary-600 ${className}`}
      >
        {text}
      </NavLink>
    </li>
  );
};
