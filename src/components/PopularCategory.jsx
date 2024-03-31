import back from "../../public/images/sectionBackgraound.jpg";
import cat1 from "../../public/images/cat1.jpg";
import cat2 from "../../public/images/cat2.jpg";
import cat3 from "../../public/images/cat3.jpg";
import cat4 from "../../public/images/cat4.jpg";

const PopularCategory = () => {
  return (
    <div>
      <div className="relative mb-72">
        <img
          src={back}
          alt=""
          className="w-full h-96 bg-no-repeat bg-cover opacity-0.5 bg-center "
        />
        <div className="absolute inset-0 mt-24 flex flex-col items-center justify-start text-center text-white space-y-1">
          <h1 className="text-bold ">FEATURED</h1>
          <h2 className="text-3xl font-bold">Popular Categories</h2>
          <p className="text-base font-medium">
            Popular category recipes are widely sought-after dishes that attract
            a large audience due to their widespread appeal and culinary
            versatility.{" "}
          </p>
        </div>
        <div className="absolute  -bottom-44 grid grid-cols-1 md:grid-cols-4 gap-12 justify-center items-center ">
          <div className="relative w-72 h-72 overflow-hidden group border-solid rounded-full border-8 border-white ">
            <div className="absolute inset-0 bg-black opacity-50 rounded-full"></div>
            <img
              src={cat1}
              alt=""
              className=" group-hover:scale-100 scale-110 duration-200 rounded-full   bg-cover bg-no-repeat size-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <h3 className="text-lg font-bold mt-3 text-white">
                Category Name 1
              </h3>
              <button className="px-4 py-2 mt-2 bg-primary text-white rounded-lg">
                Discover Recipes
              </button>
            </div>
          </div>
          <div className="relative w-72 h-72 overflow-hidden group border-solid rounded-full border-8 border-white ">
            <img
              src={cat2}
              alt=""
              className=" group-hover:scale-100 scale-110 duration-200 rounded-full   bg-cover bg-no-repeat size-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <h3 className="text-lg font-semibold mt-3">Category Name 1</h3>
              <button className="px-4 py-2 mt-2 bg-primary text-white rounded-lg">
                Discover Recipes
              </button>
            </div>
            <div className="absolute inset-0 bg-black opacity-50 rounded-full"></div>
          </div>
          <div className="relative w-72 h-72 overflow-hidden group border-solid rounded-full border-8 border-white ">
            <img
              src={cat3}
              alt=""
              className=" group-hover:scale-100 scale-110 duration-200 rounded-full   bg-cover bg-no-repeat size-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <h3 className="text-lg font-semibold mt-3">Category Name 1</h3>
              <button className="px-4 py-2 mt-2 bg-primary text-white rounded-lg">
                Discover Recipes
              </button>
            </div>
            <div className="absolute inset-0 bg-black opacity-50 rounded-full"></div>
          </div>
          <div className="relative w-72 h-72 overflow-hidden group border-solid rounded-full border-8 border-white ">
            <img
              src={cat4}
              alt=""
              className=" group-hover:scale-100 scale-110 duration-200 rounded-full   bg-cover bg-no-repeat size-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <h3 className="text-lg font-semibold mt-3">Category Name 1</h3>
              <button className="px-4 py-2 mt-2 bg-primary text-white rounded-lg">
                Discover Recipes
              </button>
            </div>
            <div className="absolute inset-0 bg-black opacity-50 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;
