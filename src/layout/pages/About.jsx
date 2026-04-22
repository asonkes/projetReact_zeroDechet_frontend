import { FullScreen } from "../../shared/FullScreen";
import { Title } from "../../shared/Title";
import { Button } from "../../shared/button/Button";

export const About = (props) => {
  const { id } = props;

  return (
    <section id={id} className="w-full">
      <FullScreen
        height="min-h-[calc(100vh-106.5px)]"
        className="flex flex-col bg_about_mobile lg:bg_about bg-cover bg-center"
      >
        <div className="container flex flex-col">
          <Title text="About" />

          <div className="flex flex-col font-borel font-bold text-lg lg:text-xl text-center mt-5 px-4 text-tertiary-500">
            <p className="py-2">
              Quel est notre objectif ? Vous avez des légumes dans votre
              potager?
            </p>
            <p className="py-2">En 2 clicks, vous trouvez votre recette...</p>
          </div>

          <div className="flex flex-col font-bree_Serif text-base lg:text-lg text-center italic mt-5 px-4">
            <p className="py-2">
              <span className="underline underline-offset-4">
                L’idée est simple :
              </span>
              <span> vous récoltez, je vous propose quoi cuisiner.</span>
            </p>
            <p className="py-2">
              Ajoutez les légumes de votre potager et l’application génère des
              recettes adaptées, faciles et zéro déchet.
            </p>
            <p className="py-2">
              <span className="underline underline-offset-4">
                Pas besoin d’ingrédients compliqués :
              </span>
              <span> on cuisine avec ce qu’on a déjà sous la main.</span>
            </p>
            <p className="py-2">
              <span className="underline underline-offset-4">L’objectif :</span>
              <span>
                {" "}
                éviter le gaspillage et redécouvrir vos légumes, même ceux que
                la famille boude parfois.
              </span>
            </p>
            <p className="py-2">
              Avec quelques idées simples, ces légumes dépréciés deviennent des
              plats savoureux, surprenants et accessibles.
            </p>
            <p className="py-2">
              Une cuisine écologique, créative et pensée pour le quotidien.
            </p>
          </div>

          <div className="font-bree_Serif text-center mt-5">
            <h4 className="text-lg lg:text-xl py-2">
              <span className="underline underline-offset-4">
                Le principe est simple :
              </span>
              <span>☺️</span>
            </h4>
            <div className="text-base lg:text-lg">
              <p className="py-2">🩷 1. Je choisis mes ingrédients</p>
              <p className="py-2">🩷 2. Je découvre mes recettes</p>
              <p className="py-2">🩷 3. Je cuisine sans gaspiller</p>
            </div>
          </div>
          <Button
            to="/ingredients"
            text="Je sélectionne mes ingrédients"
            className="mt-2 mb-6 mx-auto sm:mt-8"
          />
        </div>
      </FullScreen>
    </section>
  );
};
