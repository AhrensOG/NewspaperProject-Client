import axios from "axios";
import { useEffect, useState } from "react";
import Dolar from "./Dolar";
import IconLogo from "./IconLogo";
import Icons from "./Icons";
import Weather from "./Weather";

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
    <div>
      <div className="flex">
      <Weather/>
        <IconLogo/>
        <Dolar dolar={dolar}/>
      </div>
      <Icons/>
    </div>
  );
}
