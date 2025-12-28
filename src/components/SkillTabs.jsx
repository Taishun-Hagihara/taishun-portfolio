import { useMemo, useState } from "react";

export default function SkillsTabs() {
    const sections = useMemo(
        () => [
            {
                label: "Frontend",
                items: [
                    "JavaScript (ES6+)",
                    "React",
                    "HTML/CSS",
                    "Tailwind CSS",
                    "Responsive Design",
                ],
            },
            {
                label: "Tools",
                items: ["Git", "GitHub", "API integration (fetch)"],
            },
            {
                label: "Cloud",
                items: ["AWS (deploying projects with S3/CloudFront)"],
            },
            {
                label: "Soft Skills",
                items: ["Communication", "Collaboration", "Leadership"],
            },
            // ここから「完成後に追加」したいもの（今は空でもOK）
            {
                label: "Backend",
                items: ["Node.js", "Express", "REST APIs", "Authentication"],
            },
            {
                label: "Database",
                items: ["Supabase (or MongoDB)"],
            },
            {
                label: "Real-time",
                items: ["Realtime updates (WebSocket / Supabase Realtime)"],
            },
            {
                label: "File Handling",
                items: ["PDF management and delivery (AWS S3)"],
            },
        ],
        []
    );

    const [activeIndex, setActiveIndex] = useState(0);

    // 左メニューの「ボタン高さ」と「間隔」を固定するとインジケーターが簡単に動く
    const ITEM_H = 56; // h-14 = 56px
    const GAP = 8;     // gap-2 = 8px
    const indicatorY = activeIndex * (ITEM_H + GAP);

    const active = sections[activeIndex];

    return (
        <section className="w-full max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10">
                {/* Left tabs */}
                <div className="relative">
                    {/* gray rail */}
                    <div className="absolute left-2 top-0 bottom-0 w-px bg-slate-200" />

                    {/* active indicator */}
                    <div
                        className="absolute left-2 w-px bg-blue-700 rounded-full transition-transform duration-300"
                        style={{
                            height: ITEM_H,
                            transform: `translateY(${indicatorY}px)`,
                        }}
                    />

                    <div
                        className="flex flex-col gap-2 pl-8"
                        role="tablist"
                        aria-label="Skills categories"
                    >
                        {sections.map((s, idx) => {
                            const isActive = idx === activeIndex;
                            return (
                                <button
                                    key={s.label}
                                    type="button"
                                    role="tab"
                                    aria-selected={isActive}
                                    className={[
                                        "h-14 text-left font-semibold tracking-wide transition-colors",
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

                {/* Right content */}
                <div className="pt-1">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                        {active.label}
                    </h3>

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
