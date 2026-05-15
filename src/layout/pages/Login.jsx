/**********************************/
/** Composant pour la page Login  */
/**********************************/
import { Helmet } from "react-helmet-async";

export const Login = () => {
  return (
    <>
      <Helmet>
        <title>Connexion - Potager zéro déchet</title>
        <meta
          name="description"
          content="Connectez-vous pour accéder à votre espace, gérer vos recettes et retrouver vos ingrédients sélectionnés."
        />
      </Helmet>
      <div>Page Login</div>;
    </>
  );
};
