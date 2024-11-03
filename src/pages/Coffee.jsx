import { useLoaderData } from "react-router-dom";
import Card from "../components/Home/card";
import { useState } from "react";

export default function Coffee() {
  const data = useLoaderData() || [];

  const [coffees, setCoffees] = useState(data);

  const handleSort = (sortBy) => {
    if (sortBy === "popularity") {
      // sort by popularity
      const sorted = [...data].sort((a, b) => b.popularity - a.popularity);
      setCoffees(sorted);
    } else if (sortBy === "rating") {
      // sort by rating
      const sortedByRating = [...data].sort((a, b) => b.rating - a.rating);
      setCoffees(sortedByRating);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-thin">
          Sort Coffee&apos;s by Popularity & Reality-&gt;
        </h3>
        <div className="flex gap-5 justify-between items-center">
          <div
            onClick={() => handleSort("popularity")}
            className="btn btn-warning"
          >
            Sort by Popularity
          </div>
          <div onClick={() => handleSort("rating")} className="btn btn-warning">
            Sort by Rating
          </div>
        </div>
      </div>

      <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </>
  );
}
