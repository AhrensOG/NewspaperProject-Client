import axios from "axios";
import { useEffect, useState } from "react";
import Dolar from "./Dolar";
import IconLogo from "./IconLogo";
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
    <div className="py-3 px-2 sm:px-4 md:px-10 lg:px-16">
      <div className="flex flex-col md:grid md:grid-cols-[1fr_2.5fr_1.5fr]">
        <div className="hidden md:flex">
          <Weather/>
        </div>
        <div className="py-2 md:p-0">
          <IconLogo/>
        </div>
        <div className="flex flex-row justify-center pt-4 md:pt-0 md:px-0">
          <div className="hidden sm:flex md:hidden basis-[40%]">
            <Weather/>
          </div>
          <div className="basis-[60%]">
            <Dolar dolar={dolar}/>
          </div>
        </div>
      </div>
    </div>
  );
}
