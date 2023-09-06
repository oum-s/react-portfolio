import '../Footer/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className='footer' id="footer">
      

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/oumiy/'><FontAwesomeIcon icon={faLinkedin} className='social__icons'/></a>
        <a href='https://twitter.com/oumisalam'><FontAwesomeIcon icon={faTwitter} className='social__icons'/></a>
        <a href='https://github.com/oum-s'><FontAwesomeIcon icon={faGithub} className='social__icons'/></a> 
      </div>

      <ul className='permalinks'>
        <li> <a href='#Header'>Accueil</a></li>
        <li> <a href='#about'>À propos</a></li>
        <li> <a href='#Experience'>Projets</a></li>
        <li> <a href='#contact'>Contact</a></li>
      </ul>
      
      
    </footer>
  );
}

export default Footer;