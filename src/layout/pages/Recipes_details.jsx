import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import recipeService from "../../services/recipes.service";
import { FullScreen } from "../../shared/FullScreen";
import { Title } from "../../shared/Title";
import { Loader } from "../../shared/Loader";

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
    <section className="w-full min-h-[calc(100vh-102px)] flex bg-primary-600">
      <FullScreen height="min-h-[calc(100vh-102px)]">
        <div className="container py-4">
          <Title className="text-white" text={recipe.name} />
        </div>
      </FullScreen>
    </section>
  );
};
