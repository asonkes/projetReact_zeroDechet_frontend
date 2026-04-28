/**************************************/
/** Composant pour la page Not Found  */
/**************************************/

import { FullScreen } from "../../shared/FullScreen";

export const NotFound = () => {
  return (
    <section className="w-full">
      <FullScreen className="min-h-[calc(100vh-102px)] justify-center items-start lg:justify-start lg:items-center bg_notFound_mobile sm:bg_notFound_tablet lg:bg_notFound bg-cover bg-no-repeat bg-center">
        <h1 className="pt-40 lg:pt-0 lg:pl-60 xl:pl-80 font-bree_Serif text-6xl text-primary-700 text-center">
          Error 404
        </h1>
      </FullScreen>
    </section>
  );
};
