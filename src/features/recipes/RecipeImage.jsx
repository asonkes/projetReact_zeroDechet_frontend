/********************************************/
/** Composant pour l'image des recettes  */
/********************************************/

/* On rajoute '...props' ==> comme ça dans le composant parent, si on ajoute une prop, elle sera activée */
export const RecipeImage = ({ src, alt, className = "", ...props }) => {
  return (
    <img
      loading="eager"
      className={`w-full h-full object-cover m-auto border-4 border-white ${className}`}
      src={src}
      alt={alt}
      {...props}
    />
  );
};
