import BistoImgText from "./BistoImgText";
import CategorySlider from "./CategorySlider";
import Featured from "./Featured";
import OurMenu from "./OurMenu";
import Slider from "./Slider";
import TestMonial from "./TestMonial";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <CategorySlider></CategorySlider>
            <BistoImgText></BistoImgText>
            <OurMenu></OurMenu>
            <Featured></Featured>
            <TestMonial></TestMonial>
        </div>
    );
};

export default Home;