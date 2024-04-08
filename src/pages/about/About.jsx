import Flovers from "../../components/Flovers";
import AboutBanner from "../../components/about/AboutBanner";
import GetInTouch from "../../components/about/GetInTouch";
import NextLevel from "../../components/about/Nextlevel";


const About = () => {
    return (
        <div className="space-y-7">
            <AboutBanner></AboutBanner>
            <Flovers></Flovers>
            <NextLevel></NextLevel>
            <GetInTouch></GetInTouch>
        </div>
    );
};

export default About;