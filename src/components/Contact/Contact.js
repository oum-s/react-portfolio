import './Contact.scss';
import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Footer from '../Footer/Footer';

  //FORMULAIRE
  const regexNames = new RegExp("^[a-zA-Z-'.\u00C0-\u00FF]*$");
  const regexEmail = new RegExp("^([a-zA-Z0-9.]{2,})+@([a-zA-Z0-9.]{2,})+[.]+([a-zA-Z0-9-]{2,20})$");//ok
  
  const schema = yup
  .object({
    nom: yup.string()
      .min(3, '3 caractères minimum')
      .max(15, '15 caractères maximum')
      .matches(regexNames, "Nom incorrect")
      .required('Nom obligatoire'),
    email: yup.string()
      .email('Email invalide')
      .matches(regexEmail, "Email incorrect")
      .required("Email obligatoire"),
    message: yup.string()
      .min(15, '15 caractères minimum')
      .max(300, '300 caractères maximum')
      .required('Message obligatoire'),
  })
  .required();


function Contact({showNav}){

// maitriser l'underline des liens de nav

    // montrer le bouton topscroll seulement après 400px
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', () => {
          if (window.scrollY > 400) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
    }, []);

    function scrollToTheTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm(
        'service_rugh2rg',
        'template_64rv9lk',
        form.current,
        'AQvwjQlL92YTS9R7-')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
            }
      );
    };

    const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
    } = useForm({
      resolver: yupResolver(schema)
    });
    const onSubmit = (data, e) => {
    console.log(data);
    sendEmail(e);
    reset();
    }
    console.log(errors);

  return(
    <section id='contact'>
      
      <div className='contact__section'>

        <div className='navSection'
         id={`${showNav && "noNavSection"}`}
        ></div>

        <div className='container__section__dtl'
             id={`${showNav && "newContainerSectionDtl"}`}>

          <h3 className='special'> Contact</h3>
    
            <div className='container contact__container'>

              <form ref={form}
              onSubmit={handleSubmit(onSubmit)}>

                <input type="text" name="nom" placeholder='Votre Nom' {...register('nom', { required: true })}/>
                  {errors.nom && <span className="messageError">{errors.nom.message}</span>}

                <input type="text" name="email" placeholder='Votre E-Mail' {...register('email', { required: true })} />
                  {errors.email && <span className="messageError">{errors.email.message}</span>}

                <textarea name="message" rows="7" placeholder='Votre Message' {...register('message', { required: true })}> </textarea>
                  {errors.message && <span className="messageError">{errors.message.message}</span>}


                <button type="submit" className='btn btn--primary' value='Send'>Envoyer</button>
              
              </form>
            
            </div>

            {/* <section className={`fa-chevron-up ${showTopBtn ? " " : "noBtn"}`}>
              {" "}
              {showTopBtn && (
              <FontAwesomeIcon
              icon={faChevronUp} 
                onClick={()=> scrollToTheTop()}
                />
                )}{" "}
            </section> */}

        </div>

      </div>

      <Footer />

    </section>
  )
}

export default Contact;