import { FaRegTrashAlt } from "react-icons/fa"; 
import { Link, useLocation } from "react-router-dom";
import { removeFavorite } from "../../utilities";

export default function Card({ coffee, handleRemoveFromLS }) {
  const { pathname } = useLocation(); 
  const { name, image, category, origin, type, id, rating, popularity } = coffee;

 
  return (
    <div className="relative">
      <Link to={`/coffee/${id}`}>
        <div className="card card-compact shadow-xl">
          <figure>
            <img src={image} alt={name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Category: {category}</p>
            <p>Type: {type}</p>
            <p>Origin: {origin}</p>
            <p>Rating: {rating}</p>
            <p>Popular: {popularity}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-success">Buy Now</button>
            </div>
          </div>
        </div>
      </Link>

      {pathname === "/dashboard" && (
        <button onClick={() => handleRemoveFromLS(id)} className="  absolute -top-6 -right-3 bg-rose-400 text-white rounded-full p-3 text-2xl">
         <FaRegTrashAlt />
        </button>
      )}
    </div>
  );
}
