/************************************/
/** Composant pour la page Contact  */
/************************************/

import { IngredientLightBox } from "../../features/ingredients/IngredientLightBox";
import { FullScreen } from "../../shared/FullScreen";
import { SplitScreen } from "../../shared/SplitScreen";
import { Title } from "../../shared/Title";

export const Contact = () => {
  return (
    <section className="w-full min-h-[calc(100vh-102px)]">
      <FullScreen
        height="min-h-[calc(100vh-102px)]"
        className="bg_contact bg-contain xl:bg-cover bg-no-repeat bg-top"
      >
        <div className="container flex flex-col lg:flex-row justify-center items-center">
          <SplitScreen className="h-auto flex items-center">
            <div className="w-full flex justify-center p-3">
              <img
                className="w-18-75 h-25 lg:w-25 lg:h-31-25 rounded-t-[13rem] object-cover py- border-4 border-primary-600"
                src="/images/contact/image1.jpg"
                alt="Image d'une dame blonde qui tient des légumes dans ses mains"
              />
            </div>
          </SplitScreen>
          <SplitScreen className="h-auto px-2 flex flex-col lg:px-0">
            <Title>Contact</Title>
            <form className="font-quicksand flex flex-col justify-center items-center py-6">
              <div className="w-full flex flex-col justify-center items-center lg:flex-row p-2">
                <label className="w-full font-bold text-primary-600 py-1.5 underline decoration-2 underline-offset-4 sm:w-1/2 lg:w-1/6">
                  Nom:
                </label>
                <input
                  className="w-full placeholder:text-special-gray bg-special-greenLight p-1.5 rounded-lg focus:outline-none border border-primary-600 shadow-primary-400 shadow sm:w-1/2"
                  type="text"
                  name="lastname"
                  placeholder="Veuillez indiquer votre nom..."
                />
              </div>

              <div className="w-full flex flex-col justify-center items-center lg:flex-row p-2">
                <label className="w-full font-bold text-primary-600 py-1.5 underline decoration-2 underline-offset-4 sm:w-1/2 lg:w-1/6">
                  Prénom:
                </label>
                <input
                  className="w-full placeholder:text-special-gray bg-special-greenLight p-1.5 rounded-lg focus:outline-none border border-primary-600 shadow-primary-400 shadow sm:w-1/2"
                  type="text"
                  name="firstname"
                  placeholder="Veuillez indiquer votre prénom..."
                />
              </div>

              <div className="w-full flex flex-col justify-center items-center lg:flex-row p-2">
                <label className="w-full font-bold text-primary-600 py-1.5 underline decoration-2 underline-offset-4 sm:w-1/2 lg:w-1/6">
                  E-mail:
                </label>
                <input
                  className="w-full placeholder:text-special-gray bg-special-greenLight p-2 rounded-lg focus:outline-none border border-primary-700 shadow-primary-400 shadow sm:w-1/2"
                  type="text"
                  name="email"
                  placeholder="Veuillez indiquer votre e-mail..."
                />
              </div>

              <div className="w-full flex flex-col items-center p-2">
                <label className="w-full font-bold text-primary-600 py-1.5 underline decoration-2 underline-offset-4 sm:w-1/2 lg:w-2/3">
                  Message:
                </label>
                <textarea
                  className="w-full h-40 placeholder:text-special-gray bg-special-greenLight p-3 mt-4 rounded-lg border border-green-700 shadow-primary-400 shadow resize-none sm:w-1/2 lg:w-2/3 focus:outline-none"
                  type="text"
                  name="message"
                  placeholder="Veuillez indiquer votre message..."
                />
              </div>
            </form>
          </SplitScreen>
        </div>
      </FullScreen>
    </section>
  );
};
