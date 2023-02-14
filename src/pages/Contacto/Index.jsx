import React from "react";
import { HeaderSection } from "../../components/Main/HeaderSection";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import Alert from 'react-bootstrap/Alert';
import { Fade } from "react-awesome-reveal";
//icons
import { SiWhatsapp } from "react-icons/si";
import { FiMail } from 'react-icons/fi'
//css-propio
import "../../components/Main/bodyRandom.css";
import { useForm } from "../../components/Main/useForm";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from "react-i18next";


const Contacto = () => {
  const {t}= useTranslation()
  
  const initialForm ={
    name: "",
    lastname: "",
    email:"",
    phone: "",
    comments: ""
  }
  
  const validationsForm =(form) =>{
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexNumber =/[0-9]{3}[-][0-9]{7}/
    //cada imput es independiente si o si
  
    let errors = {}
  
    if(!form.name.trim()){
      errors.name = `${t('errorForm.nameError')}`
    }
    if (!form.lastname.trim()){
      errors.lastname = `${t('errorForm.lastnameError')}`
    }
    if (!form.phone.trim()){
      errors.phone = `${t('errorForm.numberError')}`
    } else if (!regexNumber.test(form.phone.trim()))
    errors.phone = `${t('errorForm.numberErrorII')}`
    if(!form.email.trim()){
      errors.email =`${t('errorForm.emailError')}` 
    }else if(!regexEmail.test(form.email.trim())){
      errors.email=`${t('errorForm.emailErrorData')}`  
    }
    
    return errors
  }

  const {
    form,
    erros,
    loading,
    response,
    handleSubmit,
    handleChange,
    handleBlur
  } = useForm(initialForm, validationsForm)

  const section = "Contacto";
  return (
    <>
    <main className="container-index ">
    <HelmetProvider>
      <Helmet>
        <title>Hotel Iberia</title>
        <meta name="author" content="Lobo Mauro Andrés, de Prado Valeria Anabel" />
        <meta name="description" content="Contactate para vivir la experiencia de nuestro Hotel en el centro de Neuquén" />
        <meta name="keywords" content="Hotel Iberia, Neuquén, capital, habitaciones, servicios, desayuno, sala de conferencia, vacaciones"></meta>
      </Helmet>
    </HelmetProvider>
        <Fade duration={2500}>
          <header>
          <HeaderSection section={ section} />
          </header>
        </Fade>
        <Container>
        <Row>
        <Col fluid="lg">
        <Fade duration={2500} delay={800} cascade damping={0.3}>
          <div className="contact-index">
            <h4 className="h4-contact">{t('contactoParrafo')}</h4>
            <Form
              className="form margin-f" 
              onSubmit={handleSubmit} 
              autoComplete='off'
              method="POST"
              >
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>{t('formHabitaciones.name')}</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.name}
                    required
                    />
                    {erros.name &&<p className="error">{erros.name}</p>}
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>{t('formHabitaciones.lastName')}</Form.Label>
                  <Form.Control 
                    type="text"
                    name="lastname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.lastname}
                    required
                    />
                    {erros.lastname &&<p className="error">{erros.lastname}</p>}
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridAddress1">
                  <Form.Label>{t('formHabitaciones.number')}</Form.Label>
                  <Form.Control 
                   type="tel" 
                   placeholder="Código de área-número sin 15"
                   name="phone"
                   onBlur={handleBlur}
                   onChange={handleChange}
                   value={form.phone}
                   required
                  />
                  {erros.phone &&<p className="error">{erros.phone}</p>}
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>{t('formHabitaciones.mail')}</Form.Label>
                <Form.Control 
                  type="email" 
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.email}
                  required
                  />
                  {erros.email &&<p className="error">{erros.email}</p>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>{t('formHabitaciones.data')}</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={3} 
                  name="comments"
                  onChange={handleChange}
                  value={form.comments}
                  />
              </Form.Group>
              
              <button 
              type="submit" 
              className="btn-submit"
              style={{marginTop: "1rem"}}
              >
               {t('formHabitaciones.enviarBtn')}  
              </button>
            </Form>
          </div>
          </Fade>
          <Fade direction="left">
          {response && 
                <Alert variant="light">
                  <Alert.Heading>{t('formHabitaciones.totlemnjSend')}</Alert.Heading>
                  <p>
                  {t('formHabitaciones.mnsjEnviado')}
                  </p>
                </Alert>
              } 
          </Fade>    
        </Col>
        </Row>
        <Fade duration={2000} delay={900} cascade damping={0.3}>
          <footer className="footer-contact">
              <div className="item-footer">
                <h3 className="h3-icon"><SiWhatsapp/></h3>
                <h6 className="h6-text">+54 (0299) 610 4591</h6>
              </div>
              <div className="item-footer">
                <h3 className="h3-icon"><FiMail/></h3>
                <h6 className="h6-text">iberiahotelneuquen@gmail.com</h6>
              </div>
          </footer>
        </Fade>  
        </Container>
      </main>
    </>
  );
};

export { Contacto };
