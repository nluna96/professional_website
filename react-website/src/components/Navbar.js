import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } 
        else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        
                        Noel Luna
                        {/* Noel Luna <i className='fab fa-typo3' /> */}
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Resume
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <a href="https://www.linkedin.com/in/noelamadorluna/" className='nav-links' onClick={closeMobileMenu}>LinkedIn</a>
                            {/* <Link to={pathname : "https://www.linkedin.com/in/noelamadorluna/"} className='nav-links' onClick={closeMobileMenu}>
                                LinkedIn
                            </Link> */}
                        </li>
                        <li className='nav-item'>
                            <a href="https://github.com/nluna96" className='nav-links' onClick={closeMobileMenu}>GitHub</a>
                            {/* <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                GitHub
                            </Link> */}
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Contact</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;



            // <Section image={image}>
            //     <FooterBottom>
            //         <a href="https://www.linkedin.com/in/noelamadorluna/"><img src={require("../logos/linkedin.png")} alt="linked in logo"/></a>
            //         <a href="https://github.com/nluna96"><img src={require("../logos/github.png")} alt="github in logo"/></a>
            //     </FooterBottom>
            // </Section>
