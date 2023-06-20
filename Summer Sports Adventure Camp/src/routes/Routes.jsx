
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import Registration from "../pages/Authentication/Registration/Registration";
import AuthRoute from "./AuthRoute";
import Instructors from "../pages/Instructors/Instructors";
import Dashboard from "../layout/Dashboard";
import AddClass from "../pages/Dashboard/Instructor/AddClass/AddClass";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses/MyClasses";
import MySelectedClasses from "../pages/Dashboard/Student/MySelectedClasses/MySelectedClasses";
import MyEnrolledClasses from "../pages/Dashboard/Student/MyEnrolledClasses/MyEnrolledClasses";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import Classes from "../pages/Classes/Classes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://b7a12-summer-camp-server-side-rionelx-slovesky.vercel.app/classes/popular')
            },
            {
                path: '/login',
                element: <AuthRoute><Login></Login></AuthRoute>
            },
            {
                path: '/register',
                element: <AuthRoute><Registration></Registration></AuthRoute>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
                children: [
                    {
                        path: '/dashboard/instructor/add-class',
                        element: <AddClass></AddClass>
                    },
                    {
                        path: '/dashboard/instructor/my-classes',
                        element: <MyClasses></MyClasses>
                    },
                    {
                        path: '/dashboard/student/my-selected-classes',
                        element: <MySelectedClasses></MySelectedClasses>
                    },
                    {
                        path: '/dashboard/student/my-enrolled-classes',
                        element: <MyEnrolledClasses></MyEnrolledClasses>
                    },
                    {
                        path: '/dashboard/admin/manage-classes',
                        element: <ManageClasses></ManageClasses>
                    },
                    {
                        path: '/dashboard/admin/manage-users',
                        element: <ManageUsers></ManageUsers>
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;