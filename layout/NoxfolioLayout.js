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
      <a href="tel:+917448844822" className="float1" target="_blank">
        <i className="fa fa-phone my-float1"></i>
      </a>

      <a href="https://api.whatsapp.com/send?phone=+917448844822&text=Hello Supreme Drop Taxi!%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." className="float" target="_blank">
        <i className="fa fa-whatsapp my-float"></i>
      </a>
    </div>
  );
};
export default NoxfolioLayout;
