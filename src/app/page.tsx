import Image from "next/image";
import Hero from "./component/Hero";
import Aboute from "./component/Aboute";
import Header from "./component/Header";
import Project from "./component/Project";
import Reviews from "./component/Reviews";
import Contect from "./component/Contect";

export default function Home() {
  return (
    <div>
      <div className=" relative  ">
        <Header />
        <Hero />
      </div>
      <Aboute />
      <Project />
      <Reviews/>
      <Contect/>
    </div>
  );
}
