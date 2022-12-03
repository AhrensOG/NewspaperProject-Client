import React from 'react'
import Card from './Card'

const Dolar = ({dolar}) => {
  return (
    <div className=""> 
      <Card sell2={dolar[1]?.casa.venta} buy2={dolar[1]?.casa.compra} variation2={dolar[1]?.casa.variacion} name2={dolar[1]?.casa.nombre} sell1={dolar[0]?.casa.venta} buy1={dolar[0]?.casa.compra} variation1={dolar[0]?.casa.variacion} name1={dolar[0]?.casa.nombre} />
    </div>
  )
}

export default Dolar