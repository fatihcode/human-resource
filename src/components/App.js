import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';
import Header from './home/Header';
import Candidates from './candidates/Candidates';
import Footer from './home/Footer';
import Register from './candidates/Register';
import Signin from './auth/Signin';


export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="human-resource/" element={<Home />} />
        <Route path="human-resource/candidates/*" element={<Candidates />} />
        <Route path="human-resource/aboutus" element={<About />} />
        <Route path="human-resource/contact" element={<Contact />} />
        <Route path="human-resource/form" element={<Register />} />
        <Route path="human-resource/signin" element={<Signin />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}