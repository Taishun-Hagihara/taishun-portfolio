import { NavLink } from "react-router-dom";

// これより上のものはページに表示するもの
//<NavLink>はaタグのようなものなので<NavLink>に挟まれているものはボタンとして表示する文字列
//NavLinkはボタンが押されたらどこにいくかそして、どの状態にするのかを表しているもの対しRouterは遷移するためのルールを書いているもの
export default function Header() {
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


