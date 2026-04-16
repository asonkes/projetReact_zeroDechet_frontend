export const SplitScreen = (props) => {
  const { bgImage, children, className = "" } = props;

  return (
    <div
      className={`w-full lg:w-1/2 bg-no-repeat ${className}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {children}
    </div>
  );
};
