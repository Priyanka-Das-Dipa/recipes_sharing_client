import { MdLightbulbOutline } from "react-icons/md";
import { RiLeafFill } from "react-icons/ri";

const NextLevel = () => {
  return (
    <section className="px-5 md:px-0">
      <div className="lg:flex md:flex-row gap-10 items-start justify-between py-24 md:py-36">
        <div className="space-y-2">
          <h1 className="text-primary font-semibold">Our Value</h1>
          <h1 className="text-5xl font-bold">
            Taking cooking to the next level
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            possimus recusandae nam numquam, sit cupiditate.
          </p>
        </div>
        <div className="mt-7 md:mt-7">
          <div className="flex items-start justify-start gap-10 bg-white py-8 px-12 rounded-md">
            <div className="p-3 bg-slate-100 rounded-full">
              <MdLightbulbOutline className="text-4xl text-primary font-bold" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Vision</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloremque, delectus.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-start gap-10 mt-10 bg-white py-8 px-12 rounded-md">
            <div className="p-3 bg-slate-100 rounded-full">
              <RiLeafFill className="text-4xl text-primary font-bold" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Vision</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloremque, delectus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextLevel;
