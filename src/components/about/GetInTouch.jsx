import { MdAlternateEmail } from "react-icons/md";
import { PiPhoneCallBold } from "react-icons/pi";

const GetInTouch = () => {
  return (
    <div className="mb-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Get In Touch</h1>
        <p className="text-base pt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          ducimus fuga labore mollitia quia? Id!
        </p>
      </div>
      <div className="flex-row md:flex gap-10 mt-7">
        <div className="bg-white space-y-1">
        <MdAlternateEmail className="text-4xl text-primary font-bold"/>
        <h1 className="text-2xl font-bold">Email Support</h1>
        <p className="text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis libero quas repellendus fugiat optio molestias!</p>

        <p className="text-lg ">Customer Support: <span className="">support@yumma.com</span></p>
        <p className="text-lg ">Redactions: <span>support@yumma.com</span></p>
        </div>
        <div className="bg-white space-y-1">
        <PiPhoneCallBold  className="text-4xl text-primary font-bold"/>
        <h1 className="text-2xl font-bold">Call Center</h1>
        <p className="text-lg ">Suspendisse justo interdum pretium mus sit erat dapibus ultricies mattis adipiscing diam velit ipsum</p>

        <p className="text-lg ">Customer Support: <span className="">support@yumma.com</span></p>
        <p className="text-lg ">Redactions: <span>support@yumma.com</span></p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
