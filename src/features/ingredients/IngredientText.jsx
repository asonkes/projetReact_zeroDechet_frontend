/*********************************************/
/** Composant pour le texte des ingrédients  */
/*********************************************/

export const IngredientText = (props) => {
  const { children, text, className = "" } = props;

  return (
    <p className={`absolute top-[57%] left-[43%] md:relative md:top-0 md:left-0 font-quicksand font-medium ${className} `}>
      {children || text}
    </p>
  );
};
