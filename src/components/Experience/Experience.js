import './Experience.scss';
import CallToAction from '../Experience/CallToAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import projetOMC from '../../assets/COMORES.jpg'
import projetTL from '../../assets/project__teenlabs-min.png'
import projetOC from '../../assets/kanap05.jpg';
import projetSkyblog from '../../assets/skyblog__-min.png'
import logoOC from '../../assets/OC_logo-min.png';
import logoTL from '../../assets/teenlabs-logo-min.jpg';
import logoOMC from '../../assets/logo--oh-mycode-min.png';
import logoSky from '../../assets/skyblog--logo-min.png';

function Experience({showNav}){
  return(
    <section id='experience'>

      {/* <div className='experience__container'> */}
            <div className='container__section'>

      <div className='navSection'
      id={`${showNav && "noNavSection"}`}
      ></div>

      <div className='container__section__dtl'
          id={`${showNav && "newContainerSectionDtl"}`}>

        <h3 className="special"> Mes projets </h3>

        <div className='experience'>

          <div className='experience__project'>

            <div className='experience__project__cards'>
              <div className='experience__project__cards__ctn--1'>

                <div className='experience__project__cards__ctn--1__row'>

                  <div 
                  className="experience__project__card up">
                    <img src={projetOMC} alt='projet__ohmycode' /> 
                  </div>

                  <div className='hidden__card  up'>
                    <div className='hidden__card__img'>
                      <img src={logoOMC} alt='ohmycode__logo'></img>
                    </div>
                      <h5>Ohmycode</h5>
                      <p>Langages utilisés: HTML/CSS</p>
                    <div className='exp__btn'>
                    <a href="https://oum-s.github.io/ohmycode/">
                      <FontAwesomeIcon className='faLink' icon={faLink} />
                    </a>
                    </div>
                    
                  </div>

                </div>
                
              </div>

              <div className='experience__project__cards__ctn--2'>

                <div className='experience__project__cards__ctn--2__column--1'>

                      <div 
                      className="experience__project__card alone">
                        <img src={projetSkyblog} alt='skyblog' /> 
                      </div>

                      <div className='hidden__card alone'>

                        <div className='hidden__card__img'>
                          <img src={logoSky} alt='skyblog__logo'></img>
                        </div>

                        <h5>Skyblog</h5>
                        <p>Langages utilisés: HTML/CSS</p>

                        <div className='exp__btn'>
                          <a href="https://github.com/oum-s/skyblog/deployments/github-pages">
                            <FontAwesomeIcon className='faLink' icon={faLink} />
                          </a>
                        </div>
                        
                      </div>
                </div>

                <div className='experience__project__cards__ctn--2__column--2'>

                  <div className='hideAndSeek'>

                    <div 
                    className="experience__project__card clmn first">
                    <img src={projetOC} alt='projet__oc' /> 
                    </div>

                    <div className='hidden__card first'>
                      <div className='hidden__card__img oc'>
                        <img src={logoOC} alt='openclassrooms__logo'></img>
                      </div>
                      <h5>OPENCLASSROOMS</h5>
                      <p>Langage utilisé: React</p>
                      <div className='exp__btn'>
                        <a href="https://github.com/oum-s/P5-Kanap">
                          <FontAwesomeIcon className='faLink' icon={faLink} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='hideAndSeek'>
                    <div 
                    className="experience__project__card clmn second">
                    <img src={projetTL} alt='projet__teenlabs' /> 
                    </div>
                    <div className='hidden__card second'>
                      <div className='hidden__card__img tl'>
                        <img src={logoTL} alt='TEENLABS__logo'></img>
                      </div>
                      <h5>Teenlabs</h5>
                      <p>Langage utilisé: PHP/MySQL</p>
                      <div className='exp__btn'>
                        <a href="https://github.com/oum-s/tl_essai">
                            <FontAwesomeIcon className='faLink' icon={faLink} />
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
                
              </div>
              
            </div>
          </div>


        </div>

        

      </div>

            </div>

            <CallToAction />

      {/* </div> */}

    </section>
  )
}

export default Experience;