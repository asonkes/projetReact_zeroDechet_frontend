import { Link } from "react-router";

export const Button = (props) => {
  const { text, to, className = "" } = props;
  return (
    <Link
      to={to}
      className={`font-quicksand font-semibold text-white rounded-[1.25rem] bg-secondary-500 cursor-pointer p-3 shadow-secondary-800 shadow hover:scale-105 transition-transform duration-300 ease-out ${className}`}
    >
      {text}
    </Link>
  );
};
