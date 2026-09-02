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
import { RecipesDetailsText } from "../../features/recipes_details/RecipesDetailsText";
import { IngredientMiniCard } from "../../features/ingredients/IngredientMiniCard";

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
        <FullScreen height="min-h-[calc(100vh-102px)] flex justify-center font-quicksand p-4">
          <div className="max-w-50 h-fit text-white border border-white rounded-lg my-4 bg-special-white3">
            <div className="flex justify-end">
              <p className="font-semibold text-xl text-end capitalize border border-white rounded-lg bg-secondary-400 px-2 py-1">
                {recipe.category}
              </p>
            </div>

            <Title
              className="font-quicksand font-bold text-white text-xl mt-0!"
              text={recipe.name}
            />

            <div className="w-2/3 xs:w-1/2 sm:w-4/12 h-1/5 m-auto">
              <RecipeImage
                src={`/images/recipes/${recipe.slug}.webp`}
                alt={`Image représentant l'ingrédient '${recipe.name}' sur fond en bois foncé`}
              />
            </div>

            <div className="text-center py-4">{recipe.description}</div>

            <div className="flex justify-around font-semibold py-4  border border-white">
              <p>
                <FontAwesomeIcon icon={faClock} />
                <span className="pl-1">
                  {recipe.cooking + recipe.timing_preparation} min
                </span>
              </p>

              <Difficulty level={recipe.difficulty} />

              <Price price={recipe.price} />
            </div>

            <RecipesDetailsText icon={faPlateWheat} text="Ingrédients">
              <ul className="flex flex-wrap justify-center px-2 py-4">
                {recipe.ingredients.map((item, index) => (
                  <IngredientMiniCard
                    key={index}
                    className="m-1 text-sm md:text-base"
                  >
                    <span className="flex flex-col items-center">
                      {item.quantity_person} {item.unity}
                    </span>
                    <span className="text-center">{item.name}</span>
                  </IngredientMiniCard>
                ))}
              </ul>
            </RecipesDetailsText>

            <RecipesDetailsText
              icon={faBlender}
              text={`Préparation( ${recipe.number_person} personne)`}
            >
              <ul className="flex flex-col list-none p-4">
                {recipe.preparation.map((item, index) => (
                  <li key={index} className="py-0.5">
                    {item}
                  </li>
                ))}
              </ul>
            </RecipesDetailsText>
          </div>
        </FullScreen>
      </section>
    </>
  );
};
