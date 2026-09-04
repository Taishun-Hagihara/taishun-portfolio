import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { COPY } from "../data/content";

export default function Layoutforheader() {
  const [lang, setLang] = useState("ja");
  const t = COPY[lang];

  return (
    <div className="min-h-screen bg-white text-left text-neutral-800">
      <Header lang={lang} setLang={setLang} t={t} />
      <Outlet context={{ lang, t }} />
      <Footer t={t} />
    </div>
  );
}
