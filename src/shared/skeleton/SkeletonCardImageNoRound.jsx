import { SkeletonText } from "./SkeletonText";
import { SkeletonImage } from "./SkeletonImage";

export const SkeletonCardImageNoRound = () => {
  return (
    <li
      className={`relative flex flex-col w-[18rem] h-17-375 mx-auto bg-gray-200 rounded-lg z-1 overflow-hidden after:content-[""] after:absolute after:inset-0 after:bg-linear-to-r after:from-transparent after:via-gray-400/20 after:to-transparent after:-translate-x-full after:animate-waves`}
    >
      <div className="h-full flex flex-col flex-1 p-4 z-3">
        <div className="relative flex justify-center border-4">
          <div className="w-9 h-16 absolute bottom-0 flex border-4">
            <SkeletonText className="w-full h-7 rounded-md z-10" />
          </div>

          <SkeletonImage className="w-9 h-11 min-h-11-25 m-auto border-4 border-gray-300 rounded-lg" />
        </div>

        <div className={`flex justify-around px-3 xs:px-8 lg:px-6 py-6`}>
          <SkeletonText className="w-5-563 h-2-625 rounded-lg" />
          <SkeletonText className="w-5-563 h-2-625 rounded-lg" />
        </div>
      </div>
    </li>
  );
};
