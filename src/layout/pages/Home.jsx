import { FullScreen } from "../../shared/FullScreen";
import BgImage from "/images/background/home/bg_home.webp";
import { SplitScreen } from "../../shared/SplitScreen";
import { Button } from "../../shared/Button";

export const Home = () => {
  return (
    <section className="w-full flex flex-1 border-2 border-amber-700">
      <FullScreen
        className="bg-cover bg-center border-4 border-red-800"
        bgImage={BgImage}
      >
        <div className="container flex flex-1">
          <SplitScreen className="flex flex-col justify-center items-center text-center text-primary-600">
            <h1 className="flex flex-col font-montserrat text-4xl font-extrabold uppercase px-4 py-8 border-4 border-red-500">
              <span className="py-2">Potager</span>
              <span className="p-2">zero déchet</span>
            </h1>

            <div className="font-quicksand text-lg font-semibold border-4 border-blue-700 px-4 py-8">
              <p>Vous cultivez vos légumes, je vous aide à les cuisiner.</p>
              <p>
                Ajoutez les récoltes de votre potager et découvrez des recettes
                fraîches, de saison et zéro déchet, pensées pour utiliser chaque
                ingrédient au mieux.
              </p>
              <p>Votre potager devient votre meilleure source d'inspiration.</p>
            </div>

            <p className="font-quicksand text-lg font-bold uppercase p-4">
              Cuisiner frais, local et sans gaspiller.
            </p>

            <Button className="mt-6" text="On commence" />
          </SplitScreen>
          <SplitScreen></SplitScreen>
        </div>
      </FullScreen>
    </section>
  );
};
