import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar
        children={
          <>
            <Hero />
          </>
        }
      />
    </>
  );
}

export default App;
