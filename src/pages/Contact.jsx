import { useOutletContext } from "react-router-dom";
import ContactList from "../components/ContactList";

export default function Contact() {
  const { lang, t } = useOutletContext();

  return (
    <main className="mx-auto max-w-[1120px] px-6 py-16 sm:py-20">
      <h1 className="max-w-[15ch] text-5xl font-bold leading-tight text-neutral-800 sm:text-6xl">
        {t.contactH1}
        <span className="text-blue-700">{t.contactH1Dot}</span>
      </h1>
      <div className="mt-6 flex max-w-[760px] flex-col gap-2 border-l-4 border-blue-700 pl-5">
        <p className="text-lg leading-9 text-slate-600 sm:text-[22px] sm:leading-10">
          {t.contactLead}
        </p>
        <p className="text-lg leading-9 text-slate-600 sm:text-[22px] sm:leading-10">
          {t.contactReply}
        </p>
      </div>

      <p className="mt-14 text-sm font-semibold uppercase text-slate-400">
        {t.reachAt}
      </p>
      <ContactList lang={lang} />
    </main>
  );
}
