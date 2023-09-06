import './App.scss';
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';
import { useState , useEffect } from 'react';

function App() {
    // apparaitre et disparaitre la nav
    const [showNav, setShowNav ] = useState(false) // true disparait et false app
    // apparaître le burger__lg 
    const [navBtn, setNavBtn] = useState(false) //true apparait et false disp
    // useState lié au scroll
 const [scroll, setScroll] = useState(false)

 window.addEventListener("resize", function () {
  if(window.innerWidth < 720){
    setShowNav(true)
    setNavBtn(true)
  }else{
    setShowNav(false)
    setNavBtn(false)
  }
 })

   /*  const handleResize = () => {
      if (window.innerWidth < 720) {
          setShowNav(true);
          setNavBtn(true);
          console.log('under')
      } else {
          setShowNav(false);
          setNavBtn(false);
          console.log('not')
      }
    }
    useEffect(() => {
      window.addEventListener("load", handleResize)
    }) */
       // useState pour dire que le menu est fermé par défaut
       const [showLinks, setShowLinks] = useState(false);
       let scrollPosition = 0;
       // Si on dépasse 100px dans la position l'état est true 
       window.addEventListener("scroll", function (e) {
         scrollPosition = window.scrollY;
         setShowLinks(false)
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

    //si l'écran est en dessous de 720 juste le show etc false sinon au dessus scroll
    //useState pour dire que le menu est fermé par défaut
     // useState lié au scroll
 /*     const [scroll, setScroll] = useState(false)

    const [showLinks, setShowLinks] = useState(false);
    let scrollPosition = 0;
      window.addEventListener('scroll', function (e) {
        scrollPosition = window.scrollY;
        setShowLinks(false)
        if (window.innerWidth < 720 && scrollPosition < 100) {
           setScroll(false);
           setShowNav(true);
           setNavBtn(true);
           console.log('first', setShowNav)
        }else if(window.innerWidth >= 720 && scrollPosition < 100){
          setScroll(false);
          setShowNav(false);
          setNavBtn(false)
          console.log('second', setShowNav)
        } else {
          setScroll(true)
          setShowNav(true)
          setNavBtn(true)
          console.log("trhird", setShowNav)
        }
      }); */

     
      
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
