import logo from '../assets/logo.svg';

const Header = () => {
    return (
        <header>
            <img className='header-logo' src={logo} alt="Logo de kasa" />
            <div className='header-links'>
                <a href='#'>Accueil</a>
                <a href='#'>A Propos</a>
            </div>
        </header>
    );
};

export default Header;