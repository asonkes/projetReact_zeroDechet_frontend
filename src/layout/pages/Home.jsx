/*********************************/
/** Composant pour la page Home  */
/*********************************/

import { FullScreen } from "../../shared/FullScreen";
// import BgImageHome from "/images/background/home/bg_home.webp";
import { SplitScreen } from "../../shared/SplitScreen";
import { Button } from "../../shared/button/Button";
import { About } from "../pages/About";

export const Home = () => {
  return (
    <>
      <section className="w-full flex">
        <FullScreen className="bg_home_mobile lg:bg_home bg-cover bg-center">
          {/** Version à comparer avec Aurélien
           * <FullScreen
              className="bg-cover bg-center border-4 border-red-800"
              bgImage={BgImageHome}>
        >
           */}
          <div className="container flex flex-col justify-center items-center lg:flex-row">
            <SplitScreen className="flex flex-col justify-center items-center text-center text-primary-600">
              <h1 className="flex flex-col font-montserrat text-4xl font-extrabold uppercase px-4 mt-8">
                <span className="py-2">Potager</span>
                <span className="p-2">zero déchet</span>
              </h1>

              <div className="font-quicksand text-base sm:text-lg font-semibold px-4 mt-11 sm:mt-12">
                <p>Vous cultivez vos légumes, je vous aide à les cuisiner.</p>
                <p>
                  Ajoutez les récoltes de votre potager et découvrez des
                  recettes fraîches, de saison et zéro déchet, pensées pour
                  utiliser chaque ingrédient au mieux.
                </p>
                <p>
                  Votre potager devient votre meilleure source d'inspiration.
                </p>
              </div>

              <p className="font-quicksand text-lg font-bold uppercase p-4 mt-5 sm:mt-6">
                Cuisiner frais, local et sans gaspiller.
              </p>

              <Button
                to="/ingredients_recoltes"
                text="Je choisis mes ingrédients"
                className="mt-2 sm:mt-8"
              />
            </SplitScreen>
            <SplitScreen></SplitScreen>
          </div>
        </FullScreen>
      </section>
      <About id="about" />
    </>
  );
};
