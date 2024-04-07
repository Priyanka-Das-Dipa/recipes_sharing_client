import image from "../../../public/images/background.jpg";

const Update = () => {
  return (
    <div className="relative">
      <img src={image} alt="" />
      <div className="absolute inset-0 bg-black opacity-50 "></div>
      <div className="absolute inset-0 flex-col items-center image-container justify-center flex">
       

        <div className="space-y-1 mb-3 text-left justify-start">
          <h1 className="text-5xl font-bold text-white">
            Get update delicious recipes everyday!
          </h1>
          <p className="text-white">
            Subscribe now to receive our daily newsletter filled with
            mouthwatering recipes, cooking tips, and culinary inspiration
            straight to your inbox. Whether you are a cooking enthusiast or just
            looking for new ideas, our curated selection of delicious recipes
            will delight your taste buds and elevate your culinary adventures.
          </p>
        </div>
        <form className="bg-white p-8 rounded-md shadow-md justify-start">
          <div className="flex gap-5">
            <div>
              <label
                htmlFor="UserEmail"
                className="block text-xs font-medium text-gray-700"
              >
                First Name{" "}
              </label>

              <input
                type="text"
                className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="UserEmail"
                className="block text-xs font-medium text-gray-700"
              >
                Last Name{" "}
              </label>

              <input
                type="text"
                className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="UserEmail"
              className="block text-xs font-medium text-gray-700"
            >
              Email{" "}
            </label>

            <input
              type="email"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
          </div>
          <div>
            <button className="bg-primary w-full px-2 rounded-md py-1 mt-3">
              Sign up
            </button>
          </div>
        </form>
    
      </div>
    </div>
  );
};

export default Update;
