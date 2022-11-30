import React, { useState } from 'react'
import DashboardCategory from '../../../components/DashboardCategories/DashboardCategory'
import SideBar from '../../../components/SideBar/SideBar'


const categorias = () => {
  
  return (
    <div className='flex flex-row'>
      <div className='basis-[20%]'>
        <SideBar className='h-full'/>
      </div>
      <DashboardCategory/>
    </div>
  )
}

export default categorias