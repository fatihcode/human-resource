import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';
import Header from './home/Header';
import Candidates from './candidates/Candidates';
import Footer from './home/Footer';


export default function App() {
  return (
    <>
      <Header />
  
        <BrowserRouter>
          <Routes>
            
            <Route index element={<Home />} />
            <Route path="candidates/*" element={<Candidates />} />
            <Route path="aboutus" element={<About />} />
            <Route path="contact" element={<Contact />} />

          </Routes>
        </BrowserRouter>
  
      <Footer />
    </>
  );
}