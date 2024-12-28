import Header from './components/Header/Header';
import About from './components/About';
export default function App() {
    return (
        <div id="portfolio-content" className="min-h-screen bg-gray-950">
            <Header/>
            <About />
            <main className="relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1F2937,transparent)] -z-10"/>
            </main>
        </div>
    );
}