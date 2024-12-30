import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/TechnicalExpertise/Skills.tsx'
import Experience from './components/Experience/Experience';
import Certifications from './components/Certifications';
import DownloadButton from './components/DownloadButton/DownloadButton';

export default function App() {
    return (
        <div id="portfolio-content" className="min-h-screen bg-gray-950">
            <Header/>
            <About/>
            <Skills/>
            <Experience/>
            <Certifications/>
            <main className="relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1F2937,transparent)] -z-10"/>
            </main>
            <DownloadButton/>

        </div>
    );
}