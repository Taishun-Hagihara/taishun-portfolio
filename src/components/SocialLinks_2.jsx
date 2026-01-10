import { Instagram,  Github,  Mail} from "lucide-react";

const SOCIALS = [
    { href: "https://www.instagram.com/tais_.ha/", label: "Instagram", Icon: Instagram ,data:"tais_.ha"},
    { href: "https://github.com/Taishun-Hagihara", label: "GitHub", Icon: Github ,data:"Taishun-Hagihara"},
    { href: "", label: "Mail", Icon: Mail ,data:"hagitaishun@gmail.com"}
    
];

export default function SocialLinks2() {
    return (
        <nav>
            <ul className="flex flex-col gap-3">
                {SOCIALS.map(({ href, label, Icon, data }) => (
                    <li key={label} className="flex items-center gap-3">
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="inline-flex items-center justify-center p-2 rounded-lg text-slate-500 transition hover:text-blue-700 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
                        >
                            <Icon className="h-7 w-7" strokeWidth={1.8} />
                        </a>
                        <span className="text-slate-600 text-base sm:text-lg lg:text-xl">
                            {data}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
