/********************************************/
/** Composant pour l'image des ingrédients  */
/********************************************/

/* On rajoute '...props' ==> comme ça dans le composant parent, si on ajoute une prop, elle sera activée */
export const IngredientImage = ({
  width,
  height,
  src,
  alt,
  className = "",
  ...props
}) => {
  return (
    <img
      width={width}
      height={height}
      loading="eager"
      className={`w-7-5 h-8-5 min-h-8-5 md:w-9 md:h-11 md:min-h-11-25 object-cover rounded-t-[9.5rem] m-auto border-4 border-primary-600 ${className}`}
      src={src}
      alt={alt}
      {...props}
    />
  );
};
