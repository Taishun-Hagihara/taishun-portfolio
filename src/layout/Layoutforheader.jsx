import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header.jsx";




export default function Layout() {

    return (
        <div className="min-h-screen relative">
            <Header />
            <main className="relative z-10 mx-auto max-w-4xl p-6">
                <Outlet />
            </main>
        </div>
    );
}
