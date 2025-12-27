import { Mail, Instagram} from "lucide-react";

const ContactLink = () => {
    return (
        <div className="">
            <div className="flex items-center justify-start text-zinc-600 text-2xl mt-5 ">
                <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center mr-5">
                    <Mail size={20} />
                </div>
                <p>hagitaishun@gmail.com</p>
            </div>
            <div className="flex items-center justify-start text-zinc-600 text-2xl mt-3">
                <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center mr-5">
                    <Instagram size={20} />
                </div>
                <p>tais_.ha</p>
            </div>
        </div>
    );
};

export default ContactLink;