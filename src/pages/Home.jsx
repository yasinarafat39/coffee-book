import Banner from "../components/Home/Banner";
import Heading from "../components/reuseable/Heading";

 
export default function Home() {
  return (
    <div>
      {/* Banner */}
      <Banner />
      {/* Heading */}
      <Heading title={"Browse Coffee by Category"} subTitle={"Choose your desired coffee category to browse through specific coffees that fit in your taste."} />
      {/* Categories tab section */}
      {/* Dynamic Nested Component */}
    </div>
  )
}
