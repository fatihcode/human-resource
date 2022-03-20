import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Candidates from './Candidates';


function App() {
  return (

    <Container>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>

      {/* <Footer /> */}

    </Container>

  );
}

export default App;