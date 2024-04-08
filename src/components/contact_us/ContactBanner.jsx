import contact from '../../../public/images/sectionBackgraound.jpg';

const ContactBanner = () => {
    return (
        <section className="mb-56">
            <div className="relative ">
          <img src={contact} alt="flover" className="w-full h-[350px] bg-cover bg-fix" />
          <div className="bg-white text-left space-y-2 py-8 pr-24 pl-10 absolute -bottom-20 right-48  rounded-lg border-l-8 border-yellow-500 ">
            <p className="font-bold text-6xl text-left">
              Contact Us
            </p>
            <p className="text-xl font-semibold text-left">We would love to hear from you.</p>
          </div>
        </div>
            
        </section>
    );
};

export default ContactBanner;