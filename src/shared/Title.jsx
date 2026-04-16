export const Title = (props) => {
  const { text, children, className = "" } = props;
  return (
    <h2
      className={`font-borel text-4xl text-center mt-15 m-auto text-primary-700 p-2 ${className}`}
    >
      {children ?? text}
    </h2>
  );
};
