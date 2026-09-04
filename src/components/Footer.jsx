import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../data/content";
import SocialLinks from "./SocialLinks";

export default function Footer({ t }) {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-4 px-6 py-7 sm:flex-row sm:items-center">
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {NAV_ITEMS.map(({ to, key, end }) => (
            <NavLink
              key={key}
              to={to}
              end={end}
              className="text-sm text-slate-600 transition hover:text-blue-700"
            >
              {t[key]}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3 sm:ml-auto">
          <SocialLinks />
          <p className="text-sm text-slate-500">
            <span className="text-blue-700">2025 </span>made by 萩原大竣
          </p>
        </div>
      </div>
    </footer>
  );
}
