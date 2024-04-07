import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-red-50/60">
        <div className="max-w-7xl mx-auto ">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
