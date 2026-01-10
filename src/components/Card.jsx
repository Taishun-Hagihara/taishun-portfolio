import talkmates from "../../images/talkmates.jpeg";

export default function Card(props){

    return(
        <div className="w-11/12 mx-auto">
            <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="w-full">
                    <img
                        src={props.image || talkmates}
                        alt="TalkMates"
                        className="h-56 w-full rounded-xl object-cover sm:h-72 border-2 border-slate-200"
                    />
                </div>
                <div className="flex justify-start">
                    <a
                        href={props.url || "https://talkmates-circle.com/"}
                        target="blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-lg border border-blue-700 px-3 py-1.5 text-sm font-medium text-blue-700 transition hover:bg-blue-700 hover:text-white"
                    >
                        詳細をチェック
                    </a>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-neutral-800 text-xl sm:text-2xl font-bold">
                        {props.title || "TalkMates"}
                    </h3>
                    <div className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );

};
