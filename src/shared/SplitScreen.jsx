export const SplitScreen = (props) => {

  const {bgImage, children, className=""} = props;

  return (
    <div 
      className={`w-1/2 flex flex-1 border-4 border-blue-700 bg-no-repeat ${className}`}
      style={{backgroundImage: `url(${bgImage})`}}
    >
        <div className={`w-full ${className}`}>
        {children}
        </div>
    </div>
  )
}
