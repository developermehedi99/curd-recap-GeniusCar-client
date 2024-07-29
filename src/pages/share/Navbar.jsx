import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
// import logo from "../../assets/contact/logo.png"

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
    .then()
    .catch()
  }

    const navlinks = <>
    <li><Link to="/">HOME</Link></li>
    <li><Link to="/contact">CONTACT US</Link></li>
    <li><Link to="/dashboard">DASHBOARD</Link></li>
    <li><Link to="/ourMenu">OUR MENU</Link></li>
    <li><Link to="/ourShop/salad">OUR SHOP</Link></li>
    
    {
      user ? <li onClick={handleLogOut}><Link >LOGOUT</Link></li> : <li><Link to="/login">LOGIN</Link></li>
    }
    </>

    return (
        <div className="navbar max-w-6xl fixed z-10 bg-opacity-30 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navlinks}
            </ul>
          </div>
          {/* <Link className="w-[60px]"><img src={logo} alt="" /></Link> */}
          <a className="btn btn-ghost text-xl">BISTRO BOSS</a>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navlinks}
          </ul>
        </div>
       
      </div>
    );
};

export default Navbar;