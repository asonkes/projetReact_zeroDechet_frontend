/************************************/
/** Composant pour la page Contact  */
/************************************/
import { Helmet } from "react-helmet-async";
import { IngredientLightBox } from "../../features/ingredients/IngredientLightBox";
import { FullScreen } from "../../shared/FullScreen";
import { SplitScreen } from "../../shared/SplitScreen";
import { Title } from "../../shared/Title";
import { ButtonCard } from "../../shared/button/ButtonCard";
import { useState } from "react";

export const Contact = () => {
  const [status, setStatus] = useState(null);

  /** A l'envoi du form */
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const form = e.target;
      const formData = new FormData(form);

      const lastname = formData.get("lastname");
      console.log(lastname);

      const firstname = formData.get("firstname");
      console.log(firstname);

      const email = formData.get("email");
      console.log(email);

      const message = formData.get("message");
      console.log(message);

      setStatus("success");

      setTimeout(() => setStatus(null), 3000);
    } catch (err) {
      console.log(err);

      setStatus("error");
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact – Potager zéro déchet</title>
        <meta
          name="description"
          content="Contactez-nous pour toute question sur votre potager zéro déchet, vos recettes ou vos ingrédients sélectionnés."
        />
      </Helmet>
      <section className="w-full min-h-[calc(100vh-102px)]">
        <FullScreen
          height="min-h-[calc(100vh-102px)]"
          className="bg_contact bg-contain xl:bg-cover bg-no-repeat bg-top bg-special-greenLight"
        >
          <div className="container flex flex-col lg:flex-row justify-center items-center">
            <SplitScreen className="hidden h-auto lg:block items-center">
              <div className="w-full flex justify-center p-3">
                <img
                  className="w-18-75 h-25 lg:w-25 lg:h-31-25 rounded-t-[13rem] object-cover border-4 border-primary-600"
                  src="/images/contact/image1.jpg"
                  alt="Image d'une dame blonde qui tient des légumes dans ses mains"
                />
              </div>
            </SplitScreen>
            <SplitScreen className="h-auto px-2 flex flex-col lg:px-0">
              <Title>Contact</Title>
              <form
                onSubmit={handleSubmit}
                className="font-quicksand flex flex-col justify-center items-center py-6"
              >
                <div className="w-full flex flex-col justify-center items-center lg:flex-row p-2">
                  <label
                    htmlFor="lastname"
                    className="w-full font-bold text-primary-600 py-1.5 underline decoration-2 underline-offset-4 sm:w-1/2 lg:w-1/6"
                  >
                    Nom:
                  </label>
                  <input
                    id="lastname"
                    className="w-full bg-white placeholder:text-primary-700 p-2 mt-2 lg:mt-0 rounded-lg focus:outline-none border border-primary-600 shadow-primary-400 shadow sm:w-1/2"
                    type="text"
                    name="lastname"
                    placeholder="Veuillez indiquer votre nom..."
                  />
                </div>

                <div className="w-full flex flex-col justify-center items-center lg:flex-row p-2">
                  <label
                    htmlFor="firstname"
                    className="w-full font-bold text-primary-600 py-1.5 underline decoration-2 underline-offset-4 sm:w-1/2 lg:w-1/6"
                  >
                    Prénom:
                  </label>
                  <input
                    id="firstname"
                    className="w-full bg-white placeholder:text-primary-600 p-2 mt-2 lg:mt-0 rounded-lg focus:outline-none border border-primary-600 shadow-primary-400 shadow sm:w-1/2"
                    type="text"
                    name="firstname"
                    placeholder="Veuillez indiquer votre prénom..."
                  />
                </div>

                <div className="w-full flex flex-col justify-center items-center lg:flex-row p-2">
                  <label
                    htmlFor="email"
                    className="w-full font-bold text-primary-600 py-1.5 underline decoration-2 underline-offset-4 sm:w-1/2 lg:w-1/6"
                  >
                    E-mail:
                  </label>
                  <input
                    id="email"
                    className="w-full bg-white placeholder:text-primary-600 p-2 mt-2 lg:mt-0 rounded-lg focus:outline-none border border-primary-700 shadow-primary-400 shadow sm:w-1/2"
                    type="email"
                    name="email"
                    placeholder="Veuillez indiquer votre e-mail..."
                  />
                </div>

                <div className="w-full flex flex-col items-center p-2">
                  <label
                    htmlFor="message"
                    className="w-full font-bold text-primary-600 py-1.5 underline decoration-2 underline-offset-4 sm:w-1/2 lg:w-2/3"
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    className="w-full h-40 bg-white placeholder:text-primary-600 p-3 mt-4 rounded-lg border border-green-700 shadow-primary-400 shadow resize-none sm:w-1/2 lg:w-2/3 focus:outline-none"
                    name="message"
                    placeholder="Veuillez indiquer votre message..."
                  />
                </div>

                <button
                  type="submit"
                  className="font-montserrat bg-primary-800 text-white cursor-pointer py-2 px-2 hover:scale-105 hover:bg-primary-700 rounded-lg mt-3"
                >
                  Envoyer
                </button>
              </form>

              {status === "success" && (
                <p className="font-quicksand font-semibold text-center text-primary-600">
                  Votre message a bien été envoyé !
                </p>
              )}

              {status === "error" && (
                <p className="font-quicksand font-semibold text-center text-secondary-400">
                  Votre message n'a pas été envoyé, veuillez rééssayer!
                </p>
              )}
            </SplitScreen>
          </div>
        </FullScreen>
      </section>
    </>
  );
};
