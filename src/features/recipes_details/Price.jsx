import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

export const Price = ({ price }) => {
  switch (price) {
    case 1:
      return (
        <p>
          <FontAwesomeIcon icon={faCoins} />
          <span> Bon Marché</span>
        </p>
      );

    case 2:
      return (
        <p>
          <FontAwesomeIcon icon={faCoins} />
          <FontAwesomeIcon icon={faCoins} />
          <span> Moyen</span>
        </p>
      );

    case 3:
      return (
        <p>
          <FontAwesomeIcon icon={faCoins} />
          <FontAwesomeIcon icon={faCoins} />
          <FontAwesomeIcon icon={faCoins} />
          <span> Cher</span>
        </p>
      );

    default:
      return null;
  }
};
