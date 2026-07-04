import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl p-6">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;