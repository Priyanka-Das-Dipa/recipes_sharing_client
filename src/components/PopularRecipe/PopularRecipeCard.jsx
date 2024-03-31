
import { CiUser } from "react-icons/ci";
import usePopularRecipe from "../../hooks/usePopularRecipe";

const PopularRecipeCard = () => {
  const [popularRecipe, ] = usePopularRecipe();
    console.log(popularRecipe?.chef_name);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {
          popularRecipe?.map((recipe, index) => (
            <div key={index} className="px-4 py-8 shadow-lg max-w-[350px] font-sans rounded-xl space-y-6 my-20 mx-auto bg-white">
            <div className="flex justify-center w-full h-48 lg:h-[280px] relative">
              <div className="flex justify-end items-center left-4 right-4 top-4 absolute">
                <button className=" bg-primary hover:bg-primary/60  duration-200 text-white font-medium px-3 py-1 rounded-xl flex items-center gap-2">
                  <CiUser className="font-extrabold text-xl"/> by Chef {recipe?.chef_name}
                </button>
              </div>
              <img
                className="rounded-lg bg-black/40 w-full h-full"
                src={recipe?.image_url}
                alt="card navigate ui"
              />
            </div>
            <div className="text-left w-[85%] mx-auto font-semibold space-y-2">
              <h1 className="uppercase text-primary font-semibold text-base">{recipe?.dish_type}</h1>
              <h6 className="text-xl font-bold">
                {recipe?.dish_name}
              </h6>
              <p className="text-stone-700 text-xs md:text-sm font-semibold">
               {recipe?.description}
              </p>
            </div>
          </div>
          ))
        }
      </div>
      
    </div>
  );
};

export default PopularRecipeCard;
