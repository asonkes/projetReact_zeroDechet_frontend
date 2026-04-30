import { FullScreen } from "../../shared/FullScreen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

export const IngredientLightBox = (props) => {
  const { src, alt, className = "" } = props;
  return (
    <div className="w-full h-[calc(100vh-102px)] absolute top-3-75 right-0 flex items-center bg-black px-16 z-40">
      <div className="relative container">
        <img
          className={`w-[40%] h-[40%] m-auto cursor-pointer border-4 border-white ${className}`}
          src={src}
          alt={alt}
        />

        <FontAwesomeIcon
          className="absolute top-0 right-3.75  text-white text-5xl cursor-pointer"
          icon={faCircleXmark}
        />
      </div>
    </div>
  );
};
