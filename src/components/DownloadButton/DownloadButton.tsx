import {FaDownload} from "react-icons/fa6";



export default function DownloadButton() {
    return (
        <a
            href="/Manojkumar-resume.pdf"
            download
            className="fixed bottom-4 left-4 bg-blue-600 hover:bg-blue-700 text-white
        px-6 py-3 rounded-full shadow-lg flex items-center gap-3
        transition-all duration-300 z-50
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
            <FaDownload className="w-5 h-5" />
            <span className="font-medium">Download PDF</span>
        </a>
    );
}