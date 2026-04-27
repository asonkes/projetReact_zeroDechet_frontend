/**********************************************/
/** Composant pour le bouton des ingrédients  */
/**********************************************/
export const IngredientButton = (props) => {
  const { children, text, onClick, disabled, className = "" } = props;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`cursor-pointer m-1 xs:m-2 p-1 xs:p-2 rounded-md border border-white ${
        className
      }`}
    >
      {children || text}
    </button>
  );
};
