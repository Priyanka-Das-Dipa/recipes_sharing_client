import chef from "../../../public/images/chef.jpg";
const Update = () => {
  return (
    <div className="relative">
      <img
        src={chef}
        alt=""
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <form className="bg-white p-8 rounded-md shadow-md">
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
