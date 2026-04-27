export const SkeletonImage = (props) => {
  const { className = "" } = props;
  return (
    <div
      className={`
        relative
        bg-gray-200 
        overflow-hidden 
        after:content-[''] 
        after:absolute
        after:inset-0
        after:bg-linear-to-r
        after:from-transparent
        after:via-gray-300/50
        after:to-transparent
        after:-translate-x-full
        after:animate-waves
        ${className}`}
    ></div>
  );
};
