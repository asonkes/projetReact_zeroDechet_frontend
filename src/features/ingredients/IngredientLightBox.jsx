export const IngredientLightBox = (props) => {
  const { src, alt, className = "" } = props;
  return (
    <div className="w-full h-full absolute top-0 right-0 bg-black p-16 z-40 border-4 border-red-500">
      <img
        className={`w-9 h-11 min-h-11-25 object-cover rounded-t-[9.5rem] m-auto cursor-pointer border-4 border-primary-600 ${className}`}
        src={src}
        alt={alt}
      />
    </div>
  );
};
