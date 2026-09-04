import { Check, Copy, Github, Instagram, Mail, Phone } from "lucide-react";
import { createElement } from "react";
import { useState } from "react";
import { COPY } from "../data/content";

export default function ContactList({ lang = "ja", showPhone = false }) {
  const [copied, setCopied] = useState(false);
  const t = COPY[lang] || COPY.ja;

  const copyMail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText("hagitaishun@gmail.com").catch(() => {});
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  const items = [
    {
      label: lang === "ja" ? "メール" : "Mail",
      value: "hagitaishun@gmail.com",
      href: "mailto:hagitaishun@gmail.com",
      Icon: Mail,
      action: (
        <button
          type="button"
          onClick={copyMail}
          className={[
            "inline-flex h-9 flex-none items-center gap-2 rounded-lg border px-3 text-sm font-semibold transition",
            copied
              ? "border-blue-700 text-blue-700"
              : "border-slate-200 text-slate-600 hover:border-blue-700 hover:text-blue-700",
          ].join(" ")}
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? t.copied : t.copy}
        </button>
      ),
    },
    {
      label: "GitHub",
      value: "Taishun-Hagihara",
      href: "https://github.com/Taishun-Hagihara",
      Icon: Github,
    },
    {
      label: "Instagram",
      value: "tais_.ha",
      href: "https://www.instagram.com/tais_.ha/",
      Icon: Instagram,
    },
  ];

  if (showPhone) {
    items.push({
      label: "電話",
      value: "090-9541-3614",
      href: "tel:09095413614",
      Icon: Phone,
    });
  }

  return (
    <ul className="mt-4 max-w-[760px] border-t border-slate-200">
      {items.map(({ label, value, href, Icon, action }) => (
        <li key={label} className="border-b border-slate-200">
          <div className="flex min-h-16 flex-col gap-3 py-4 sm:flex-row sm:items-center sm:gap-5 sm:px-1">
            <span className="hidden flex-none text-blue-700 sm:inline-flex">
              {createElement(Icon, { className: "h-6 w-6", strokeWidth: 1.7 })}
            </span>
            <span className="flex-none text-sm font-semibold text-slate-400 sm:w-[100px]">
              {label}
            </span>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="min-w-0 flex-1 truncate text-lg text-slate-700 transition hover:text-blue-700 sm:text-xl"
            >
              {value}
            </a>
            {action}
          </div>
        </li>
      ))}
    </ul>
  );
}
