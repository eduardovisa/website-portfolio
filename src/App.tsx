import AboutMe from './components/AboutMe';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar
        children={
          <>
            <Hero />
            <AboutMe />
          </>
        }
      />
    </>
  );
}

export default App;
