import './Experience.scss';
import CallToAction from '../Experience/CallToAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import projetOC2 from '../../assets/bookiFr__img.jpg'
import projetLibrary from '../../assets/library.png'
import projetWebflow from '../../assets/arabic_book.jpg';
import projetSkyblog from '../../assets/skyblog__-min.png'
import logoMadrassa from '../../assets/madrassatou-el-ilm-logo.png';
import logoOC from '../../assets/OC_logo-min.png';
import logoLibrary from '../../assets/library_logo.png';
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
                    <img src={projetOC2} alt='projet__oc2' /> 
                  </div>

                  <div className='hidden__card  up'>
                    <div className='hidden__card__img'>
                      <img src={logoOC} alt='oc2__logo'></img>
                    </div>
                      <h5>Booki FR</h5>
                      <p>Langages utilisés: HTML/CSS</p>
                    <div className='exp__btn'>
                    <a href="https://oum-s.github.io/P2-BookiFr/">
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
                          <a href="https://oum-s.github.io/skyblog/">
                            <FontAwesomeIcon className='faLink' icon={faLink} />
                          </a>
                        </div>
                        
                      </div>
                </div>

                <div className='experience__project__cards__ctn--2__column--2'>

                  <div className='hideAndSeek'>

                    <div 
                    className="experience__project__card clmn first">
                    <img src={projetWebflow} alt='projet__madrassa' /> 
                    </div>

                    <div className='hidden__card first'>
                      <div className='hidden__card__img oc'>
                        <img src={logoMadrassa} alt='madrassa__logo'></img>
                      </div>
                      <h5>Madrassatou El Ilm</h5>
                      <p>CMS utilisé: Webflow</p>
                      <div className='exp__btn'>
                        <a href="https://madrassatou-el-ilm.webflow.io/">
                          <FontAwesomeIcon className='faLink' icon={faLink} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='hideAndSeek'>
                    <div 
                    className="experience__project__card clmn second">
                    <img src={projetLibrary} alt='projet__library' /> 
                    </div>
                    <div className='hidden__card second'>
                      <div className='hidden__card__img tl'>
                        <img src={logoLibrary} alt='library__logo'></img>
                      </div>
                      <h5>Library</h5>
                      <p>CMS utilisé: Webflow</p>
                      <div className='exp__btn'>
                        <a href="https://library-a73d3d.webflow.io/">
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