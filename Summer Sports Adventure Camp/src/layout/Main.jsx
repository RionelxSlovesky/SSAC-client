import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";


const Main = () => {
    return (
        <div className="max-w-[1400px] mx-auto flex flex-col min-h-screen">
            <Navbar></Navbar>
            <div className="flex-grow">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;