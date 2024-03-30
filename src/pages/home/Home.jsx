import Banner from "../../components/Banner";
import Flovers from "../../components/Flovers";
import PopularCategory from "../../components/PopularCategory";
import PopularRecipe from "../../components/PopularRecipe/PopularRecipe";
import Contributor from "../../components/contributor/Contributor";
import Update from "../../components/update/Update";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Flovers></Flovers>
      <PopularRecipe></PopularRecipe>
      <PopularCategory></PopularCategory>
      <Update></Update>
      <Contributor></Contributor>
    </div>
  );
};

export default Home;
