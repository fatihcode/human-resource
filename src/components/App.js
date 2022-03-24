import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';
import Header from './home/Header';
import Canditates from './canditates/Canditates';
import Footer from './home/Footer';


export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="canditates/*" element={<Canditates />} />
        <Route path="aboutus" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}