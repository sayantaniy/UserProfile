import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const Weather = () => {
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState(null)

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
  const CITY = "Howrah"

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`
        )
        const data = await res.json()

        if (data.cod !== 200) {
          setError(data.message)
          return
        }

        setWeather(data)
      } catch {
        setError("Failed to fetch weather")
      }
    }

    fetchWeather()
  }, [])

  if (error) {
    return <p className="text-sm text-red-400">{error}</p>
  }

  if (!weather) {
    return <p className="text-sm text-gray-400">Loading weather...</p>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="font-patrick flex justify-center items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full b1 m-4 t5 w-64 text-center"
    >
      <h2 className="text-lg font-semibold">{weather.name}</h2>
      <p className="text-4xl font-bold">
        {Math.round(weather.main.temp)}°C
      </p>
      <p className="capitalize text-sm t5">
        {weather.weather[0].description}
      </p>
    </motion.div>
  )
}

export default Weather
