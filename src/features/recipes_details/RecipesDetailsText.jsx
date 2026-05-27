export const RecipesDetailsText = (props) => {
    const { className = "", icon, text } = props;

  return (
    <div className="border-4 border-blue-400">
        <p className={`font-semibold text-xl text-center py-2 ${className}`}>
            <FontAwesomeIcon icon={icon} />
            <span className="pl-1">{text}</span>
        </p>
    </div>
  )
}
