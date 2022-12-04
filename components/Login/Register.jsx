import { Field, Form, Formik, ErrorMessage } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { useAuth } from '../../context/authContext'
import { useRouter } from 'next/router'


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
      resetForm()
      router.push("/")
    } catch (error) {
      console.log(error.message)
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
            <Field type='submit' name='submit' value='Registrarme'/>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Register