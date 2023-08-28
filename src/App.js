import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

import { Analytics } from '@vercel/analytics';
function App() {
  return (
    <div className="App">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Footer />
        <Analytics />
    </div>
  );
}

export default App;
