import './About.scss';
import bgImg from '../../assets/desk2.jpg';

function About({showNav}){

  return(
    <section id='about' className='about'
    style={{ backgroundImage: `url(${bgImg})` }}>

      <div className='container__section'>

        <div className='navSection'
          id={`${showNav && "noNavSection"}`}
          ></div>

        <div className='container__section__dtl'
            id={`${showNav && "newContainerSectionDtl"}`}>

              <h3 className='special'>À propos</h3>

                <section className='about__descr '>
                  
                  <section className='about__container'>
          
                    <p>
                      Hello, c'est Oumi ! Et si je partageais un peu mon histoire ? 
                      <br /> <br />
                      Une fois ma licence en poche, j'ai été enseignante dans une association. Cette expérience m'a rappelé l'importance de l'apprentissage ! En parallèle, j'ai créé un site à l'aide de Wordpress sur le développement personnel. J'ai passé des journées à écrire des articles, régler les petits problèmes techniques du site, automatiser les mails de ma newsletter, faire du référencement naturel et communiquer avec ma petite communauté. J'en apprenais tous les jours et l'envie de travailler dans le domaine du numérique ne cessait d'augmenter.
                      <br /> <br />
                      Puis en 2021, j'ai enfin sauté le pas et fait une formation dans le développement web ! Les journées ont été intenses, mon cerveau n'en pouvait plus, mais ma passion ne cessait de grandir. Puis j'ai fait une deuxième formation pendant laquelle j'ai pu découvrir React, ce qui m'a permis d'obtenir mon titre RNCP de développeur web.
                      <br />
                      Aujourd'hui j'espère travailler dans une entreprise qui me correspond et qui m'aidera à évoluer. 
                    
                    </p>

                  </section>

                  <div className='contact__btn'>
                    <a href="#contact" className='btn btn--primary'>Contactez moi</a>
                  </div>

                </section>
          

        </div>

       

      </div>

    </section>
  )
}

export default About;