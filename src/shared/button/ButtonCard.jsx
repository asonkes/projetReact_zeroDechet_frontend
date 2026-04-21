export const ButtonCard = (props) => {

    const {text, className=""} = props;

  return (
    <button className={`font-montserrat bg-primary-600 text-white cursor-pointer py-2 px-2 hover:scale-105 ${className}`}>{text}</button>
  )
}
