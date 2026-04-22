export const IngredientText = (props) => {
  const { text, className = "" } = props;

  return (
    <p
      className={`font-quicksand font-medium text-xl text-white text-center p-4 ${className} `}
    >
      {text}
    </p>
  );
};
