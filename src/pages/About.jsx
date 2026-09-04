import { useOutletContext } from "react-router-dom";

export default function About() {
  const { t } = useOutletContext();

  return (
    <main className="mx-auto flex max-w-[1120px] flex-col gap-16 px-6 py-16 sm:py-20">
      <section>
        <h1 className="text-5xl font-bold leading-tight text-neutral-800 sm:text-6xl">
          {t.aboutH1}
          <span className="text-blue-700">.</span>
        </h1>
        <div className="mt-6 max-w-[760px] border-l-4 border-blue-700 pl-5">
          <p className="text-lg leading-9 text-slate-600 sm:text-[21px] sm:leading-10">
            {t.aboutBody}
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 pt-16">
        <h1 className="text-5xl font-bold leading-tight text-neutral-800 sm:text-6xl">
          {t.expH1}
          <span className="text-blue-700">.</span>
        </h1>
        <div className="mt-6 max-w-[760px] border-l-4 border-blue-700 pl-5">
          <p className="text-lg leading-9 text-slate-600 sm:text-[21px] sm:leading-10">
            {t.expBody}
          </p>
        </div>
      </section>
    </main>
  );
}
