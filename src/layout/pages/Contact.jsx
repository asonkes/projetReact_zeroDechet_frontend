/************************************/
/** Composant pour la page Contact  */
/************************************/

import { IngredientLightBox } from "../../features/ingredients/IngredientLightBox";
import { FullScreen } from "../../shared/FullScreen";
import { SplitScreen } from "../../shared/SplitScreen";
import { Title } from "../../shared/Title";

export const Contact = () => {
  return (
    <section className="w-full min-h-[calc(100vh-102px)] border-4 border-red-500">
      <FullScreen
        height="min-h-[calc(100vh-102px)]"
        className="w-full h-full flex justify-center items-center bg_contact_mobile lg:bg_contact_tablet xl:bg_contact_xl 2xl:bg_contact bg-contain xl:bg-cover bg-no-repeat bg-top border-4 border-amber-500"
      >
        <SplitScreen className="min-h-[calc(100vh-102px)] border-4 border-red-400">
          <p>Page Contact</p>
        </SplitScreen>
        <SplitScreen className="min-h-[calc(100vh-102px)] flex flex-col border-4 border-amber-500">
          <Title className="border-4 border-amber-400">Contact</Title>
          <form className="font-quicksand flex-1 flex flex-col justify-center items-center p-6 border-4 border-red-500">
            <div className="w-full flex justify-center items-center p-3">
              <label className="font-bold text-primary-600 w-1/6 py-1.5 underline decoration-2 underline-offset-4">
                Nom:
              </label>
              <input
                className="w-1/2 placeholder:text-special-gray bg-special-greenLight p-1.5 rounded-lg focus:outline-none border border-primary-600 shadow-primary-400 shadow"
                type="text"
                name="lastname"
                placeholder="Veuillez indiquer votre nom..."
              />
            </div>

            <div className="w-full flex justify-center items-center p-2">
              <label className="font-bold text-primary-600 w-1/6 py-1.5 underline decoration-2 underline-offset-4">
                Prénom:
              </label>
              <input
                className="w-1/2 placeholder:text-special-gray bg-special-greenLight p-1.5 rounded-lg focus:outline-none border border-primary-600 shadow-primary-400 shadow"
                type="text"
                name="firstname"
                placeholder="Veuillez indiquer votre prénom..."
              />
            </div>

            <div className="w-full flex justify-center items-center p-2">
              <label className="font-bold text-primary-600 w-1/6 py-1.5 underline decoration-2 underline-offset-4">
                E-mail:
              </label>
              <input
                className="w-1/2 placeholder:text-special-gray bg-special-greenLight p-2 rounded-lg focus:outline-none border border-primary-700 shadow-primary-400 shadow"
                type="text"
                name="email"
                placeholder="Veuillez indiquer votre e-mail..."
              />
            </div>

            <div className="w-full flex flex-col items-center p-2">
              <label className="font-bold text-primary-600 w-2/3 py-1.5 underline decoration-2 underline-offset-4">
                Message:
              </label>
              <textarea
                className="w-2/3 h-40 placeholder:text-special-gray bg-special-greenLight p-3 mt-4 rounded-lg border border-green-700 shadow-primary-400 shadow resize-none focus:outline-none"
                type="text"
                name="message"
                placeholder="Veuillez indiquer votre message..."
              />
            </div>
          </form>
        </SplitScreen>
      </FullScreen>
    </section>
  );
};
