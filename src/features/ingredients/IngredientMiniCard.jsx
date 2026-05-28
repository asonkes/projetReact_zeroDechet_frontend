import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IngredientMiniCard = (props) => {
  const { text, children, icon, onClick, className = "" } = props;

  const justify = icon ? `inline-flex justify-between` : `flex justify-center`;

  return (
    <li
      className={`min-w-21 items-center bg-special-white border border-white rounded-lg m-1 p-1 ${justify}`}
    >
      <p
        className={`font-quicksand font-semibold text-base text-primary-700 ${className}`}
      >
        {children || text}
      </p>

      {icon && (
        <div
          onClick={onClick}
          className="w-auto h-full flex items-center rounded-md ml-2"
        >
          <FontAwesomeIcon
            icon={icon}
            className="text-secondary-400 p-1 cursor-pointer"
          />
        </div>
      )}
    </li>
  );
};
