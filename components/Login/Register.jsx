import { Field, Form, Formik, ErrorMessage } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { useAuth } from '../../context/authContext'
import { useRouter } from 'next/router'
import axios from 'axios'
import Alert from '../Alert/Alert'


const Register = () => {
  const { signUp } = useAuth()
  const router = useRouter()

  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const onSubmit = async (value, {resetForm}) => {
    try {
      await signUp(value.email, value.password)
      const data = await axios.post('/api/auth/register', value)
      if (data.status === 200) {
        Alert('Bienvenido!', 'success', 'Saludos!')
      }
      resetForm()
      router.push("/")
    } catch (error) {
      console.log(error.message)
      Alert('Ups...', 'error', error.message)
    }
  }

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Email Invalido')
      .required('Ingresa un email'),
    password: Yup.string()
      .min(6, 'Muy Corto')
      .required('Ingresa una contraseña'),
  });

  return (
    <div>
      <Formik
        initialValues={data}
        onSubmit={onSubmit}
        validationSchema={schema}
      >
        {({errors}) => (
          <Form>
            <Field type='email' name='email' placeholder='usuario@ingresar.com'/>
            <ErrorMessage name='email' component={()=> (
              <div> {errors.email} </div>
            )}/>
            <Field type='password' name='password' placeholder='*********'/>
            <ErrorMessage name='password' component={()=> (
              <div> {errors.password} </div>
            )}/>
            <div className='flex flex-row justify-center'>
              <Field className='p-1 hover:bg-white hover:border hover:border-blue-400 hover:text-blue-400 w-full bg-blue-400 border border-blue-400 tracking-widest text-white font-roboto text-lg' type='submit' name='submit' value='Registrarme'/>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Register