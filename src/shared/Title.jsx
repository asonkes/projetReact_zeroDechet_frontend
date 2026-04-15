export const Title = (props) => {
  const { text, className = "" } = props;
  return (
    <h2
      className={`font-borel text-4xl mt-15 m-auto text-primary-700 p-2 ${className}`}
    >
      {text}
    </h2>
  );
};
