import { ArrowRight, Check, ExternalLink, Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import talkmates from "../../images/Demo.jpeg";
import {
  EXTRA_COSTS,
  FAQ_ITEMS,
  INCLUDED_ITEMS,
  SERVICE_STEPS,
} from "../data/content";

export default function Service() {
  return (
    <main>
      <Hero />
      <Proof />
      <DemoSection />
      <ServiceSection label="01" title="良い宿ほど、伝わっていないことがあります。">
        <Paragraphs
          items={[
            "今、宿泊先を探すとき、多くの方がまずスマートフォンで情報を調べます。これは一般のお客様だけでなく、サークルや部活動、ゼミ、研修旅行など、団体で宿泊先を探す幹事の方も同じです。",
            "団体宿泊の場合、幹事の方が確認したい情報は多くあります。人数やお部屋の様子、お食事、団体向けの料金、送迎の有無、交流会や宴会の可否、キャンセルの条件など、比較しながら宿泊先を決めていきます。",
            "実際には団体のお客様をしっかり受け入れられる体制が整っている宿でも、その情報がインターネット上で確認できなければ、問い合わせをする前に候補から外れてしまうことがあります。",
            "すでにある宿の魅力や設備を、これから探す方にきちんと届けること。それが、ホームページの一番の役割だと考えています。",
          ]}
        />
      </ServiceSection>

      <ServiceSection label="02" title="一般のお客様にも、団体のお客様にも。">
        <Paragraphs
          items={[
            "「団体客だけを対象にしたホームページ」を作るわけではありません。",
            "お部屋、お食事、館内設備、料金、アクセスなど、一般のお客様が宿泊を検討する際に必要な情報を分かりやすく掲載します。そのうえで、団体宿泊を検討する幹事の方が必要とする情報についても、整理して掲載します。",
            "一般のお客様にも使いやすく、団体のお客様にも選ばれやすい。その両方を考えたホームページを制作します。",
          ]}
        />
      </ServiceSection>

      <ServiceSection label="03" title="実際に、団体の宿泊先を探してきた立場から。">
        <Paragraphs
          items={[
            "これまでサークルの合宿運営として、数十名規模の宿泊先を探し、複数の宿泊施設に直接問い合わせを行ってきました。",
            "その中で感じたのは、「実際にはとても良い宿なのに、ホームページやインターネット上の情報だけでは、団体で泊まれるかどうか判断できない」というケースが少なくないということでした。",
            "このホームページ制作サービスでは、その経験を活かし、一般のお客様向けの情報に加えて、団体を任された幹事の方が知りたい情報についても、抜け漏れなく整理してお伝えします。",
            "宿を経営した経験があるわけではありません。だからこそ、「宿泊先を探す側」の視点を、そのままホームページづくりに反映できると考えています。",
          ]}
        />
        <Link
          to="/service/about-me"
          className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg border border-blue-700 px-5 text-base font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white"
        >
          制作者について、詳しくはこちら
          <ArrowRight className="h-4 w-4" />
        </Link>
      </ServiceSection>

      <ServiceSection
        label="04"
        title="「何を書けばいいか分からない」まま、ご相談いただいて大丈夫です。"
      >
        <Paragraphs
          items={[
            "「ホームページを作りたいけれど、何を掲載すればいいのか分からない」という状態からで構いません。",
            "宿の特徴やお部屋、お食事、料金、団体でのご利用状況などについてお話を伺いながら、掲載すべき内容、見せる順番、伝わりやすい文章を、こちらで整理します。",
            "文章をご自身で一から書いていただく必要はありません。掲載する写真をご用意いただき、宿について教えていただければ、構成・文章・制作・公開まで進めます。",
          ]}
        />
      </ServiceSection>

      <ServiceSection label="05" title="制作内容">
        <p className="mt-7 max-w-[760px] text-[17px] leading-9 text-slate-600">
          このサービスには、以下の内容が含まれます。
        </p>
        <CheckList items={INCLUDED_ITEMS} />
        <div className="mt-6 flex max-w-[760px] flex-col gap-3">
          <p className="text-base leading-8 text-slate-600">
            英語のページにも対応できます。ご希望の場合はご相談ください。
          </p>
          <p className="text-base leading-8 text-slate-600">
            サイトに掲載する写真は、原則として宿泊施設様よりご提供をお願いしております。
          </p>
        </div>
      </ServiceSection>

      <ServiceSection label="06" title="料金">
        <p className="mt-7 max-w-[760px] text-[17px] leading-9 text-slate-600">
          宿の紹介、掲載する内容の整理、文章の作成、ホームページの制作、公開まで。ホームページに必要な作業をひとつにまとめてお任せいただけます。
        </p>
        <PriceBlock />
        <p className="mt-8 max-w-[760px] text-base leading-8 text-slate-600">
          以下の費用については、別途ご相談・ご負担いただく場合があります。
        </p>
        <ul className="mt-4 max-w-[760px]">
          {EXTRA_COSTS.map((item) => (
            <li key={item} className="flex gap-3 py-2 text-base leading-8 text-slate-600">
              <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-blue-700" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex max-w-[760px] flex-col gap-3">
          <p className="text-base leading-8 text-slate-600">
            サーバーは、基本的に無料でご利用いただけるサービスを想定しています。有料のサービスが必要になる場合は、事前にご説明します。ドメイン等の実費が発生する場合は、完成時の残金とあわせてご請求します。
          </p>
          <p className="text-base leading-8 text-slate-600">
            料金について気になる点があれば、契約前にいつでもご確認ください。
          </p>
        </div>
      </ServiceSection>

      <ServiceSection label="07" title="サイトの規模について">
        <Paragraphs
          items={[
            "宿の規模や掲載する情報の量に応じて、最適な構成をご提案します。",
            "基本料金の範囲内で、一般的な旅館・民宿のホームページに必要なページを制作します。掲載したい情報が非常に多い場合や、大規模なサイトになる場合は、事前にご相談のうえ、料金が変わることがあります。",
          ]}
        />
        <div className="mt-14 border-t border-slate-200 pt-14">
          <h2 className="text-3xl font-bold leading-snug text-neutral-800 sm:text-[38px]">
            制作期間
          </h2>
          <div className="mt-7 flex max-w-[760px] flex-col gap-5">
            <p className="text-[17px] leading-9 text-slate-600">
              修正のやり取りがない場合、制作の開始から公開まで、
              <span className="font-semibold text-blue-700">約1か月</span>
              を目安にしています。
            </p>
            <p className="text-[17px] leading-9 text-slate-600">
              内容のご確認や修正の状況によって、多少前後する場合があります。公開を急ぎたいご事情がある場合も、まずはご相談ください。
            </p>
          </div>
        </div>
      </ServiceSection>

      <ServiceSection label="08" title="制作の流れ">
        <ol className="mt-8 max-w-[760px] border-t border-slate-200">
          {SERVICE_STEPS.map(([title, body], index) => (
            <li
              key={title}
              className="grid grid-cols-[56px_minmax(0,1fr)] gap-4 border-b border-slate-200 px-1 py-6 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-5"
            >
              <span className="pt-1 text-sm font-bold text-blue-700 tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-lg font-bold text-neutral-800 sm:text-xl">{title}</p>
                <p className="mt-2 text-base leading-8 text-slate-600">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </ServiceSection>

      <ServiceSection label="09" title="修正と、公開後の対応について">
        <Paragraphs
          items={[
            "初めにお渡しする案のあと、2回まで修正の対応をいたします。大きな修正にあたる範囲については、契約の際に詳しくご説明します。3回目以降の修正や、大きな構成の変更については、別途ご相談ください。",
            "公開してから14日間は、制作上の不具合について無償で対応します。これは不具合への対応であり、公開後の文章や写真の変更、デザインの変更、内容の追加、通常の修正はこの対応には含まれません。公開後に変更をご希望の場合は、別途ご相談ください。",
            "完成したホームページは、宿泊施設様にお渡しします。独自ドメインは、原則として宿泊施設様のお名前で取得します。完成後にかかるドメイン等の費用は、宿泊施設様から直接お支払いいただく形になります。当方から月々の保守費用をご請求することはありません。",
          ]}
        />
      </ServiceSection>

      <ServiceSection label="10" title="FAQ">
        <FaqList />
      </ServiceSection>

      <FinalCta />
    </main>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-[1120px] px-6 py-20 sm:py-24">
      <h1 className="max-w-[18ch] text-5xl font-bold leading-tight text-neutral-800 sm:text-6xl">
        一般のお客様にも、団体の幹事さんにも。
      </h1>
      <p className="mt-5 text-2xl font-semibold leading-9 text-blue-700 sm:text-3xl">
        選ばれる旅館・民宿のホームページを。
      </p>
      <div className="mt-8 flex max-w-[760px] flex-col gap-4 border-l-4 border-blue-700 pl-5">
        <p className="text-lg leading-9 text-slate-600">
          ホームページをまだお持ちでない旅館・民宿様へ。
        </p>
        <p className="text-lg leading-9 text-slate-600">
          宿の魅力や必要な情報を整理し、一般のお客様にはもちろん、サークルや部活動、ゼミ合宿などの団体宿泊を検討している幹事の方にも、分かりやすく伝わるホームページを制作します。
        </p>
        <p className="text-lg leading-9 text-slate-600">
          構成づくりから文章の作成、スマートフォンでの見やすさへの対応、公開まで、まとめてお任せいただけます。パソコンやホームページについて詳しくなくても、問題ありません。
        </p>
      </div>
      <Link
        to="/contact"
        className="mt-10 inline-flex h-14 items-center gap-2 rounded-lg border border-blue-700 bg-blue-700 px-7 text-base font-semibold text-white transition hover:border-blue-900 hover:bg-blue-900"
      >
        まずはご相談ください
        <ArrowRight className="h-5 w-5" />
      </Link>
    </section>
  );
}

function Proof() {
  return (
    <section className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-[1120px] gap-8 px-6 py-20 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-14">
        <p className="pt-2 text-sm font-semibold text-slate-400">制作実績</p>
        <div>
          <h2 className="max-w-[24ch] text-3xl font-bold leading-snug text-neutral-800 sm:text-[38px]">
            副会長として運営し、副会長としてつくったサイト。
          </h2>
          <Paragraphs
            className="mt-7"
            items={[
              "同志社大学公認の国際交流サークル TalkMates の公式サイトです。私はこのサークルの副会長を務めており、イベントや合宿の企画・運営を行う立場から、掲載する情報の整理、文章の作成、制作、公開までを担当しました。",
              "運営する側にいると、外から見たときに何が分からないのかが見えてきます。「どんな団体なのか」「初めてでも参加できるのか」「次のイベントはいつなのか」。問い合わせをためらわせているのがどの情報の欠落なのかを、運営の実感として知ったうえで構成しています。",
              "旅館・民宿のホームページでも、同じことをします。宿を運営される方から伺った内容を、外から探している方に伝わる形に組み直す。その往復が、このサイトで実際に行ったことです。",
            ]}
          />
          <div className="mt-9">
            <img
              src={talkmates}
              alt="TalkMates 公式サイト"
              className="w-full rounded border border-slate-200"
            />
            <div className="mt-4 flex flex-wrap items-center gap-5">
              <a
                href="https://talkmates-circle.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-blue-700 px-4 text-sm font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white"
              >
                talkmates-circle.com
                <ExternalLink className="h-4 w-4" />
              </a>
              <p className="text-sm text-slate-500">構成・文章・デザイン・制作・公開まで担当</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <ServiceSection label="00" title="このようなサイトを作ります。">
      <div className="mt-7 flex max-w-[760px] flex-col gap-5">
        <p className="text-[17px] leading-9 text-slate-600">
          架空の宿泊施設「紀州 海風荘」を例に、実際に制作するホームページのイメージを用意しています。
        </p>
        <p className="text-[17px] leading-9 text-slate-600">
          掲載している名称・所在地・料金・定員等はすべてサンプルデータです。実在の施設・団体とは関係ありません。
        </p>
      </div>
      <a
        href="/demo/umikazeso/index-standalone.html"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg border border-blue-700 bg-blue-700 px-5 text-base font-semibold text-white transition hover:border-blue-900 hover:bg-blue-900"
      >
        制作イメージを見る
        <ExternalLink className="h-4 w-4" />
      </a>
    </ServiceSection>
  );
}

function ServiceSection({ label, title, children }) {
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

function Paragraphs({ items, className = "mt-7" }) {
  return (
    <div className={`${className} flex max-w-[760px] flex-col gap-5`}>
      {items.map((item) => (
        <p key={item} className="text-[17px] leading-9 text-slate-600">
          {item}
        </p>
      ))}
    </div>
  );
}

function CheckList({ items }) {
  return (
    <ul className="mt-6 max-w-[760px] border-t border-slate-200">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 border-b border-slate-200 px-1 py-4 text-base leading-7 text-slate-700"
        >
          <Check className="mt-1 h-5 w-5 flex-none text-blue-700" strokeWidth={2.2} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function PriceBlock() {
  return (
    <div className="mt-9 max-w-[760px] border-y border-t-2 border-y-slate-200 border-t-neutral-800 py-8">
      <p className="text-sm font-semibold text-slate-400">制作料金</p>
      <p className="mt-3 flex flex-wrap items-baseline gap-2 text-neutral-800">
        <span className="text-5xl font-bold leading-none tabular-nums sm:text-[64px]">
          200,000
        </span>
        <span className="text-2xl font-semibold">円</span>
        <span className="ml-2 inline-flex h-8 items-center rounded-full border border-blue-700 px-3 text-sm font-semibold text-blue-700">
          買い切り
        </span>
      </p>
      <p className="mt-5 text-base leading-8 text-slate-600">
        買い切りでの制作です。公開後に、月々の管理費用のようなものは一切いただきません。
      </p>
      <div className="mt-6 grid gap-5 border-t border-slate-200 pt-6 sm:grid-cols-2 sm:gap-0">
        <div className="sm:border-r sm:border-slate-200 sm:pr-7">
          <p className="mb-2 text-sm font-semibold text-slate-400">制作開始時 — 着手金</p>
          <p className="text-2xl font-bold text-neutral-800 tabular-nums">100,000円</p>
        </div>
        <div className="sm:pl-7">
          <p className="mb-2 text-sm font-semibold text-slate-400">完成後 — 残金</p>
          <p className="text-2xl font-bold text-neutral-800 tabular-nums">100,000円</p>
        </div>
      </div>
    </div>
  );
}

function FaqList() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <ul className="mt-8 max-w-[820px] border-t border-slate-200">
      {FAQ_ITEMS.map(([question, answer], index) => {
        const open = openIndex === index;
        return (
          <li key={question} className="border-b border-slate-200">
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? -1 : index)}
              className={[
                "flex w-full items-start gap-4 px-1 py-5 text-left text-base font-semibold leading-7 transition sm:text-[17px]",
                open ? "text-blue-700" : "text-neutral-800 hover:text-blue-700",
              ].join(" ")}
            >
              <span className="flex-none pt-1 text-sm font-bold text-blue-700 tabular-nums">
                Q{String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex-1">{question}</span>
              <Plus
                className={`mt-1 h-5 w-5 flex-none text-blue-700 transition ${open ? "rotate-45" : ""}`}
              />
            </button>
            {open && (
              <div className="flex gap-4 px-1 pb-6">
                <span className="w-8 flex-none text-sm font-bold text-slate-400">A</span>
                <p className="text-base leading-8 text-slate-600">{answer}</p>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function FinalCta() {
  return (
    <section className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-[1120px] px-6 py-20 sm:py-24">
        <h2 className="max-w-[20ch] text-4xl font-bold leading-snug text-neutral-800 sm:text-[44px]">
          まずは、今の状況をお聞かせください。
        </h2>
        <div className="mt-7 flex max-w-[760px] flex-col gap-2 border-l-4 border-blue-700 pl-5">
          <p className="text-lg leading-9 text-slate-600">「ホームページを持っていない」</p>
          <p className="text-lg leading-9 text-slate-600">「団体のお客様をもっと受け入れたい」</p>
          <p className="text-lg leading-9 text-slate-600">「必要なのかどうか、まだ迷っている」</p>
          <p className="mt-4 text-lg leading-9 text-slate-600">
            そのような段階でも構いません。無理にお願いすることはありませんので、まずは今の状況や、気になっていることをお聞かせください。
          </p>
        </div>
        <p className="mt-11 text-sm font-semibold text-blue-700">ご相談はこちらから</p>
        <div className="mt-4 max-w-[760px] border-t border-slate-200">
          <ContactRow label="メール" value="hagitaishun@gmail.com" href="mailto:hagitaishun@gmail.com" />
          <ContactRow label="電話" value="090-9541-3614" href="tel:09095413614" />
        </div>
      </div>
    </section>
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
