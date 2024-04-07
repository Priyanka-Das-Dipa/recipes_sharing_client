import { MdAlternateEmail } from "react-icons/md";
import { PiPhoneCallBold } from "react-icons/pi";
import { IoMdArrowDropright } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
const GetInTouch = () => {
  return (
    <div className="pb-20 px-5 md:px-0 ">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Get In Touch</h1>
        <p className="text-base pt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          ducimus fuga labore mollitia quia? Id!
        </p>
      </div>
      <div className="flex-row md:flex gap-10 mt-7">
        <div className="bg-white rounded-md space-y-3 p-10 ">
          <MdAlternateEmail className="text-4xl text-primary font-bold" />
          <h1 className="text-2xl font-bold">Email Support</h1>

          <p className="text-lg ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            libero quas repellendus fugiat optio molestias!
          </p>
          <ul>
            <li className="flex items-center">
              <IoMdArrowDropright className="text-primary text-2xl " />
              <p className="text-lg ">
                Customer Support: <span className="">support@yumma.com</span>
              </p>
            </li>
            <li className="flex items-center">
              <IoMdArrowDropright className="text-primary text-2xl " />
              <p className="text-lg ">
                Redactions: <span>support@yumma.com</span>
              </p>
            </li>
          </ul>
          <button className="flex gap-2 items-center justify-center bg-primary py-2 px-3 rounded-md text-white">
         Learn More <FiArrowUpRight />
        </button>
        </div>
        <div className="bg-white rounded-md space-y-3 p-10">
          <PiPhoneCallBold className="text-4xl text-primary font-bold" />
          <h1 className="text-2xl font-bold">Call Center</h1>
          <p className="text-lg ">
            Suspendisse justo interdum pretium mus sit erat dapibus ultricies
            mattis adipiscing diam velit ipsum
          </p>
          <ul>
            <li className="flex items-center">
              <IoMdArrowDropright className="text-primary text-2xl " />
              <p className="text-lg ">
                Customer Support: <span className="">support@yumma.com</span>
              </p>
            </li>
            <li className="flex items-center">
              <IoMdArrowDropright className="text-primary text-2xl " />
              <p className="text-lg ">
                Redactions: <span>support@yumma.com</span>
              </p>
            </li>
          </ul>
          <button className="flex gap-2 items-center justify-center bg-primary py-2 px-3 rounded-md text-white">
         Chat Now <BsChatLeft />
         </button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
