// src/Router.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Works = () => <div>Works</div>;
const Contact = () => <div>Contact</div>;

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
