import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

export const Difficulty = ({ level }) => {
  switch (level) {
    case 1:
      return (
        <p>
          <FontAwesomeIcon icon={faFire} />
          <span> Facile</span>
        </p>
      );

    case 2:
      return (
        <p>
          <FontAwesomeIcon icon={faFire} />
          <FontAwesomeIcon icon={faFire} />
          <span> Moyen</span>
        </p>
      );

    case 3:
      return (
        <p>
          <FontAwesomeIcon icon={faFire} />
          <FontAwesomeIcon icon={faFire} />
          <FontAwesomeIcon icon={faFire} />
          <span> Difficile</span>
        </p>
      );

    default:
      return null;
  }
};
