import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contactus from "../pages/Contactus";
import Form from "../pages/Form";
import Whychoose from "../pages/Whychoose";
import Menu from "../pages/Menu";
import OurServices from "../pages/OurServices";
import WorkProcess from "../pages/WorkProcess";
import Locations from "../pages/Locations";
import BranchLocations from "../pages/Branch";
import AboutUs from "../pages/Aboutus"; // Add this import
import Household from '../pages/Household';
import OfficeServices from "../pages/OfficeService"
import VehicleService from "../pages/VehicleService"
import Becameone from "../pages/Becameone"
import Beaware from "../pages/Beaware"
import HomeAbout from "../pages/HomeAbout"
import WarehouseService from "../pages/WarehouseService";
import Review from "../pages/Review";
import Gallery from "../pages/Gallery";



// import Layout, Blogs, Contact, NoPage if needed

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/form" element={<Form />} />
      <Route path="/mainbranches" element={<HomeAbout/>}/>
      <Route path="/whychoose" element={<Whychoose />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/ourservices" element={<OurServices />} />
      <Route path="/workprocess" element={<WorkProcess />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/branch" element={<BranchLocations />} />
      <Route path="/household" element={<Household/>}/>
      <Route path="/office" element={<OfficeServices/>}/>
      <Route path="/vehicle" element={<VehicleService/>}/>
      <Route path="/becameoneofus" element={<Becameone/>}/>
      <Route path="/beaware" element={<Beaware/>}/>
      <Route path="/warehouse" element={<WarehouseService/>}/>
      <Route path="/review" element={<Review/>} />
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="*" element={<Home />} />
    
    </Routes>
  );
}

export default Router;  