import { useOutletContext } from "react-router-dom";
import SkillsTabs from "../components/SkillTabs.jsx";

export default function Home() {
  const { lang } = useOutletContext();
  const lead =
    lang === "ja"
      ? "同志社大学 生命医科学部 医情報学科の学生です。現在、プログラミングを学びながらWebのプロジェクトを作っています。"
      : "I'm a student at Doshisha University, Faculty of Life and Medical Sciences, majoring in Medical Informatics. I'm currently studying programming.";

  return (
    <main>
      <section className="mx-auto max-w-[1120px] px-6 py-16 sm:py-24 lg:py-28">
        <h1 className="text-5xl font-bold leading-none text-neutral-800 sm:text-7xl lg:text-8xl">
          Tai<span className="text-blue-700">shun</span>
          <br />
          Hagihara
        </h1>
        <div className="mt-7 max-w-[760px] border-l-4 border-blue-700 pl-5">
          <p className="text-lg leading-8 text-slate-600 sm:text-2xl sm:leading-10">
            {lead}
          </p>
        </div>
      </section>
      <SkillsTabs />
    </main>
  );
}
