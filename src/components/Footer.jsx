import logo from '../assets/logo.svg';

const Footer = () => {
    return (
        <footer>
            <img className='footer-logo' src={logo} alt="Logo de kasa" />
            <p className='footer-copyright'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;