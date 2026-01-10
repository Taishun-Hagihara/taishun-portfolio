
import SkillsTabs from "../components/SkillTabs.jsx";


export default function Home() {
    return (
        <div>
            <header className="mt-8 sm:mt-12 lg:mt-15 h-auto lg:h-125">
                <div>
                    <h1 className="text-neutral-800 text-4xl sm:text-6xl lg:text-8xl w-10/11 mx-auto font-bold mt-10 sm:mt-20 lg:mt-30">Tai<span className="text-blue-700">shun</span></h1>
                    <h1 className="text-neutral-800 text-4xl sm:text-6xl lg:text-8xl w-10/11 mx-auto font-bold">Hagihara</h1>
                </div>
                <div className="text-zinc-600 text-base sm:text-xl lg:text-3xl w-10/11 mx-auto mt-4 sm:mt-6 lg:mt-7">
                    <p>I’m a student at Doshisha University, Faculty of Life and Medical Sciences, majoring in Medical Informatics. I’m currently studying programming.</p>
                </div>
               
            </header>
            <div className="">
                <SkillsTabs />
            </div>
        </div>
    );
}
