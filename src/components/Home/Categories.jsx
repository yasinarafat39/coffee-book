import { Link, NavLink } from "react-router-dom";

 
export default function Categories({categories}) {
  return (
    <>
        {
            categories.map((category) => <NavLink 
            to={`/category/${category.category}`}
            key={category.id} 
            role="tab" 
            className={({isActive}) => `tab ${isActive && 'tab-active'} text-2xl font-thin`}>
                {category.category}
            </NavLink>)
        }
    </>
  )
}
