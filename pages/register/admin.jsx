import React from 'react'
import Register from '../../components/Login/Register'

const index = () => {
  return (
    <div className='h-screen p-20'>
      <div className='flex flex-row rounded-md'>
        <div className='basis-1/3 flex flex-row justify-center items-center bg-slate-100'>
          <Register/>
        </div>
        <div className='basis-2/3 flex flex-row justify-center items-center'>
          <img className='w-full h-[500px]' src="https://www.shutterstock.com/image-vector/journalist-concept-mass-media-news-260nw-1995929273.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default index