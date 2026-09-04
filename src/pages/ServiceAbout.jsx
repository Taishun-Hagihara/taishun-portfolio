import { ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { EXPERIENCE_ITEMS } from "../data/content";

export default function ServiceAbout() {
  return (
    <main>
      <div className="mx-auto max-w-[1120px] px-6 pt-10">
        <Link
          to="/service"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 transition hover:text-blue-900"
        >
          <ArrowLeft className="h-4 w-4" />
          ホームページ制作サービスへ戻る
        </Link>
      </div>

      <section className="mx-auto max-w-[1120px] px-6 py-12 sm:py-16">
        <p className="mb-5 text-sm font-semibold text-blue-700">About Me</p>
        <h1 className="text-5xl font-bold leading-tight text-neutral-800 sm:text-6xl">
          萩原 大竣
        </h1>
        <div className="mt-8 flex max-w-[760px] flex-col gap-4 border-l-4 border-blue-700 pl-5">
          <p className="text-lg leading-9 text-slate-600">
            Webサイトおよび Webアプリケーションの制作を行っています。
          </p>
          <p className="text-lg leading-9 text-slate-600">
            同志社大学に在学しながら、同志社大学公認の国際交流サークルで副会長を務め、団体でのイベントや合宿の企画・運営に携わってきました。
          </p>
        </div>
      </section>

      <ServiceAboutSection label="01" title="これまでの制作経験">
        <p className="mt-7 max-w-[760px] text-[17px] leading-9 text-slate-600">
          これまでに、以下のような制作を行ってきました。
        </p>
        <ul className="mt-6 max-w-[760px] border-t border-slate-200">
          {EXPERIENCE_ITEMS.map((item) => (
            <li
              key={item}
              className="flex gap-3 border-b border-slate-200 px-1 py-4 text-base leading-7 text-slate-700"
            >
              <Check className="mt-1 h-5 w-5 flex-none text-blue-700" strokeWidth={2.2} />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-[760px] text-[17px] leading-9 text-slate-600">
          見た目を作るだけでなく、掲載する情報を整理し、構成を考え、実際にインターネット上へ公開するところまで対応しています。旅館・民宿のホームページも、同じように、宿の魅力と必要な情報が正しく伝わるホームページとして仕上げます。
        </p>
      </ServiceAboutSection>

      <ServiceAboutSection label="02" title="なぜ、旅館・民宿を対象にするのか">
        <Paragraphs
          items={[
            "サークルの運営では、イベントの企画だけでなく、数十名規模の団体合宿の運営にも携わってきました。実際に宿泊先を探し、複数の旅館・宿泊施設について調べたり、直接問い合わせをしたりする立場を経験しています。",
            "その中で感じていたのが、「実際にはとても良い宿なのに、インターネット上では必要な情報がよく分からない」というケースが少なくないということでした。特に公式のホームページを持たない宿は、じゃらんや楽天トラベルなどの情報だけでは、団体での受け入れ体制まで伝わりにくいと感じることが多くありました。",
            "その経験を、旅館・民宿のホームページ制作に活かしたいと考えています。",
          ]}
        />
      </ServiceAboutSection>

      <ServiceAboutSection label="03" title="宿を探す側の経験を、サイト制作に">
        <Paragraphs
          items={[
            "私自身、宿を経営した経験があるわけではありません。",
            "一方で、「数十名を連れていく幹事が、宿泊先をどうやって探すのか」「どの情報が分からないと候補から外してしまうのか」「どんな情報があれば、安心して問い合わせできるのか」については、実際の合宿運営を通して経験してきました。",
            "そのため、一般的な旅館サイトとして必要な情報に加えて、団体宿泊を検討する方の視点も取り入れて、ホームページを制作しています。",
          ]}
        />
      </ServiceAboutSection>

      <ServiceAboutSection
        label="04"
        title="パソコンやホームページが分からなくても、大丈夫です"
      >
        <Paragraphs
          items={[
            "ホームページ制作をご依頼いただくために、Webについて詳しくなっていただく必要はありません。",
            "「何をするのか」「いくらかかるのか」「何を用意すればいいのか」「いつ完成するのか」を、できるだけ専門的な言葉を使わずにお伝えすることを大切にしています。",
            "写真をご用意いただき、宿についてお話を聞かせていただければ、構成や文章はこちらで整理します。分からないことは、その都度、遠慮なくお尋ねください。",
          ]}
        />
      </ServiceAboutSection>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-[1120px] gap-8 px-6 py-20 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-14">
          <p className="pt-2 text-sm font-semibold text-slate-400">05</p>
          <div className="max-w-[760px]">
            <h2 className="text-3xl font-bold leading-snug text-neutral-800 sm:text-[38px]">
              ご連絡について
            </h2>
            <div className="mt-7 flex flex-col gap-5">
              <p className="text-[17px] leading-9 text-slate-600">
                ご連絡は、メールまたはお電話で承っています。
              </p>
              <p className="text-[17px] leading-9 text-slate-600">
                ご相談の中で、LINEやZoomでのやり取りが便利な場合は、そちらにもご対応します。オンラインでのやり取りが苦手な場合も、遠慮なくご相談ください。できる範囲で、やり取りしやすい方法をご案内します。
              </p>
            </div>
            <div className="mt-8 border-t border-slate-200">
              <ContactRow label="メール" value="hagitaishun@gmail.com" href="mailto:hagitaishun@gmail.com" />
              <ContactRow label="電話" value="090-9541-3614" href="tel:09095413614" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceAboutSection({ label, title, children }) {
  return (
    <section className="border-t border-slate-200">
      <div className="mx-auto grid max-w-[1120px] gap-8 px-6 py-20 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-14">
        <p className="pt-2 text-sm font-semibold text-slate-400">{label}</p>
        <div>
          <h2 className="max-w-[26ch] text-3xl font-bold leading-snug text-neutral-800 sm:text-[38px]">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
}

function Paragraphs({ items }) {
  return (
    <div className="mt-7 flex max-w-[760px] flex-col gap-5">
      {items.map((item) => (
        <p key={item} className="text-[17px] leading-9 text-slate-600">
          {item}
        </p>
      ))}
    </div>
  );
}

function ContactRow({ label, value, href }) {
  return (
    <div className="flex flex-col gap-2 border-b border-slate-200 py-5 sm:flex-row sm:items-center sm:gap-5 sm:px-1">
      <span className="flex-none text-sm font-semibold text-slate-400 sm:w-[100px]">{label}</span>
      <a
        href={href}
        className="min-w-0 flex-1 truncate text-xl text-slate-700 transition hover:text-blue-700 sm:text-[22px]"
      >
        {value}
      </a>
    </div>
  );
}
