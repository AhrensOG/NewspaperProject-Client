import axios from "axios"
import { useEffect, useState } from "react"


const Weather = () => {

  const [weather, setWeather] = useState({})
  const [dataIcon, setDataIcon] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const getDataForIcon = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=-26.164876049999997&lon=-58.20088442916071&appid=6b6fda2e309bb1f06bbe93586ce35326")
        setDataIcon(getDataForIcon.data)
        const data = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=-26.18&longitude=-58.17&hourly=temperature_2m,apparent_temperature,precipitation&current_weather=true&timezone=auto&past_days=1`)
        setWeather(data.data)
      } catch (error) {
        console.log(error)
      }

    }
    getData()

  }, [])
  return (
    <div className="lg:px-6 md:px-3 py-1">
        <div className="flex flex-row justify-center">
          <span className="font-robot lg:text-2xl md:text-xl lg:tracking-wide md:tracking-normal font-semibold text-gray-500">Clima °C  {weather.current_weather?.temperature}</span>
        </div>
        {
          Object.keys(dataIcon).length 
          ? <div className="flex flex-row justify-center">
              <img src={`http://openweathermap.org/img/wn/${dataIcon?.weather[0]?.icon}@2x.png`} alt="weather icon" />
            </div> : <div> cargando clima... </div>
        }
    </div>
  )
}
// {dataIcon? }
export default Weather