import Card from "../components/Card.jsx";
import talkmates from "../../images/Demo.jpeg";

export default function Works() {
    return (
        <div>
            <h1 className="mb-15 text-neutral-800 text-7xl w-10/11 mx-auto font-bold ">My<span className="text-blue-700"> Best</span> Createion</h1>

            <Card image={talkmates} url="https://talkmates-circle.com/" title="TalkMates">
                <div className="space-y-3">
                    <p className="text-zinc-600 leading-relaxed">
                        私の所属する国際交流系サークルである
                        <span className="font-semibold text-neutral-800">TalkMates</span>
                        のサイトです。日々サークルを運営する中で、感じていた不便さを解消するために作成しました。
                    </p>
                    <h2 className="text-neutral-800 font-bold text-lg sm:text-xl mt-5">今後実装予定の機能</h2>
                    <ul className="list-disc list-inside text-zinc-600 text-sm sm:text-base">
                        <li>参加希望フォーム（Google Form から自作フォームへ移行し、Supabaseに保存）</li>
                        <li>幹部ページからPDFアップロード（UIから追加できる運用）</li>
                        <li>Search Console 登録</li>
                    </ul>
                    <h2 className="text-neutral-800 font-bold text-lg sm:text-xl mt-5">使用技術</h2>
                    <h3 className="text-neutral-800 font-semibold text-sm sm:text-base">Frontend</h3>
                    <ul className="list-disc list-inside text-zinc-600 text-sm sm:text-base">
                        <li>React</li>
                        <li>TailwindCss</li>
                        <li>Vite</li>
                    </ul>
                    <h3 className="text-neutral-800 font-semibold text-sm sm:text-base">Infrastructure / DB</h3>
                    <ul className="list-disc list-inside text-zinc-600 text-sm sm:text-base">
                        <li>AWS</li>
                        <li>Supabase</li>
                    </ul>
                </div>
            </Card>
        </div>
    );
}
