import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar
        children={
          <section className="hero-section">
            <div className="hero-info"></div>
          </section>
        }
      />
    </>
  );
}

export default App;
