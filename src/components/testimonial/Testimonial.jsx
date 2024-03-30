const Testimonial = () => {
  return (
    <section>
      <div className="text-center space-y-2">
        <h1 className="uppercase text-primary font-semibold">Testimonial</h1>
        <h2 className="text-5xl font-bold">What they say</h2>
        <p className="text-lg pt-3 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deleniti,
          incidunt eius doloribus dolores praesentium.
        </p>
      </div>
      <div>
        <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8">
              <div>
                <div className="flex gap-0.5 text-green-500 justify-center">
                  <img
                    className="size-[80px] bg-slate-500 object-cover rounded-full duration-500" 
                    src="https://source.unsplash.com/300x300/?profile"
                    alt="avatar navigate ui"
                  />
                </div>

                <div className="mt-4 text-center">
                  <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                    Stayin Alive
                  </p>

                  <p className="mt-4 leading-relaxed text-gray-700">
                    No, Rose, they are not breathing. And they have no arms or
                    legs … Where are they? You know what? If we come across
                    somebody with no arms or legs, do we bother resuscitating
                    them? I mean, what quality of life do we have there?
                  </p>
                </div>
              </div>

              <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6 text-center">
                &mdash; Michael Scott
              </footer>
            </blockquote>
            <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8">
              <div>
                <div className="flex gap-0.5 text-green-500 justify-center">
                  <img
                    className="size-[80px] bg-slate-500 object-cover rounded-full duration-500" 
                    src="https://source.unsplash.com/300x300/?profile"
                    alt="avatar navigate ui"
                  />
                </div>

                <div className="mt-4 text-center">
                  <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                    Stayin Alive
                  </p>

                  <p className="mt-4 leading-relaxed text-gray-700">
                    No, Rose, they are not breathing. And they have no arms or
                    legs … Where are they? You know what? If we come across
                    somebody with no arms or legs, do we bother resuscitating
                    them? I mean, what quality of life do we have there?
                  </p>
                </div>
              </div>

              <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6 text-center">
                &mdash; Michael Scott
              </footer>
            </blockquote>
            <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8">
              <div>
                <div className="flex gap-0.5 text-green-500 justify-center">
                  <img
                    className="size-[80px] bg-slate-500 object-cover rounded-full duration-500" 
                    src="https://source.unsplash.com/300x300/?profile"
                    alt="avatar navigate ui"
                  />
                </div>

                <div className="mt-4 text-center">
                  <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                    Stayin Alive
                  </p>

                  <p className="mt-4 leading-relaxed text-gray-700">
                    No, Rose, they are not breathing. And they have no arms or
                    legs … Where are they? You know what? If we come across
                    somebody with no arms or legs, do we bother resuscitating
                    them? I mean, what quality of life do we have there?
                  </p>
                </div>
              </div>

              <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6 text-center">
                &mdash; Michael Scott
              </footer>
            </blockquote>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
