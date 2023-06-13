import { Link } from "react-router-dom";
import logo from "../assets/error.gif";

const ErrorPage = () => {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center gap-2">
            <img src={logo} alt="" />
            <h1>Error 404: Page Not Found</h1>
            <Link to='/' className="text-blue-600">click here to redirect to homepage</Link>
        </div>
    );
};

export default ErrorPage;