import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx"
import Contact from "../components/Contact.jsx"


export default function Layoutforheader() {

    return (
        <div className="min-h-screen relative">
            <Header />
            <main className="relative z-10 mx-auto max-w-4xl p-6">
                <Outlet />
            </main>
            <div className="border-t border-slate-200">
                <div className="w-10/11 mx-auto">
                    <Footer />
                    <p className="mt-12 text-zinc-600 text-2xl">Interested in working together<span className="text-blue-700">?</span></p>
                    <Contact />
                </div>
            </div>
        </div>
    );
}
