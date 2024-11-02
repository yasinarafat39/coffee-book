import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-white/40 sticky top-0 backdrop-blur-xl">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          COFFEE_BOOk
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/coffees"}>Coffees</Link>
          </li>
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
