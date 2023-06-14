import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineManageAccounts } from "react-icons/md";
import { BiNote, BiNotepad } from "react-icons/bi";
import useUserInfo from "../hooks/useUserInfo";

const Dashboard = () => {
  const [userInfo] = useUserInfo();

  const { role } = userInfo;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side z-10">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}

          {role == "student" ? (
            <>
              <li>
                <NavLink>
                  <BiNote></BiNote> My Selected Classes
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <BiNotepad></BiNotepad> My Enrolled Classes
                </NavLink>
              </li>
            </>
          ) : (
            <></>
          )}

          {role == "instructor" ? (
            <>
              <li>
                <NavLink to='/dashboard/instructor/add-class'>
                  <AiOutlinePlus></AiOutlinePlus> Add Class
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/instructor/my-classes'>
                  <BiNotepad></BiNotepad> My Classes
                </NavLink>
              </li>
            </>
          ) : (
            <></>
          )}

          {role == "admin" ? (
            <>
              <li>
                <NavLink>
                  <BiNotepad></BiNotepad> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <MdOutlineManageAccounts></MdOutlineManageAccounts> Manage
                  Users
                </NavLink>
              </li>
            </>
          ) : (
            <></>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
