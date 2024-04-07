import flover from "../../public/images/flover-1.jpg";
import { BsQuote } from "react-icons/bs";

const Flovers = () => {
  return (
    <section className="my-56 ">
      <div className="flex gap-16 items-center justify-center ">
        <div className="relative ">
          <img src={flover} alt="flover" className="rounded-xl" />
          <div className="bg-white w-96 space-y-2 py-8 px-14 absolute -top-44 -left-5 rounded-lg text-center">
            <div className="flex justify-center items-center">

          <BsQuote className="text-5xl text-center text-yellow-500" />
            </div>
            <p className="font-bold text-xl text-center">
              “Ask not what you can do for your country. Ask what’s for lunch.”
            </p>
            <p className="text-sm text-center">- Orson Welles</p>
          </div>
        </div>
        <div className="space-y-4">
          <h5 className="text-sm text-primary font-bold">WHO WE ARE</h5>
          <h1 className="text-5xl font-bold">
            One thousand flavors in one place.
          </h1>
          <p className="text-base mb-5">
            Tortor scelerisque feugiat nibh ridiculus nisi si. Enim penatibus ac
            sed primis convallis fames taciti dolor tempor. Faucibus morbi
            posuere sagittis turpis class vivamus penatibus ornare mollis donec
            scelerisque.
          </p>
          <p className="text-base mb-5">
            Tortor scelerisque feugiat nibh ridiculus nisi si. Enim penatibus ac
            sed primis convallis fames taciti dolor tempor. Faucibus morbi
            posuere sagittis turpis class vivamus penatibus ornare mollis donec
            scelerisque.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Flovers;
