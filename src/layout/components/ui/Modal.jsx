/****************************/
/** Composant pour la modal */
/****************************/
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import authService from "../../../services/auth.service";

export const Modal = ({ isOpen, isClose, onLoginSuccess, onSwitchMode }) => {
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      const form = e.target;
      const formData = new FormData(form);
      const email = formData.get("email");
      const password = formData.get("password");

      const response = await authService.login({ email, password });
      localStorage.setItem("token", response.token);

      setStatus("success");
      onLoginSuccess();
      form.reset();
    } catch (err) {
      console.log(err);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center font-quicksand bg-primary-600 z-1">
      <form
        onSubmit={handleSubmit}
        className="max-w-sm flex flex-col bg-special-greenLight rounded-lg border border-white shadow-primary-400 shadow px-6 py-4"
      >
        <div className="flex justify-end cursor-pointer">
          <FontAwesomeIcon
            icon={faXmark}
            onClick={isClose}
            className="text-white bg-primary-600 transition-opacity duration-500 ease-in-out p-2 rounded-md"
          />
        </div>
        <h1 className="text-primary-600 text-2xl text-center font-bold underline p-4">
          Me connecter
        </h1>
        <div className="flex flex-col p-4">
          <label
            htmlFor="login-email"
            className="text-xl text-white font-medium py-2 underline"
          >
            Adresse mail:
          </label>
          <input
            id="login-email"
            type="email"
            name="email"
            required
            className="border border-white rounded-sm p-1.5 bg-special-white3 focus:outline-none pl-1 text-white"
            placeholder="Votre adresse mail..."
          />
        </div>
        <div className="flex flex-col p-4 mb-4">
          <label
            htmlFor="login-password"
            className="text-xl text-white font-semibold py-2 underline"
          >
            Mot de passe:
          </label>
          <input
            id="login-password"
            type="password"
            name="password"
            required
            className="border border-white rounded-sm py-1.5 bg-special-white3 focus:outline-none pl-1 text-white"
            placeholder="Votre mot de passe..."
          />
        </div>

        {status === "success" && (
          <p className="font-quicksand font-semibold text-center text-primary-600 py-1">
            Votre connexion est en ordre !
          </p>
        )}

        {status === "error" && (
          <p className="font-quicksand font-semibold text-center text-secondary-400 py-2 ">
            Votre connexion a échoué!
          </p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="font-semibold text-base text-center text-white rounded-[1.25rem] bg-secondary-500 cursor-pointer px-3 py-2 shadow-secondary-800 shadow hover:scale-105 transition-transform duration-300 ease-out ${className} self-center my-2"
        >
          {isLoading ? "Connexion..." : "Me Connecter"}
        </button>

        <button
          type="button"
          className="m-auto underline py-2"
          onClick={() => onSwitchMode("register")}
        >
          Créer un compte !
        </button>
      </form>
    </div>
  );
};
