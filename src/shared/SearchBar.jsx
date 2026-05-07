import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const SearchBar = (props) => {

  const { className = "" } = props;
  
  return (
    <div 
        className={`absolute top-3-75 w-full h-full bg-special-greenLight transition-opacity duration-500 ease-in-out border-4 border-red-500 z-50 ${className}`}>

          <div className="w-full h-[80px] flex justify-center items-center bg-primary-600">
            <input className="w-[50%] border-b-2 border-b-white focus:outline-0 caret-white text-white font-quicksand"></input>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white text-xl ml-4"/>
        </div>
    </div>
  )
}
