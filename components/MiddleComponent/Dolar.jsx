import React from 'react'
import Card from './Card'

const Dolar = ({dolar}) => {
  return (
    <div className="basis-1/4 pr-[10px]" >
    <div className="flex">
      <div className="basis-1/2 mr-[10px] "> 
        <Card sell2={dolar[1]?.casa.venta} buy2={dolar[1]?.casa.compra} variation2={dolar[1]?.casa.variacion} name2={dolar[1]?.casa.nombre} sell1={dolar[0]?.casa.venta} buy1={dolar[0]?.casa.compra} variation1={dolar[0]?.casa.variacion} name1={dolar[0]?.casa.nombre} />
      </div>
      {/* <div className="basis-1/2 ml-[10px]">
      <Card sell={dolar[1]?.casa.venta} buy={dolar[1]?.casa.compra} variation={dolar[1]?.casa.variacion} name={dolar[1]?.casa.nombre} />
      </div> */}
    </div>
  </div>
  )
}

export default Dolar