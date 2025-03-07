import { Helmet } from "react-helmet-async";
import BistoImgText from "./BistoImgText";
import CallUs from "./CallUs";
import CategorySlider from "./CategorySlider";
import Featured from "./Featured";
import OurMenu from "./OurMenu";
import RecomandedMenu from "./RecomandedMenu";
import Slider from "./Slider";
import TestMonial from "./TestMonial";

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Bistro boss || Home</title>
            </Helmet>
            <Slider></Slider>
            <CategorySlider></CategorySlider>
            <BistoImgText></BistoImgText>
            <OurMenu></OurMenu>
            <CallUs></CallUs>
            <RecomandedMenu></RecomandedMenu>
            <Featured></Featured>
            <TestMonial></TestMonial>
        </div>
    );
};

export default Home;