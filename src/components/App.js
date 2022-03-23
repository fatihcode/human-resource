import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './contact/Contact';
import Header from './Header';
import Candidates from './candidates/Candidates';
import Footer from './Footer';


export default function App() {
  return (
    <>
      <Header />
  
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="candidates/*" element={<Candidates />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />

          </Routes>
        </BrowserRouter>
  
      <Footer />
    </>
  );
}