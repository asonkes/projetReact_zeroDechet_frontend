export const IngredientButton = (props) => {
  const { children, text, key, onClick, disabled, className = "" } = props;
  return (
    <button
      key={key}
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
