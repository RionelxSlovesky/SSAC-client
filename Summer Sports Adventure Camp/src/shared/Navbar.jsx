import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, loading, logOut } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/">
          <img className="w-8" src={logo} alt="" />
        </Link>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          SSAC
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/instructors">Instructors</Link>
          </li>
          <li>
            <Link to="/classes">Classes</Link>
          </li>
          {loading || (user ? (
            <></>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          ))}
        </ul>

        {loading || (user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  className="bg-black"
                  src={user.photoURL}
                  alt={user.displayName}
                  title={user.displayName}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
            >
              <li>
                <Link to='/dashboard'>Dashboard</Link>
              </li>
              <li>
                <Link onClick={logOut}>Logout</Link>
              </li>
            </ul>
          </div>
        ) : (
          <></>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
