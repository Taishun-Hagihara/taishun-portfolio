import { Check } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

export default function SkillsTabs() {
  const sections = useMemo(
    () => [
      {
        label: "Frontend",
        items: ["JavaScript (ES6+)", "React", "HTML/CSS", "Tailwind CSS", "Vite"],
      },
      { label: "Backend", items: ["Node.js (learning)"] },
      { label: "Database", items: ["Supabase"] },
      { label: "Cloud", items: ["AWS (S3 / CloudFront / Route53 / ACM)"] },
      { label: "Tools", items: ["Git", "GitHub"] },
      {
        label: "Soft Skills",
        items: [
          "Leadership",
          "Ownership / Initiative",
          "Continuous Learning",
          "Communication",
          "Cross-cultural Understanding & Relationship Building",
        ],
      },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const el = tabRefs.current[activeIndex];
    if (!el) return;

    setIndicator({
      left: el.offsetLeft,
      width: el.offsetWidth,
    });
  }, [activeIndex, sections.length]);

  const active = sections[activeIndex];

  return (
    <section className="mx-auto max-w-[1120px] px-6 pb-20">
      <h1 className="text-4xl font-bold text-neutral-800 sm:text-5xl lg:text-6xl">
        Skills<span className="text-blue-700">.</span>
      </h1>

      <div className="mt-6">
        <div className="relative overflow-x-auto border-b border-slate-200">
          <div
            className="absolute bottom-0 h-1 bg-blue-700 transition-all duration-300"
            style={{ left: indicator.left, width: indicator.width }}
          />

          <div className="flex min-w-max gap-5 sm:gap-7">
            {sections.map((section, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={section.label}
                  ref={(node) => {
                    tabRefs.current[idx] = node;
                  }}
                  type="button"
                  className={[
                    "py-4 text-sm font-semibold transition-colors whitespace-nowrap sm:text-base",
                    isActive ? "text-blue-700" : "text-slate-500 hover:text-slate-900",
                  ].join(" ")}
                  onClick={() => setActiveIndex(idx)}
                >
                  {section.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="pt-7">
          <h3 className="text-xl font-bold text-slate-900">{active.label}</h3>
          <ul className="mt-5 space-y-3 text-base text-slate-700">
            {active.items.map((text) => (
              <li key={text} className="flex gap-3 leading-7">
                <Check className="mt-1 h-4 w-4 flex-none text-blue-700" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
