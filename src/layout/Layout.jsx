import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";

// 画像を import（ViteならこれでOK）
import bgHome from "../assets/bg-home.jpg";
import bgAbout from "../assets/bg-about.jpg";
import bgWorks from "../assets/bg-works.jpg";
import bgContact from "../assets/bg-contact.jpg";

export default function Layout() {
    const { pathname } = useLocation();

    // URLごとに使う背景画像を切り替え
    const bgMap = {
        "/": bgHome,
        "/about": bgAbout,
        "/works": bgWorks,
        "/contact": bgContact,
    };

    const bg = bgMap[pathname] ?? bgHome;

    return (
        <div className="min-h-screen relative">
            {/* 背景画像レイヤー（画面全体。ヘッダーの下にも潜る） */}
            <div
                className="fixed inset-0 -z-10 bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${bg})` }}
            />

            {/* 読みやすさ用の暗いフィルター（任意） */}
            <div className="fixed inset-0 -z-10 bg-black/35" />

            {/* 前面（ヘッダー/本文） */}
            <Header />
            <main className="relative z-10 mx-auto max-w-4xl p-6">
                <Outlet />
            </main>
        </div>
    );
}
