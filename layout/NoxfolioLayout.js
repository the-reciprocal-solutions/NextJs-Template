"use client";
import { noxfolioUtilits } from "@/utility";
import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

const NoxfolioLayout = ({
  children,
  header,
  footer,
  noFooter,
  onePageMenu,
}) => {
  useEffect(() => {
    noxfolioUtilits.animaiton();
  }, []);

  return (
    <div className="page-wrapper">
      <Header header={header} onePageMenu={onePageMenu} />
      <SideBar />
      {children}  
      {!noFooter && <Footer footer={1} />}
      <a href="tel:+919514708880" className="float1" target="_blank">
        <i className="fa fa-phone my-float1"></i>
      </a>

      <a href="https://api.whatsapp.com/send?phone=+919514708880&text=Hello Toni and Guy Essensuals Nava India!" className="float" target="_blank">
        <img src="assets/images/widgets/Frame 1.svg" alt="whatsapp" />
      </a>
    </div>
  );
};
export default NoxfolioLayout;
