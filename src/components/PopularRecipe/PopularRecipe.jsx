import { FiArrowUpRight } from "react-icons/fi";
import PopularRecipeCard from "./PopularRecipeCard";

const PopularRecipe = () => {
  return (
    <section className="my-28 ">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Popular Recipes</h2>
        <button className="flex gap-2 items-center justify-center bg-primary py-2 px-3 rounded-md text-white">
          View more <FiArrowUpRight />
        </button>
      </div>
      <hr className="mt-3" />
      <div>
        <PopularRecipeCard></PopularRecipeCard>
      </div>
    </section>
  );
};

export default PopularRecipe;
