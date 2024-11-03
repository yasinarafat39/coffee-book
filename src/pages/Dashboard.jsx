import { useEffect, useState } from "react";
import Heading from "../components/reuseable/Heading";
import { getAllFavoriteCoffee, removeFavorite } from "../utilities";
import Card from "../components/Home/card";
import { useLocation } from "react-router-dom";

export default function Dashboard() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    const favorite = getAllFavoriteCoffee();
    setCoffees(favorite);
  }, []);

  // handle delete from Local Storage
  const handleRemoveFromLS = (id) => {
    removeFavorite(id);
    // get favorites from localStorage after delete
    const favorite = getAllFavoriteCoffee();
    setCoffees(favorite);
  };

  return (
    <div>
      <Heading
        title={"Welcome To Dashboard"}
        subTitle={
          "Manage Coffees that you have previously added as favorite. You can view or remove them from here."
        }
      />

      <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coffees.map((coffee) => (
          <Card
            key={coffee.id}
            coffee={coffee}
            handleRemoveFromLS={handleRemoveFromLS}
          />
        ))}
      </div>
    </div>
  );
}
