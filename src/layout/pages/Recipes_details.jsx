import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import recipeService from "../../services/recipes.service";
import { FullScreen } from "../../shared/FullScreen";
import { Title } from "../../shared/Title";
import { Loader } from "../../shared/Loader";
import { SplitScreen } from "../../shared/SplitScreen";
import { RecipeImage } from "../../features/recipes/RecipeImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faPlateWheat } from "@fortawesome/free-solid-svg-icons";
import { faBlender } from "@fortawesome/free-solid-svg-icons";
import { Difficulty } from "../../features/recipes_details/difficulty";
import { Price } from "../../features/recipes_details/Price";

export const Recipes_details = () => {
  const { slug } = useParams();
  const { state } = useLocation();
  const [recipe, setRecipe] = useState(state?.recipe || null);
  /* On le met en true => reste actif */
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const response = async () => {
      try {
        const data = await recipeService.getBySlug(slug);
        setRecipe(data);

        setFirstLoad(false);
      } catch (error) {
        console.log(error);
      }
    };

    response();
  }, [slug]);

  if (firstLoad) {
    return (
      <section className="w-full min-h-[calc(100vh-102px)] bg-primary-600">
        <FullScreen
          height="min-h-[calc(100vh-106.5px)]"
          className="flex justify-center items-center"
        >
          <Loader />
        </FullScreen>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>Détail Recette - Potager zéro déchet</title>
        <meta name="description" content={recipe.description} />
      </Helmet>
      <section className="w-full min-h-[calc(100vh-102px)] flex bg-primary-600">
        <FullScreen height="min-h-[calc(100vh-102px)] flex justify-center font-quicksand text-white py-4">
          <SplitScreen className="border border-white rounded-lg">
            <div className="flex justify-end">
              <p className="font-semibold text-xl text-end capitalize border border-white rounded-lg bg-secondary-400 px-2 py-1">
                {recipe.category}
              </p>
            </div>
            <div className="-mt-3">
              <Title
                className="font-quicksand font-bold text-white text-xl border-4 border-red-400"
                text={recipe.name}
              />
            </div>
            <div className="w-1/3 h-1/3 m-auto">
              <RecipeImage
                src={`/images/recipes/${recipe.slug}.webp`}
                alt={`Image représentant l'ingrédient '${recipe.name}' sur fond en bois foncé`}
              />
            </div>
            <div className="flex justify-around border-4 border-orange-300">
              <p>
                <FontAwesomeIcon icon={faClock} />
                <span className="pl-1">
                  {recipe.cooking + recipe.timing_preparation} min
                </span>
              </p>

              <Difficulty level={recipe.difficulty} />

              <Price price={recipe.price} />
            </div>
            <div className="border-4 border-blue-400">
              <p className="font-semibold text-xl text-center py-2">
                <FontAwesomeIcon icon={faPlateWheat} />
                <span className="pl-1">Ingrédients</span>
              </p>
            </div>
            <div className="border-4 border-red-200">
              <p className="font-semibold text-xl text-center py-2">
                <FontAwesomeIcon icon={faBlender} />
                <span>Préparation</span>
              </p>
              <p></p>
            </div>
          </SplitScreen>
        </FullScreen>
      </section>
    </>
  );
};
