import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

export default function MiddleComponent() {
  const [dolar, setDolar] = useState([]);

  useEffect(() => {
    const getDolar = async () => {
      const data = await axios.get(
        "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
      );
      setDolar(data.data);
    };
    getDolar();
  }, []);

  return (
    <div className="flex">
      <div className="basis-1/4 pt-[30px] ">
        <div className="flex">
          <div className="ml-[20px] mr-[20px] w-[50px] h-[50px]">
            <img src="/instagramLogo.png" alt="" />
          </div>
          <div className="ml-[20px] mr-[20px] w-[50px] h-[50px]">
            <img src="/twitterLogo.png" alt="" />
          </div>
          <div className=" ml-[20px] mr-[20px] w-[55px] h-[60px]">
            <img src="/youtubeLogo.png" alt="" />
          </div>
          <div className=" ml-[20px] mr-[20px] w-[50px] h-[50px]">
            <img src="/facebookLogo.png" alt="" />
          </div>
        </div>
      </div>
      <div className=" basis-1/2 flex justify-center">
        <div className="  w-[240px] h-[130px]">
          <img src="/Logo.png" alt="Logo png" className="w-full h-full" />
        </div>
      </div>
      <div className="basis-1/4 pr-[10px]" >
        <div className="flex">
          <div className="basis-1/2 mr-[10px] "> 
            <Card sell={dolar[0]?.casa.venta} buy={dolar[0]?.casa.compra} variation={dolar[0]?.casa.variacion} name={dolar[0]?.casa.nombre} />
          </div>
          <div className="basis-1/2 ml-[10px]">
          <Card sell={dolar[1]?.casa.venta} buy={dolar[1]?.casa.compra} variation={dolar[1]?.casa.variacion} name={dolar[1]?.casa.nombre} />
          </div>
        </div>
      </div>
    </div>
  );
}
