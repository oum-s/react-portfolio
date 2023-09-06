import './Header.scss';
// import { useState } from 'react';
import logo from '../../assets/Oumi_icon.svg';


function Header({showNav, setShowNav, navBtn, setNavBtn, handleResize}) {
  return (

    <div className='container__first'>

      <div className='container__second'>

        <a className={`logoLink ${!showNav && "logoNone"}`} href="#home">
          <img className='logo' src={logo} alt="oums_logo" />
        </a>

        <button 
          className={`Icon__burger ${navBtn && 'Icon__burger__block'}  ${!showNav && 'close'}`}
          onClick={ () => {
            setShowNav(false)
            if(showNav === true){
              setShowNav(false)
            }
            if(showNav===false){
              setShowNav(true)
            }
          }}
        >
            <span className='Icon__burger__bar'></span>
        </button> 

        <nav 
          className={`nav ${showNav ? "nav__none" : "nav__block"}`}
        >
          <ul className='Navbar__links'>

            <li> 
              <a href="#home" className='Navbar__links__item slideInDown-1'> Accueil</a>
            </li>

            <li> 
              <a href="#about" className='Navbar__links__item slideInDown-2'> À propos </a> 
            </li>

            <li> 
              <a href="#experience" className='Navbar__links__item slideInDown-4'> Projets </a> 
            </li>

            <li> 
              <a href="#contact" className='Navbar__links__item slideInDown-5'> Contact 
              </a>
            </li>

          </ul>


        </nav>

          

      </div>

    </div>
  );
}
export default Header;