import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useQuill } from 'react-quilljs'
import "quill/dist/quill.snow.css"
import axios from 'axios'
import Alert from '../Alert/Alert';
import * as Yup from 'yup'
import { uploadFile } from '../../firebase/config'

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

const NewForm = ({ data, setRefreshList }) => {
  const action = data?.id? 'put' : 'post'
  let currentData = data || { title: "", subTitle: "", description: "", image: "", categories: [], tag:"", type:"", isAd:"" }

  const placeholder = 'Descripcion de la noticia...';
  const { quill, quillRef } = useQuill({placeholder});

  const [cat, setCat] = useState([])
  const [tag, setTag] = useState([])
  const [categories, setCategories] = useState([])
  const [currentTag, setCurrentTag] = useState('')
  const [content, setContent] = useState('')

  const [showImages, setShowImages] = useState([])
  const [images, setImages] = useState([]);
  const [imageFile, setImageFile] = useState([]);
  

  const [errorClassTitle, setErrorClassTitle] = useState('')
  const [errorClassSubtitle, setErrorClassSubtitle] = useState('')

  //USEEFFECT FOR RICH TEXT EDITOR QUILL
  useEffect(() => {
    if (quill) {
      if(data?.description) {
        quill.setText(data?.description)
        setCategories(data?.categories)
        setCurrentTag(data?.tag)
        const imagesArray = data?.image.split(' ')
        setImages(imagesArray)
        setShowImages([])
      }
      quill.on('text-change', () => {
        var contenido = quill.root.innerHTML
        setContent(contenido)
      })
    }
  }, [quill, data?.description, data]);

  //USEEFFECT FOR GET DATA FROM API
  useEffect(() => {
    async function getCategories () {
      const categories = await axios.get(`${SERVER_URL}/category`)
      const catName = categories.data.map((e) => {
        return e.name
      })
      setCat(catName)
    }
    async function getTags () {
      const tags = await axios.get(`${SERVER_URL}/tags`)
      const tagName = tags.data.map((e) => {
        return e.name
      })
      setTag(tagName)
    }
    getCategories()
    getTags()
  }, [])

  const onSubmit = async (value, {resetForm})=> {
    if(data?.id) { value.categories = categories } 
    else { value.category = categories }
    value.content = content
    console.log(value.content)
    try {
      if(content.length === 0) return Alert('Ups...', 'question', 'Debes ingresar una descripcion');

      const urlArray = images;
      for (let i = 0; i < imageFile.length; i++) {
        const url = await uploadFile(imageFile[i], imageFile[i].name)
        urlArray.push(url)
      }

      value.image = urlArray.join(' ');

      const config = {
        method: action,
        url: `${SERVER_URL}/post`,
        data: value,
      }

      const data = await axios(config)
      setImageFile([])
      setRefreshList(true)
      if(action === 'post') {
        resetForm()
        setCategories([])
        setCurrentTag('')
        quill.setText('')
      }
      action === 'post'
      ? data.status === 200 && Alert('Excelente', 'success', 'La noticia fue creada correctamente')
      :data.status === 200 && Alert('Excelente', 'success', 'La noticia fue actualizada correctamente'); 

    } catch (error) {
      Alert('Ups...', 'error', `Ocurrio un error: ${error?.response?.data || 'Intente mas tarde...'}`)
    }
  }

  const handleCategories = (e) => {
    if(e.target.value === 'null') return
    if(!categories.includes(e.target.value)) {
      setCategories([...categories, e.target.value])
    }
  }

  const handleTag = (e) => {
    if(e.target.value === 'null') return
    setCurrentTag(e.target.value)
  }

  const handleDeleteCategory = (e) => {
    const updatedCategories = []
    for (let i = 0; i < categories.length; i++) {
      if (e.target?.value !== categories[i]) {
        updatedCategories.push(categories[i])
      }
    }
    setCategories(updatedCategories)
    console.log(categories);
  }

  const handleUploadFiles = async (e) => {
    try {
      if(!showImages.includes(e.target.files[0].name)){
        setShowImages([...showImages, e.target.files[0].name])
        setImageFile([...imageFile, e.target.files[0]])
      }else {
        Alert('Ups...', 'info', 'La imagen ya fue seleccionada')
      }
      console.log(imageFile);
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteImage = (e) => {
    const newImageArray = images.filter(i => i !== e.target.value)
    setImages(newImageArray)
  }

  const schema = Yup.object().shape({
    title: Yup.string()
      .min(10, 'Muy Corto')
      .required('Ingresa un titulo'),
    subTitle: Yup.string()
      .min(20, 'Muy Corto')
      .required('Ingresa un subtitulo'),
    type: Yup.string()
    .required('Seleciona una opcion'),
    tag: Yup.string()
    .required('Seleciona una opcion'),
  });

  return (
    <Formik
      initialValues={currentData}
      onSubmit={onSubmit}
      validationSchema={schema}
      enableReinitialize
      validate={() => {
        let bad = {}
        if (!categories.length) {
          bad.category = "Ingresa almenos una categoria";
        }
        return bad;
      }}
    >
    {({errors}) => (
      <Form className='sticky top-[-25rem] w-[700px]'>
        
        <div className='flex flex-col justify-center items-center px-4 py-2 pb-8 divide-y divide-blue-200'>
          <h1 className='text-4xl font-roboto w-full text-center p-4'>CREAR/ACTUALIZAR</h1>
          <span className='w-full'></span>
        </div>

        <div className='flex flex-col gap-1 px-3'>
          <Field type="text" id='title' name='title' placeholder='Ingrese un título' className={`basis-[90%] border ${errorClassTitle} rounded focus:outline-none focus:border-blue-200 focus:ring-1 p-2`}/>
          {
            errors.title
            ? setErrorClassTitle('border-red-700')
            : setErrorClassTitle('border-gray-500')
          }

          <Field type="text" id='subTitle' name='subTitle' placeholder='Ingrese un subtitulo' className={`basis-[90%] border ${errorClassSubtitle} rounded focus:outline-none focus:border-blue-200 focus:ring-1 p-2`}/>
          {
            errors.subTitle
            ? setErrorClassSubtitle('border-red-700')
            : setErrorClassSubtitle('border-gray-500')
          }

          <div style={{ width: '100%'}} className='h-auto' >
            <div ref={quillRef} />
          </div>

          <div className='flex flex-row gap-4'>
            {
              data?.id
              ? images.map(i => {
                  return (
                    <div className='border border-gray-600 rounded-md flex flex-row'>
                      <img className='w-[80px] h-[80px]' src={i} alt="" />
                      <button onClick={handleDeleteImage} value={i} className='absolute pl-1 font-roboto text-red-400'>x</button>
                    </div>
                  )
                })
              : <div></div>
            }
          </div>

          <div className='flex flex-col'>
            {
              data?.id 
              ? showImages?.map(i => {
                return <span>{i.slice(0, 20)}...</span>
              })
              : <div></div>
            }
          </div>

          <input onChange={(e) => handleUploadFiles(e)} type="file" id='image' name='image' placeholder='Ingrese una imágen' className={`basis-[90%] border rounded focus:outline-none focus:border-blue-200 focus:ring-1 p-2`}/>

          <div className='flex flex-row p-2'>
            <div className='basis-1/2'>
              <div className='flex flex-row gap-2'>
                <Field className='w-[22px] h-[22px]' type="radio" name="type" value="firstPlain" />       
                <label className='text-xl font-roboto'>Primera plana</label>
              </div>
              <div className='flex flex-row gap-2'>
                <Field className='w-[22px] h-[22px]' type="radio" name="type" value="secondPlain" />
                <label className='text-xl font-roboto'>Segunda plana</label>
              </div>
              <div className='flex flex-row gap-2'>
                <Field className='w-[22px] h-[22px]' type="radio" name="type" value="thirdPlain" />
                <label className='text-xl font-roboto'>Tercera plana</label>
              </div>
              <div className='flex flex-row gap-2'>
                <Field className='w-[22px] h-[22px]' type="radio" name="type" value="none" />
                <label className='text-xl font-roboto'>Nada</label>
              </div>
            </div>
            <div className='basis-1/2'>
              <div className='flex flex-row gap-2'>
                <Field className='w-[22px] h-[22px]' type="radio" name="isAd" value="true" />
                <label className='text-xl font-roboto'>Es anuncio</label>
              </div>
              <div className='flex flex-row gap-2'>
                <Field className='w-[22px] h-[22px]' type="radio" name="isAd" value="false" />
                <label className='text-xl font-roboto'>No es anuncio</label>
              </div>
            </div>
          </div>
        
          <ErrorMessage name='type' component={()=> (
            <div> {errors.type} </div>
          )}/>

          <Field className='border border-gray-500 p-2 text-xl rounded font-roboto' name="category" id="category" as="select" onClick={ (e) => handleCategories(e) } >
            <option value="null">Categorias</option>
            {cat.map((e) => {
              return(
                <option key={e} name={e} id={e} > {e} </option>
                )
              })}
          </Field>
          <div className='grid grid-cols-4 gap-2 pb-2'>
            {categories.map((e) => {
              return(
                <div key={e} className='border border-blue-300 rounded-md p-2 flex flex-row'>
                  <span className='text-lg basis-[80%]'> {e} </span>
                  <button type='button' className='text-lg font-roboto text-slate-100 basis-[20%] flex justify-center bg-red-400 rounded-lg cursor-pointer' value={e} onClick={(e) => handleDeleteCategory(e)}>X</button>
                </div>
              )
            })}
          </div>

          <ErrorMessage name='category' component={()=> (
            <h3 className='text-red-700'> {errors.category} </h3>
          )}/>

          <Field className='border border-gray-500 p-2 text-xl rounded font-roboto' name="tag" id="tag" as="select" onClick={(e) => handleTag(e)}>
            <option value="null">Seccion</option>
            {tag.map((e) => {
              return(
                <option key={e} name={e} id={e}> {e} </option>
              )
            })}
          </Field>

          <div className='py-2 '>
            {
              currentTag !== '' 
              ? <span className='text-base font-roboto p-2 text-white bg-black '>{currentTag}</span>
              : <div></div>
            }
          </div>
          <ErrorMessage name='tag' component={()=> (
            <div> {errors.tag} </div>
          )}/>

          <Field className='border border-blue-200 p-4 font-roboto text-3xl cursor-pointer hover:bg-blue-200 hover:text-white text-blue-200 mb-4 rounded' type='submit' name='submit' value={`${action === 'post' ? 'Crear' : 'Actualizar'} noticia`} />
        </div>
        

      </Form>
    )}
    </Formik>
)
}

export default NewForm