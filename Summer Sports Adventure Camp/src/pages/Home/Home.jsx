import { useLoaderData } from "react-router-dom";
import ExtraSection from "./ExtraSection/ExtraSection";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import TopSlider from "./TopSlider/TopSlider";


const Home = () => {
    const classes = useLoaderData();
    return (
        <div>
            <TopSlider></TopSlider>
            <PopularClasses classes={classes}></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;