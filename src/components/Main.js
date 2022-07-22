import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route
}
  from 'react-router-dom';
import 'primeicons/primeicons.css';
import { Home } from "../pages/home/Home";
import { Facilities } from "../pages/facilities/Facilities";
import { Rooms } from "../pages/rooms/Rooms";
import { Contact } from "../pages/contact/Contact";


import footer_logo from "../assets/footer/logo.png";
import "../components/Main.css";


export function Main() {
  return (
    <Router>
      <div className="wrapper">

        <div className="nav">
          <div className="logo">
            <NavLink to="/">HNG Hotel</NavLink>
          </div>
          <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="facilities">Facilities</NavLink>
            <NavLink to="rooms">Rooms</NavLink>
            <NavLink to="contact">Contact Us</NavLink>
          </div>
        </div>

        <div className="result_page">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="facilities" element={<Facilities />}></Route>
            <Route path="rooms" element={<Rooms />}></Route>
            <Route path="contact" element={<Contact />}></Route>
          </Routes>
        </div>

        <div className="footer">
          <div className="top">
            <div className="logo">
              <img src={footer_logo} alt="" />
            </div>
            <div className="follow">
              <i className="pi pi-instagram"></i>
              <i className="pi pi-twitter"></i>
            </div>
            <div className="links">
              <div className="box">
                <NavLink to="contact">Contact Us</NavLink>
                <NavLink to="/">Reviews</NavLink>
                <NavLink to="/">Rates</NavLink>
              </div>
              <div className="box">
                <NavLink to="/">Book and Track</NavLink>
                <NavLink to="facilities">Facilities</NavLink>
                <NavLink to="/">About Us</NavLink>
              </div>
            </div>

          </div>
          <p>© 2020 HNG Hotel. All Rights Reserved.</p>

        </div>

      </div>
    </Router>
  );
}
