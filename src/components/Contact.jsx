import { NavLink } from "react-router-dom";

export default function Contact () {
    return(
        <div className=" border-slate-200 px-4 py-3 flex justify-start">
            <nav className="">
                <NavLink 
                    to="/contact"
                    className="border-blue-700 bg-blue-700 text-white inline-flex items-center rounded-lg border px-3 py-2 text-sm font-medium transition "
                >
                    Get in Touch
                </NavLink>
            </nav>
        </div>
    )
}