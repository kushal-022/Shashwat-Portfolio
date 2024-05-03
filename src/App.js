import './App.css';
import About from './Components/About';
import Activities from './Components/Activities';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import TopNav from './Components/TopNav';
function App() {
  return (
    <div className="app">
      <TopNav/>
      <About />
      <Projects/>
      <Activities/>
      <Footer/>

    </div>
  );
}

export default App;
