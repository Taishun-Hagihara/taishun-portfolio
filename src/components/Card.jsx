import talkmates from "../../images/talkmates.jpeg";

export default function Card(props) {
  return (
    <div className="mx-auto w-full max-w-[1120px]">
      <div className="grid gap-5 border-t border-slate-200 pt-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <img
          src={props.image || talkmates}
          alt="TalkMates"
          className="aspect-[16/10] w-full rounded object-cover object-top"
        />
        <div className="flex flex-col gap-4">
          <a
            href={props.url || "https://talkmates-circle.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-fit items-center rounded-lg border border-blue-700 px-4 text-sm font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white"
          >
            サイトを見る
          </a>
          <h3 className="text-2xl font-bold text-neutral-800">{props.title || "TalkMates"}</h3>
          <div className="text-base leading-8 text-slate-600">{props.children}</div>
        </div>
      </div>
    </div>
  );
}
