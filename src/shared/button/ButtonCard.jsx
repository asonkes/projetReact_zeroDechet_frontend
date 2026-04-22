import { Link } from "react-router";

export const ButtonCard = (props) => {
  const { text, to, onClick, className = "" } = props;

  return (
    <Link
      to={to}
      className={`font-montserrat bg-primary-800 text-white cursor-pointer py-2 px-2 hover:scale-105 hover:bg-primary-700 rounded-lg ${className}`}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};
