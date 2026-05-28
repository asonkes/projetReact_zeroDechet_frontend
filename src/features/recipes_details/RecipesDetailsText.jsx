import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const RecipesDetailsText = (props) => {
  const { className = "", icon, text, children } = props;

  return (
    <div>
      <p
        className={`font-semibold text-xl text-secondary-400 text-center py-2 bg-special-white2 ${className}`}
      >
        <FontAwesomeIcon icon={icon} />
        <span className="pl-1">{text}</span>
      </p>
      {children}
    </div>
  );
};
