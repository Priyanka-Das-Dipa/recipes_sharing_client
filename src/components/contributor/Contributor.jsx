import { FaCheck } from "react-icons/fa";
import img from "../../../public/images/contributor.jpg"
const Contributor = () => {
  return (
    <section className="my-36">
        <div className="flex gap-12 ">
      <div>
        <div className="space-y-2">
          <h1 className="uppercase text-primary font-semibold">Benefits</h1>
          <h1 className="text-5xl font-bold">Become a Contributor and enjoy program benefits</h1>
          <p className="font-medium text-base py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            doloremque deleniti debitis dolore, accusamus voluptate numquam.
            Voluptate reiciendis, quidem alias beatae voluptatem natus repellat
            pariatur id rerum suscipit eum perspiciatis rem officia voluptas
            animi ex amet.
          </p>
        </div>
        <div>
          <ul className="space-y-4">
            <li className="flex items-start justify-start gap-5">
              <FaCheck />
              <div>
                <h1 className="text-3xl font-bold">Extra Money</h1>
                <p className="text-base font-medium">Odio blandit convallis aliquet nibh potenti auctor primis neque efficitur commodo porttitor</p>
              </div>
            </li>
            <li className="flex items-start justify-start gap-5">
              <FaCheck />
              <div>
                <h1 className="text-3xl font-bold">Free Certificate</h1>
                <p className="text-base font-medium">Odio blandit convallis aliquet nibh potenti auctor primis neque efficitur commodo porttitor</p>
              </div>
            </li>
            <li className="flex items-start justify-start gap-5">
              <FaCheck />
              <div>
                <h1 className="text-3xl font-bold">Part of the yumma family</h1>
                <p className="text-base font-medium">Odio blandit convallis aliquet nibh potenti auctor primis neque efficitur commodo porttitor</p>
              </div>
            </li>
           
          </ul>
        </div>
      </div>
      <div>
        <img src={img} alt="" className="w-[2050px] h-full bg-cover bg-no-repeat bg-fixed "/>
      </div>
    </div>
    </section>
    
  );
};

export default Contributor;
