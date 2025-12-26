import { Instagram,  Github,  } from "lucide-react";

const SOCIALS = [
    { href: "https://www.instagram.com/tais_.ha/", label: "Instagram", Icon: Instagram },
    { href: "https://github.com/Taishun-Hagihara", label: "GitHub", Icon: Github },
    
];

export default function SocialLinks() {
    return (
        <nav>
            <ul className="flex">
                {SOCIALS.map(({ href, label, Icon }) => (
                    <li key={label}>
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="inline-flex items-center justify-center p-2 rounded-lg text-slate-500 transition hover:text-blue-700 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
                        >
                            
                            <Icon className="h-7 w-7" strokeWidth={1.8} />
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}