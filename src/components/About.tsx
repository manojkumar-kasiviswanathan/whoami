import {FaClipboardUser} from "react-icons/fa6";

export default function About() {
    return (
        <section className="py-20" id="about">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="flex items-center gap-4 mb-12">
                    <div className="p-3 rounded-xl bg-blue-500/10">
                        <FaClipboardUser className="w-6 h-6 text-blue-400"/>
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        About Me
                    </h2>
                </div>

                <div className="space-y-6 relative">
                    <div
                        className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent blur-3xl -z-10"/>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        <strong> A seasoned Test Automation Engineer and DevOps Practitioner</strong> with over 11+
                        years of experience in designing, managing, and deploying optimized test automation frameworks.
                        Highly skilled in crafting high-quality, scalable solutions with detailed documentation to
                        ensure maintainability.

                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Adept at creating setup scripts for Continuous Integration (CI) pipelines using tools like
                        Jenkins, GitLab, and Concourse, enabling faster and more efficient builds. Proven expertise in
                        enhancing the test software development lifecycle by identifying opportunities for automation
                        and devising comprehensive implementation strategies.
                    </p>
                </div>
            </div>
        </section>
    );
}