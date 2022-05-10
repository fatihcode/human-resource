import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';
import Header from './home/Header';
import Candidates from './candidates/Candidates';
import Footer from './home/Footer';
import Signin from './auth/Signin';
import Users from './candidates/Users';
import TableCollapse from './candidates/TableCollapse';
import Col from './candidates/Col';


export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="human-resource/" element={<Home />} />
        <Route path="human-resource/candidates/*" element={<Candidates />} />
        <Route path="human-resource/aboutus" element={<About />} />
        <Route path="human-resource/contact" element={<Contact />} />
        <Route path="human-resource/signin" element={<Signin />} />
        <Route path="human-resource/form" element={<Users />} />
        <Route path="human-resource/col" element={<Col />} />
        <Route path="human-resource/table" element={<TableCollapse />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}