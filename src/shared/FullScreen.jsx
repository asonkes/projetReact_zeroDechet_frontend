export const FullScreen = (props) => {
  // Mettre children permet que le composant 'FullScreen' ai des éléments qui s'affichent dans ce composant
  const {
    children,
    className = "",
    height = "min-h-[calc(100vh-64.5px)]",
  } = props;

  {
    /** Version à comparer avec Aurélien => demander
    const { bgImage, children, className = "" } = props;
    */
  }

  return (
    <div className={`w-full flex ${height} ${className}`}>
      {/** 
      * Version à comparer avec Aurelien => demander  
      *   <div
        className={`w-full flex flex-1 border-2 border-red-700 bg-no-repeat ${className}`}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
      * */}

      {children}
    </div>
  );
};
