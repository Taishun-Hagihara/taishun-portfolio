import { useEffect, useMemo, useRef, useState } from "react";

export default function SkillsTabs() {
    const sections = useMemo(
        () => [
            {
                label: "Frontend",
                items: ["JavaScript (ES6+)", "React", "HTML/CSS", "Tailwind CSS"],
            },
            { label: "Backend", items: ["Node.js", "Express", "REST APIs"] },
            { label: "Database", items: ["Supabase (or MongoDB)"] },
            { label: "Cloud", items: ["AWS (deploying projects with S3/CloudFront)"] },
            { label: "Tools", items: ["Git", "GitHub"] },
            {
                label: "Soft Skills",
                items: ["Communication", "Collaboration", "Leadership"],
            },
        ],
        []
    );

    const [activeIndex, setActiveIndex] = useState(0);

    // タブボタンを参照するため
    const tabRefs = useRef([]);
    // 下線（インジケーター）の位置と幅
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
        <section className="mt-16 w-11/12 mx-auto h-100">
            <h1 className="font-bold text-6xl">
                Skills<span className="text-blue-700">.</span>
            </h1>

            {/* タブ（横並び） */}
            <div className="mt-5">
                <div className="relative border-b border-slate-200">
                    {/* 青い下線（動く） */}
                    <div
                        className="absolute bottom-0 h-1 bg-blue-700 transition-all duration-300"
                        style={{ left: indicator.left, width: indicator.width }}
                    />

                    <div className="flex gap-6">
                        {sections.map((s, idx) => {
                            const isActive = idx === activeIndex;
                            return (
                                <button
                                    key={s.label}
                                    ref={(node) => (tabRefs.current[idx] = node)}
                                    type="button"
                                    className={[
                                        "py-4 font-semibold transition-colors",
                                        isActive
                                            ? "text-blue-700"
                                            : "text-slate-500 hover:text-slate-900",
                                    ].join(" ")}
                                    onClick={() => setActiveIndex(idx)}
                                >
                                    {s.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* 内容（タブの下） */}
                <div className="pt-6">
                    <h3 className="text-xl font-bold text-slate-900">{active.label}</h3>

                    <ul className="mt-6 space-y-4 text-slate-700">
                        {active.items.map((text) => (
                            <li key={text} className="flex gap-3 leading-relaxed">
                                <span className="mt-0.5 text-blue-700">✓</span>
                                <span>{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
