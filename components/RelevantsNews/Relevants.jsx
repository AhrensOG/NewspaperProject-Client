import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

export default function ImportantNews () {

  const [importantsN, setImportantsN] = useState([])

  useEffect(()=> {
    const getImportants = async () => {
      const json = await axios.get("http://localhost:3001/post?tag=Tendencias&limit=3")
      setImportantsN(json.data)
    }
    getImportants()
  }, [])
  return (
    <div>
      <span>Más relevantes</span>
      {importantsN.map((e) => {
        <Card image={e.image} subtitulo={e.subTitle} />
      })}
    </div>
  )


}