import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Pages/Dashboard/Profile/Profile";
import AddTask from "../Pages/Dashboard/AddTask/AddTask";
import TaskList from "../Pages/Dashboard/TaskList/TaskList";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: "/dashboard",
                        element: <TaskList></TaskList>
                    },
                    {
                        path: "/dashboard/add-task",
                        element: <AddTask></AddTask>
                    },
                    
                    {
                        path: "/dashboard/profile",
                        element: <Profile></Profile>
                    },
                   
                   
                ],
            }
        ]
    },
]);

export default Routes;