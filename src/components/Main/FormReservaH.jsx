import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Alert from 'react-bootstrap/Alert';
import "./bodyRandom.css";
import { useForm } from "./useForm";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";


const FormReservaH = ({ btnReserva }) => {
  const {t}= useTranslation()

    const initialForm ={
      name: "",
      lastName:"",
      email:"",
      phoneNumber:"",
      in:"",
      on: "",
      comments: ""
    }
    
  
  const validationsForm = (form) =>{
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

   //cada imput es independiente si o si
    let errors = {}
    if(!form.name.trim()){
      errors.name = `${t('errorForm.nameError')}`
    }
    if (!form.lastName){
      errors.lastName = `${t('errorForm.lastnameError')}`
    }
    if(!form.email.trim()){
      errors.email = `${t('errorForm.emailError')}`
    }else if(!regexEmail.test(form.email.trim())){
      errors.email=`${t('errorForm.emailErrorData')}`
    }
    if(!form.phoneNumber){
      errors.phoneNumber = `${t('errorForm.numberError')}`
    }
    if(!form.in){
      errors.in = `${t('errorForm.dateinError')}`
    }
    return errors
  }

  const {
    form,
    erros,
    loading,
    response,
    fechaOk,
    handleSubmit,
    handleChange,
    handleBlur} = useForm(initialForm, validationsForm)
   
     //Validacion fecha
     const date = new Date()
     const date1 = date.toISOString().substring(0,10)

  return (
    <>
      <main>
        <Form 
        className="form" 
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
              {erros.name&&<p className="error">{erros.name}</p>}
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>{t('formHabitaciones.lastName')}</Form.Label>
              <Form.Control 
                type="text"
                name="lastName"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.lastName}
                required
               />
             {erros.lastName&&<p className="error">{erros.lastName}</p>}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFechaI">
              <Form.Label>{t('formHabitaciones.in')}:</Form.Label>
              <Form.Control 
              type="date" 
              name="in"
              className="input_in"
              min={date1}
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.in}
              required
              />
              {erros.in&&<p className="error">{erros.in}</p>}
            </Form.Group>

            <Form.Group as={Col} controlId="formGridformGridFechaII">
              <Form.Label>{t('formHabitaciones.on')}:</Form.Label>
              <Form.Control 
              type="date" 
              name="on"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.on}
              
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridAddress1">
              <Form.Label>{t('formHabitaciones.number')}</Form.Label>
              <Form.Control 
              type="tel" 
              placeholder="(Área)+(número)"
              name="phoneNumber"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.phoneNumber}
              required
              />
              {erros.phoneNumber&&<p className="error">{erros.phoneNumber}</p>}
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
            {erros.email&&<p className="error">{erros.email}</p>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{t('formHabitaciones.data')}</Form.Label>
            <Form.Control 
            as="textarea" 
            rows={3} 
            name="comments"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.comments}
            />
          </Form.Group>
          <Fade >
            {response && 
            <Alert variant="light">
              <Alert.Heading>{t('formHabitaciones.totlemnjSend')}</Alert.Heading>
              <p>
                {t('formHabitaciones.mnsjEnviado')}
              </p>
            </Alert>
            }
          </Fade>
          <button type="submit" className="btn-submit" >{t('formHabitaciones.enviarBtn')}
          </button>
        </Form>
      </main>
    </>
  );
};

export default FormReservaH;
