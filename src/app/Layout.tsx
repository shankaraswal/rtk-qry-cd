import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const Layout = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Header />
      <div className="w-5/6 max-w-[1440px] min-h-[700px] py-10 flex flex-col items-center bg-neutral-200 px-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
