import talkmates from "../../images/talkmates.jpeg";



//propsについて理解するためにわざとpropsを使っている
export default function Card (props){

    return(
        <div className="w-11/12 mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <img
                    src={props.image || talkmates}
                    alt="TalkMates"
                    className="h-40 w-full sm:h-32 sm:w-40 rounded-xl object-cover"
                />
                <div className="flex flex-col gap-2">
                    <h3 className="text-neutral-800 text-xl sm:text-2xl font-bold">
                        {props.title || "TalkMates"}
                    </h3>
                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                        {props.children}
                    </p>
                    <a
                        href={props.url || "#"}
                        target="blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-fit items-center rounded-lg border border-blue-700 px-3 py-1.5 text-sm font-medium text-blue-700 transition hover:bg-blue-700 hover:text-white"
                    >
                        詳細をチェック
                    </a>
                </div>
            </div>
        </div>
    );

};
