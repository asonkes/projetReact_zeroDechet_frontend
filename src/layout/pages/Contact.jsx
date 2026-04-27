/************************************/
/** Composant pour la page Contact  */
/************************************/

import { FullScreen } from "../../shared/FullScreen";
import { Loader } from "../../shared/Loader";

export const Contact = () => {
  return (
    <section className="w-full min-h-[calc(100vh-102px)] bg-primary-600">
      <FullScreen
        height="min-h-[calc(100vh-106.5px)]"
        className="flex justify-center items-center"
      >
        <Loader />
      </FullScreen>
    </section>
  );
};
