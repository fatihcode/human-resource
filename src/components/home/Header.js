import { NavLink } from "react-router-dom"
// import logo from '../navbar-logo.svg'

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src="../navbar-logo.svg" alt="..." />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">

                        <li className="nav-item"><a href="/candidates" className="nav-link">Candidates</a></li>
                        <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
                        <li className="nav-item"><a href="/aboutus" className="nav-link">About</a></li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header