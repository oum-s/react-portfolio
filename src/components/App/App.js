import './App.scss';
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';
import { useState , useEffect } from 'react';

function App() {
    const [showNav, setShowNav ] = useState(false) // true disparait et false app
    const [navBtn, setNavBtn] = useState(false) //true apparait et false disp
    const [scroll, setScroll] = useState(false)

      //resize 
      window.addEventListener("resize", function () {
        if(window.innerWidth < 720){
          setShowNav(true)
          setNavBtn(true)
        }else{
          setShowNav(false)
          setNavBtn(false)
        }
      })
      
      // scroll
      let scrollPosition = 0;
        // Si on dépasse 100px dans la position l'état est true 
        window.addEventListener("scroll", function (e) {
          scrollPosition = window.scrollY;
          if (scrollPosition < 100) {
            setScroll(false);
            setNavBtn(false)
            if(window.innerWidth < 720){
              setShowNav(true)
              setNavBtn(true)
            }else{
              setShowNav(false);
              setNavBtn(false)
            }
          } else {
            setScroll(true)
            setShowNav(true)
            setNavBtn(true)
          }
        });

          useEffect(() => {
            if(window.innerWidth < 720){
              setShowNav(true)}
          },[window.innerWidth])
      
      
    return (
      <div className="App">
        <Header showNav={showNav} setShowNav={setShowNav} navBtn={navBtn}/>
        <Home />
        <About showNav={showNav}/>
        <Experience showNav={showNav}/>
        <Contact showNav={showNav} />
    </div>
  );
}

export default App;
