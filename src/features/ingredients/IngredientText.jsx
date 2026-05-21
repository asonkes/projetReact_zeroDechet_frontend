/*********************************************/
/** Composant pour le texte des ingrédients  */
/*********************************************/

export const IngredientText = (props) => {
  const { children, text, className = "" } = props;

  return (
    <p className={`font-quicksand font-medium ${className} `}>
      {children || text}
    </p>
  );
};
