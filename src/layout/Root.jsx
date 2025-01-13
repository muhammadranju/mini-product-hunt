import Navbar from "@/components/Navbar/Navbar";
import ScrollToTop from "@/utils/ScrollToTop";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <div className="min-h-[calc(100vh-429px)] ">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
