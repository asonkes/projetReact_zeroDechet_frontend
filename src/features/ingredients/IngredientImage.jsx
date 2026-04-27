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
      className={`w-9 h-11 min-h-11-25 object-cover rounded-t-[9.5rem] m-auto border-4 border-primary-600 ${className}`}
      src={src}
      alt={alt}
      {...props}
    />
  );
};
