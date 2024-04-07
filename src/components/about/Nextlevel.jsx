import { MdLightbulbOutline } from "react-icons/md";


const NextLevel = () => {
    return (
        
        <section className="my-36">

        <div className="flex gap-10 items-center">
            <div className="space-y-2">
                <h1 className="text-primary font-semibold">Our Value</h1>
                <h1 className="text-5xl font-bold">Taking cooking to the next level</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus recusandae nam numquam, sit cupiditate.</p>
            </div>
            <div>
                <div>
                    <div className="flex items-start gap-10">
                        <div><MdLightbulbOutline className="text-4xl text-primary font-bold"/></div>
                        <div>
                            <h1 className="text-2xl font-bold">Vision</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, delectus.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-10 mt-10">
                        <div><MdLightbulbOutline className="text-4xl text-primary font-bold"/></div>
                        <div>
                            <h1 className="text-2xl font-bold">Vision</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, delectus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default NextLevel;