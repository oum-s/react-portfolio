import './App.scss';
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';
import { useState , useEffect } from 'react';

function App() {
    // apparaitre et disparaitre la nav
    const [showNav, setShowNav ] = useState(false)
    // apparaître le burger__lg 
    const [navBtn, setNavBtn] = useState(false)
    // useState lié au scroll
    const [scroll, setScroll] = useState(false)

    const [isMobile, setIsMobile] = useState(false)
 
    //choose the screen size 
    const handleResize = () => {
      if (window.innerWidth < 720) {
          setIsMobile(true)
          setShowNav(true);
          setNavBtn(true)
      } else {
          setIsMobile(false)
          setShowNav(false);
          setNavBtn(false)
      }
    }
    
    // create an event listener
    /* useEffect(() => { */
      window.addEventListener("load", handleResize)
   /*  }) */

    
    // useState pour dire que le menu est fermé par défaut
    const [showLinks, setShowLinks] = useState(false);
    let scrollPosition = 0;
    // Si on dépasse 100px dans la position l'état est true 
    window.addEventListener("scroll", function (e) {
      scrollPosition = window.scrollY;
      setShowLinks(false)
      if (scrollPosition < 100) {
        setScroll(false);
        setShowNav(false);
        setNavBtn(false)
      } else {
        setScroll(true)
        setShowNav(true)
        setNavBtn(true)
      }
    });


    return (
      <div className="App">
        <Header showNav={showNav} setShowNav={setShowNav} navBtn={navBtn} setNavBtn={setNavBtn}/>
        <Home />
        <About showNav={showNav} showLinks={showLinks}/>
        <Experience showNav={showNav}/>
        <Contact showNav={showNav} />
    </div>
  );
}

export default App;
