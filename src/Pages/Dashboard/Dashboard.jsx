
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

    return (
        <div className="grid lg:grid-cols-5 grid-cols-1">
            <div className="">
                <div className="flex lg:flex-col flex-row mb-4 justify-center items-center text-xl font-semibold bg-[#E84F74] border-2 border-[#E84F74]">
                    <NavLink activeclassname="active" className="w-full text-center py-3" to={'/dashboard'}>All Task</NavLink>
                    <NavLink activeclassname="active" className="w-full text-center py-3" to={'/dashboard/add-task'}>Add Task</NavLink>
                    <NavLink activeclassname="active" className="w-full text-center py-3" to={'/dashboard/profile'}>Profile</NavLink>
                </div>
            </div>
            <div className="lg:col-span-4 mx-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;