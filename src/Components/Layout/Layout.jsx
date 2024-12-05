import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Layout() {
  return (
    <>
  <section className="dark:bg-black dark:bg-opacity-95">
  <Navbar/>
        <div className="container pt-20 py-7">
        <Outlet></Outlet>
        </div>
      <Footer/>
  </section>
    </>
  )
}
