import back from "../../public/images/sectionBackgraound.jpg"
import cat1 from "../../public/images/cat1.jpg"
import cat2 from "../../public/images/cat2.jpg"
import cat3 from "../../public/images/cat3.jpg"
import cat4 from "../../public/images/cat4.jpg"

const PopularCategory = () => {
    return (
        <div>
            <div className="relative" >
                <img src={back} alt="" className="w-full h-96 bg-no-repeat bg-cover opacity-0.5 bg-center "/>
                <div className="absolute inset-0 mt-16 flex flex-col items-center justify-start text-center text-white space-y-1">
                    <h1 className="text-bold ">FEATURED</h1>
                    <h2 className="text-3xl font-bold">Popular Categories</h2>
                    <p className="text-base font-medium">Popular category recipes are widely sought-after dishes that attract a large audience due to their widespread appeal and culinary versatility. </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                    <img src={cat1} alt="" className="w-96"/>
                    <img src={cat2} alt="" className="w-96"/>
                    <img src={cat3} alt="" className="w-96"/>
                    <img src={cat4} alt="" className="w-96"/>
                </div>
            </div>
        </div>
    );
};

export default PopularCategory;