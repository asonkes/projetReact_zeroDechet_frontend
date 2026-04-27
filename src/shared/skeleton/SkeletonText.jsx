export const SkeletonText = (props) => {
  const { className = "" } = props;
  return (
    <div
      className={`
        relative
        bg-gray-300 
        overflow-hidden 
        after:content-[''] 
        after:absolute
        after:inset-0
        after:bg-linear-to-r
        after:from-transparent
        after:via-gray-400/20
        after:to-transparent
        after:-translate-x-full
        after:animate-waves
        ${className}`}
    ></div>
  );
};
