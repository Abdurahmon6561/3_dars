import React from "react";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import Building from "./component/Building/Building";
import About from "./component/About/About";
import Blogs from "./component/Blogs/Blogs";
import Massage from "./component/Massage/Massage";
import Footer from "./component/Footer/Footer";

const App = () => {
  return (
    <div className=" container h-full w-full mt-6">
      <Header />
      <Hero />
      <Building />
      <About />
      <Blogs />
      <Massage />
      <Footer />
    </div>
  );
};

export default App;
