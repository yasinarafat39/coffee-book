import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Home/Banner";
import Heading from "../components/reuseable/Heading"; 
import Categories from "../components/Home/Categories";

export default function Home() {
  const categories = useLoaderData();

  return (
    <div>
      {/* Banner */}
      <Banner />
      {/* Heading */}
      <Heading
        title={"Browse Coffee by Category"}
        subTitle={
          "Choose your desired coffee category to browse through specific coffees that fit in your taste."
        }
      />
      {/* Categories tab section */}
      <div role="tablist" className="tabs tabs-lifted">
         <Categories categories={categories} />
      </div>
      <Outlet />
      {/* Dynamic Nested Component */}
    </div>
  );
}
