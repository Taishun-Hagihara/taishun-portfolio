import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../data/content";

export default function Header({ lang, setLang, t }) {
  const [navOpen, setNavOpen] = useState(false);
  const base =
    "inline-flex h-10 items-center rounded-lg border px-3.5 text-sm font-medium transition";
  const inactive = "border-transparent text-blue-900 hover:border-blue-100 hover:bg-blue-50";
  const active = "border-blue-700 bg-blue-700 text-white";
  const langBase =
    "inline-flex h-7 min-w-9 items-center justify-center rounded-md px-2 text-xs font-bold transition";

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1120px] items-center gap-6 px-6 py-3">
        <NavLink
          to="/"
          onClick={() => setNavOpen(false)}
          className="text-base font-bold text-neutral-800 sm:text-lg"
        >
          Tai<span className="text-blue-700">shun</span> Hagihara
        </NavLink>

        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map(({ to, key, end }) => (
            <NavLink
              key={key}
              to={to}
              end={end}
              className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
            >
              {t[key]}
            </NavLink>
          ))}
          <div className="mx-2 h-6 w-px bg-slate-200" />
          <div
            role="group"
            aria-label="Language"
            className="flex h-9 items-center rounded-lg border border-slate-200 bg-slate-50 p-1"
          >
            <button
              type="button"
              onClick={() => setLang("ja")}
              className={`${langBase} ${lang === "ja" ? "bg-blue-700 text-white" : "text-slate-500 hover:text-blue-700"}`}
            >
              JA
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`${langBase} ${lang === "en" ? "bg-blue-700 text-white" : "text-slate-500 hover:text-blue-700"}`}
            >
              EN
            </button>
          </div>
        </nav>

        <div className="ml-auto flex items-center gap-2 md:hidden">
          <div className="flex h-9 items-center rounded-lg border border-slate-200 bg-slate-50 p-1">
            <button
              type="button"
              onClick={() => setLang("ja")}
              className={`${langBase} ${lang === "ja" ? "bg-blue-700 text-white" : "text-slate-500"}`}
            >
              JA
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`${langBase} ${lang === "en" ? "bg-blue-700 text-white" : "text-slate-500"}`}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-blue-900"
          >
            {navOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {navOpen && (
        <nav className="border-t border-slate-200 px-6 py-2 md:hidden">
          <div className="mx-auto flex max-w-[1120px] flex-col">
            {NAV_ITEMS.map(({ to, key, end }) => (
              <NavLink
                key={key}
                to={to}
                end={end}
                onClick={() => setNavOpen(false)}
                className={({ isActive }) =>
                  [
                    "flex h-[52px] items-center border-b border-slate-200 text-base font-medium",
                    isActive ? "text-blue-700" : "text-slate-700",
                  ].join(" ")
                }
              >
                {t[key]}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
