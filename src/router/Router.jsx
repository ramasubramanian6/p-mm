import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contactus from "../pages/ContactUs";
import Form from "../pages/Form";
import Whychoose from "../pages/Whychoose";
import Menu from "../pages/Menu";
import OurServices from "../pages/OurServices";
import WorkProcess from "../pages/WorkProcess";
import Locations from "../pages/Locations";
import BranchLocations from "../pages/Branch";
// import Layout, Blogs, Contact, NoPage if needed

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/form" element={<Form />} />
      <Route path="/whychoose" element={<Whychoose />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/ourservices" element={<OurServices />} />
      <Route path="/workprocess" element={<WorkProcess />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/branch" element={<BranchLocations />} />
      {/* Add other routes as needed */}
    </Routes>
  );
}

export default Router;  