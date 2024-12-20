import React from 'react';
import Header from './components/Header/Header';
import About from './components/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Certifications from './components/Certifications';
import ViewCounter from './components/ViewCounter/ViewCounter';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <ViewCounter />
    </div>
  );
}

export default App;