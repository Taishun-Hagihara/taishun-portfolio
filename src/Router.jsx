import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Layout from "./layout/Layout";
// 各ページ


//<Outlet>は下記のrouteに従って表示する内容を出力するためのもの。例えばpath=aboutなら<About/>を表示するといった感じ。
//そしてこのoutletはRoute内でしか機能しない
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="works" element={<Works />} />
          <Route path="contact" element={<Contact />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
//<Route element={Layout}>とあるがここのLayoutは上の関数である。そして、route path=....によって成立した条件がLayoutのOutletに入る
//結果的にlayoutの要素として配置される。体感childrenみたいな感じやな