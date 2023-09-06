import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3Alt, faSquareJs, faWordpress, faPhp } from '@fortawesome/free-brands-svg-icons';

// import CallToAction from './CallToAction';
// import myPhoto from "../../assets/I-Oum's.png";
// import TypeText from './TypeText';

function Home() {
  return (
    <div id='home'>
      
      <div className='div__first'></div>
      <div className='div__last'></div>
      <div className='div__main'>
        <div className='div__main__presentation'>
          <p > Hey, je suis </p><h2 >YOUSSOUF Oumi</h2>
          <h1 className='special'>Développeuse Web</h1>

          <div className='skills__langages'>
            <FontAwesomeIcon icon={faHtml5} />
            <FontAwesomeIcon icon={faCss3Alt} />
            <FontAwesomeIcon icon={faSquareJs} />
            <FontAwesomeIcon icon={faReact} />
            <FontAwesomeIcon icon={faWordpress} />
            <FontAwesomeIcon icon={faPhp} />
          </div>


        </div>
      </div>

    </div>
  );
}

export default Home;