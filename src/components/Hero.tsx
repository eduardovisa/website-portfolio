import { Button } from '@mui/material';
import { LinkedIn } from '@mui/icons-material';
import heroImg from '../assets/hero-image.svg';

const Hero = () => {
  return (
    <section className="hero-section #">
      <div className="hero-info">
        <div className="container">
          <div className="columna izquierda">
            <div className="izquierda-child">
              <div className="img-container">
                <img src={heroImg} alt="heroImg" className="img" />
              </div>
              <h2>Eduardo Visa</h2>
              <hr style={{ width: '70%' }} />
              <p>{`< Desarrollador Web />`}</p>
            </div>
          </div>
          <div className="columna">
            <h2 style={{ color: '#1a237e' }}>
              <span style={{ color: '#3498db' }}>¡</span>BIENVENIDO
              <span style={{ color: '#3498db' }}>!</span>
            </h2>
            <div className="info-buttons">
              <a
                href="../files/CV-Eduardo_Miguel_Victoria_Sanchez.pdf"
                download
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{ borderRadius: 8, backgroundColor: '#3498db' }}
                >
                  Resúmen
                </Button>
              </a>
              <a href="https://github.com/eduardovisa" target="_blank">
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    borderColor: '#3498db',
                    borderRadius: 8,
                    borderWidth: 3,
                    '&:hover': {
                      borderWidth: 3,
                    },
                  }}
                >
                  GitHub
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/eduardovisa/"
                target="_blank"
              >
                <Button
                  variant="outlined"
                  aria-label="LinkedIn"
                  size="medium"
                  sx={{
                    borderColor: '#3498db',
                    borderRadius: 8,
                    borderWidth: 3,
                    '&:hover': {
                      borderWidth: 3,
                    },
                  }}
                >
                  <LinkedIn fontSize="medium" />
                </Button>
              </a>
            </div>
            <p>
              "Soy un apasionado del desarrollo web, la creatividad y la
              tecnología. En cada línea de código y en cada diseño, encuentro la
              oportunidad de crear experiencias únicas y sorprendentes en la
              web. Mi objetivo es combinar la elegancia estética con la
              funcionalidad impecable para dar vida a proyectos que destaquen y
              cautiven a los usuarios. La versatilidad del desarrollo web me
              inspira a explorar nuevas posibilidades y estar siempre al tanto
              de las últimas tendencias tecnológicas."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
