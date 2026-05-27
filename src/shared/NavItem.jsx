import { NavLink, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

export const NavItem = ({ children, text, to, state, className = "" }) => {
  const location = useLocation();
  
  /** Détecter du hash dans le nav et location */
  const localtionHashDetected = location.hash !== ''
  const linkForHashDetected = !!to.hash || (typeof(to) === 'string' && to.includes('#'))

  /** Détecter si il y a un 'hash' active */
  /** Donc si on est sur la partie ici #about et le NavLink about */
  const isHashActive = localtionHashDetected && linkForHashDetected && location.hash === to.hash;

  /** Pour Détecter qu'on est sur la partie #about avec un navLink sans ancre (#) */
  const preventActive = localtionHashDetected && !linkForHashDetected;


  /** Mega console log de la mort */
  /*
  console.log(JSON.stringify(to), '↓------------------------------------');
  console.log('localtionHashDetected', localtionHashDetected);
  console.log('linkForHashDetected', linkForHashDetected);
  console.log('isHashActive', isHashActive);
  console.log('preventActive', preventActive);
  console.log(JSON.stringify(to), '↑------------------------------------');
  */

  return (
    <li
      className={`border-b-primary-600 px-3 py-4 mx-2 font-borel text-xl hover:scale-105 transition-transform duration-200 ease-out border-b-2 lg:py-4.75 lg:border-none ${className}`}
    >
      <NavLink
        onClick={() => {
          if (!isHashActive) {
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            document.querySelector(location.hash)?.scrollIntoView()
          }
        }}
        to={to}
        state={state}
        className={({ isActive }) =>
          // Détection qu'on est la page sans # ou détection qu'il y a un # actif
          `${(!linkForHashDetected && isActive && !preventActive || linkForHashDetected && isHashActive)  ? "text-secondary-500" : "text-primary-600 flex items-center hover:text-secondary-500"}`
        } >
        {children || text}
      </NavLink>
    </li>
  );
};
