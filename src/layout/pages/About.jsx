import { FullScreen } from "../../shared/FullScreen";
import { Title } from "../../shared/Title";

export const About = () => {
  return (
    <section className="w-fullflex">
      <FullScreen
        height="min-h-[calc(100vh-106.5px)]"
        className="flex-col bg_about_mobile lg:bg_about bg-cover bg-center"
      >
        <div className="container flex flex-col">
          <Title text="About" />

          <div className="flex flex-col font-borel font-bold text-xl lg:text-2xl text-center mt-13 px-4 text-tertiary-500 border-4 border-amber-600">
            <p className="py-2">
              Quel est notre objectif ? Vous avez des légumes dans votre
              potager?
            </p>
            <p className="py-2">En 2 clicks, vous trouvez votre recette...</p>
          </div>

          <div className="flex flex-col font-quicksand font-bold text-lg sm:text-xl text-center italic mt-13 mb-8 px-4 border-4 border-blue-600">
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
        </div>
      </FullScreen>
    </section>
  );
};
