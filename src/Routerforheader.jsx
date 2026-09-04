import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layoutforheader from "./layout/Layoutforheader";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Service from "./pages/Service";
import ServiceAbout from "./pages/ServiceAbout";
import Works from "./pages/Works";

export default function Routerforheader() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layoutforheader />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="works" element={<Works />} />
          <Route path="service" element={<Service />} />
          <Route path="service/about-me" element={<ServiceAbout />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
