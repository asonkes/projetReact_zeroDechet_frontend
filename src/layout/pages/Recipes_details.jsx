import { FullScreen } from "../../shared/FullScreen";
import { Title } from "../../shared/Title";

export const Recipes_details = () => {
  return (
    <>
      <section
        className={`w-full min-h-[calc(100vh-102px)] flex bg-primary-600`}
      >
        <FullScreen height={`min-h-[calc(100vh-102px)]`}>
          <div className="container py-4">
            <Title className={`text-white`} text={recipe.name} />
          </div>
        </FullScreen>
      </section>
    </>
  );
};
