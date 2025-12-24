import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Works from "./pages/Works"
import Contact from "./pages/Contact"

// 各ページ

// これより上のものはページに表示するもの
//<NavLink>はaタグのようなものなので<NavLink>に挟まれているものはボタンとして表示する文字列
//NavLinkはボタンが押されたらどこにいくかそして、どの状態にするのかを表しているもの対しRouterは遷移するためのルールを書いているもの
function Header() {
  const base =
    "inline-flex items-center rounded-lg border px-3 py-2 text-sm font-medium transition";
  const inactive = "border-slate-300 text-slate-900 hover:bg-slate-100";
  const active = "border-slate-900 bg-slate-900 text-white";

  return (
    <header className="border-b border-slate-200 px-4 py-3 flex justify-end">
      <nav className="flex gap-3">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
        >
          
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
        >
          About
        </NavLink>

        <NavLink
          to="/works"
          className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
        >
          Works
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}


function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-4xl p-6">
        <Outlet />
      </main>
    </div>
  );
}

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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
//<Route element={Layout}>とあるがここのLayoutは上の関数である。そして、route path=....によって成立した条件がLayoutのOutletに入る
//結果的にlayoutの要素として配置される。体感childrenみたいな感じやな