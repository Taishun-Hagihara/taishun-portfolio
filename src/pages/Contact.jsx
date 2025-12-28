import ContactLink from "../components/ContactLinks"

export default function Contact() {
    return (
        <div className="mt-50 h-120">
            <h1 className="text-neutral-800 text-6xl w-13/15 mx-auto font-bold mb-4">Work With Me<span className="text-blue-700">!</span></h1>
            <p className="text-zinc-600 text-3xl w-13/15 mx-auto border-l-4 border-blue-700 pl-4">Interested in working together? Feel free to reach out </p>
            <p className="text-zinc-600 text-3xl w-13/15 mx-auto border-l-4 border-blue-700 pl-4">- I typically reply within 72 hours.</p>
            <div className=" w-13/15 mx-auto">
            <ContactLink />

            </div>
        </div>
    )
}
