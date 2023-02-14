import { useState } from 'react'
import emailjs from '@emailjs/browser'

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm)
  const [erros, setErros] = useState({})
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const [fechaOk, setFechaOk] = useState(null)
 

  
  const handleChange = (e)=>{
    const {name,value} = e.target
    setForm({
      ...form,
      [name]: value   
    }
    )
    setFechaOk(form.in)
  }

  //La validacion de errores puede ser en el blur o el submit
  //como se prefiera
  const handleBlur = (e)=>{
   handleChange(e)
   setErros(validateForm(form))
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    setErros(validateForm(form))
    
    if(Object.keys(erros).length === 0){
        setLoading(true)
        setResponse(true)
        setForm(initialForm)

        setTimeout(()=> setResponse(null), 10000)
        
        emailjs.sendForm('service_fw5od51', 'template_rtuxagl', e.target, 'ohu_OQX0UtaMai0lw')
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }else{
        return
    }
  }

  return{
    form,erros,loading,response,fechaOk, handleSubmit, handleChange, handleBlur, 
  }
}
