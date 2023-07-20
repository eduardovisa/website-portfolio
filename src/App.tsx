import { Divider } from '@mui/material';
import AboutMe from './components/aboutme';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Navbar
        children={
          <>
            <Hero />
            <Divider className="divider" />
            <AboutMe />
            <Divider className="divider" />
            <Projects />
          </>
        }
      />
    </>
  );
}

export default App;
