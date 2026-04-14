export const FullScreen = (props) => {

    // Mettre children permet que le composant 'FullScreen' ai des éléments qui s'affichent dans ce composant
    const {bgImage, children, className=""} = props;

  return (
    <div className='w-full flex flex-1'>
        <div 
        className={`w-full flex flex-1 border-2 border-red-700 bg-no-repeat ${className}`}
        style={{ backgroundImage: `url(${bgImage})` }}
        >
            {children}
        </div>
    </div>
  )
}
