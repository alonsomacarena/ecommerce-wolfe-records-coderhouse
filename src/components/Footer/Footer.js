import React from 'react';
import './Footer.css'
import {Link} from 'react-router-dom';

const Footer = () => {
    return(
        <footer className=" footer col-sm-12">
        <div className="footer-copyright">© 2020 Copyright:
            <a href="https://github.com/alonsomacarena/"  rel="noopener noreferrer"  className="copyright" target="_blank"> Macarena Alonso</a>
        </div>
        <Link className="button-back" to={`/`}>
            <button type="button" className="button-back">Ir a inicio</button>
        </Link>
        </footer>
    )
}

export default Footer;