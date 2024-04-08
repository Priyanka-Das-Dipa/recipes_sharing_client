import aboutBanner from "../../../public/images/about.jpg"

const AboutBanner = () => {
    return (
        <section className="mb-56">
            <div className="relative ">
          <img src={aboutBanner} alt="flover" className="w-full h-[450px] bg-cover bg-fix" />
          <div className="bg-white text-left space-y-2 py-8 px-24 absolute -bottom-20 right-48  rounded-lg border-l-8 border-yellow-500 ">
            <p className="font-bold text-6xl text-left">
              About Us
            </p>
            <p className="text-xl font-semibold text-left">Beyond the boundaries of taste.</p>
          </div>
        </div>
            
        </section>
    );
};

export default AboutBanner;