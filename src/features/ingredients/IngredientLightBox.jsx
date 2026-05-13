import { FullScreen } from "../../shared/FullScreen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

export const IngredientLightBox = (props) => {
  const { src, alt, onClose, className = "" } = props;
  return (
    <div className="w-full h-[calc(100vh-102px)] absolute top-3-75 right-0 justify-center bg-black px-16 z-40 overflow-hidden overscroll-y-none">
      <div className="relative h-full flex justify-center items-center p-0 md:p-16">
        <img
          className={`m-auto cursor-pointer border-4 border-white ${className}`}
          src={src}
          alt={alt}
        />

        <FontAwesomeIcon
          className="absolute top-3-75 right-0  text-white text-4xl cursor-pointer"
          icon={faCircleXmark}
          onClick={onClose}
        />
      </div>
    </div>
  );
};
