import React from "react";
import {
  FooterContainer,
  FooterH2,
  FooterLink,
  FooterWrapper,
} from "./FooterElements";
import "./../../App.css";
// import { Route } from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper className="container py-5">
        <div className="row gx-5 px-4 gy-4">
          <div className="col-lg-3 col-sm-6">
            <FooterH2>About Us</FooterH2>
            <FooterLink href="./components/footer/MbaConsultants">MBA Consultants</FooterLink>
            <FooterLink href="./components/footer/Testimonials">Testimonials</FooterLink>
            <FooterLink href="./components/footer/Service">Service</FooterLink>
            <FooterLink href="./components/footer/Career">Careers</FooterLink>
          </div>
          <div className="col-lg-3 col-sm-6">
            <FooterH2>Reach Us</FooterH2>
            <FooterLink href="./components/footer/Appointment">Book An Appointment</FooterLink>
            <FooterLink href="./components/footer/Work">Work with US</FooterLink>
            
            <FooterLink href="./components/footer/Contact">Contact US</FooterLink>
            <FooterLink href="./components/footer/Blog">Blog</FooterLink>
          </div>
         
          <div className="col-lg-3 col-sm-6">
            <FooterH2>Follow Us</FooterH2>
            <FooterLink href="https://www.linkedin.com/company/direct-admission/about/">LinkedIn</FooterLink>
            <FooterLink href="https://www.youtube.com/channel/UC0VfvHrQizUzkLiv5zZkm-A?view_as=subscriber">Youtube</FooterLink>
            <FooterLink href="https://www.facebook.com/directadmissiononline/photos">Facebook</FooterLink>
            <FooterLink href="#">Mail US</FooterLink>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-5 ">
            <h5 className="logo-text gray-text center-align">Copyright © 2023 Direct Admission. All rights reserved.</h5>
          </div>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
