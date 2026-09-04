import { ExternalLink } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import talkmates from "../../images/Demo.jpeg";

export default function Works() {
  const { t } = useOutletContext();

  return (
    <main className="mx-auto max-w-[1120px] px-6 py-16 sm:py-20">
      <h1 className="text-5xl font-bold leading-tight text-neutral-800 sm:text-6xl">
        {t.worksH1a}
        <span className="text-blue-700">{t.worksH1b}</span>
        {t.worksH1c}
      </h1>

      <article className="mt-14 grid gap-10 border-t border-slate-200 pt-10 lg:grid-cols-2 lg:gap-14">
        <div className="flex flex-col gap-5">
          <img
            src={talkmates}
            alt="TalkMates"
            className="aspect-[16/10] w-full rounded object-cover object-top"
          />
          <a
            href="https://talkmates-circle.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-fit items-center gap-2 rounded-lg border border-blue-700 px-4 text-sm font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white"
          >
            {t.visit}
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="flex flex-col gap-9">
          <section>
            <h2 className="text-3xl font-bold text-neutral-800 sm:text-[34px]">
              TalkMates
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-[17px] sm:leading-9">
              {t.tmBodyA}
              <span className="font-semibold text-neutral-800">TalkMates</span>
              {t.tmBodyB}
            </p>
          </section>

          <section>
            <h3 className="mb-4 text-sm font-semibold uppercase text-slate-400">
              {t.roadmap}
            </h3>
            <ul className="border-t border-slate-200">
              {t.roadmapItems.map((item) => (
                <li
                  key={item}
                  className="border-b border-slate-200 py-3 text-sm leading-7 text-slate-600 sm:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="mb-4 text-sm font-semibold uppercase text-slate-400">
              {t.stack}
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <TechGroup title="Frontend" items={["React", "TailwindCSS", "Vite"]} />
              <TechGroup title="Infrastructure / DB" items={["AWS", "Supabase"]} />
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

function TechGroup({ title, items }) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-neutral-800">{title}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="inline-flex h-8 items-center rounded-full border border-slate-200 px-3 text-sm text-slate-600"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
