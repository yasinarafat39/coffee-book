import {Link , NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-white/40 sticky top-0 backdrop-blur-xl z-50">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          COFFEE_BOOk
        </Link>
      </div>
      <div className="flex-none">
        <ul className=" gap-11 menu-horizontal px-1">
          <li>
            <NavLink className={({isActive}) => `text-lg ${isActive? 'text-warning' : 'hover:text-warning'}`} to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => `text-lg ${isActive? 'text-warning' : 'hover:text-warning'}`} to={"/coffees"}>Coffees</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => `text-lg ${isActive? 'text-warning' : 'hover:text-warning'}`} to={"/dashboard"}>Dashboard</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
