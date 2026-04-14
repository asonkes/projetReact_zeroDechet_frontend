import { FullScreen } from "../../shared/FullScreen";
import BgImage from '../../../public/images/background/home/bg_home.png';
import { SplitScreen } from "../../shared/SplitScreen";
import PortraitImage from '../../../public/images/background/home/portrait1.png';

export const Home = () => {
  return (
    <section className="w-full flex flex-1 border-2 border-amber-700">
      <FullScreen className="bg-contain bg-top-left border-4 border-red-800" bgImage={BgImage}>
        <SplitScreen></SplitScreen>
        <SplitScreen 
        className="bg-contain bg-top-right"
        bgImage={PortraitImage} 
        ></SplitScreen>
      </FullScreen>
    </section>
  );
};
