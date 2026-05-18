/******************************************/
/** Composant pour le texte des recettes  */
/******************************************/

export const RecipeText = (props) => {
  const { children, text, className = "" } = props;

  return (
    <p className={`font-quicksand font-medium ${className} `}>
      {children || text}
    </p>
  );
};
