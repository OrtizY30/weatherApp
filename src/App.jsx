import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Skeleton,
  Typography,
} from "@mui/material";

import { useState } from "react";
import WeatherApp from "./components/WeatherApp";
import Buscador from "./components/Buscador";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const API_WEATHER = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&lang=es&q=`;

  const [city, setCity] = useState("");
  const [loadingh, setLoadingh] = useState(false);
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temp: "",
    condition: "",
    icon: "",
    conditionText: "",
  });
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const fackPromise = () => new Promise((resolve) => setTimeout(resolve, 1500));

  const getData = async () => {
    setLoadingh(true);
    setError({
      error: false,
      message: "",
    });
    try {
      await fackPromise();
      if (!city.trim()) throw { message: "El campo ciudad es obligatorio" };

      const respuesta = await axios.get(`${API_WEATHER}${city}`);
      const { data } = respuesta;
      if (data.error) throw { message: data.error.message };

      setWeather({
        city: data.location.name,
        country: data.location.country,
        temp: data.current.temp_c,
        condition: data.current.condition.code,
        icon: data.current.condition.icon,
        conditionText: data.current.condition.text,
      });
    } catch (error) {
      console.log(error);
      setError({
        error: true,
        message: error.message,
      });
    } finally {
      setLoadingh(false);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Buscador
        error={error}
        setError={setError}
        setCity={setCity}
        city={city}
        getData={getData}
      />

      {loadingh ? (
        <Card sx={{ mt: 5 }}>
          <CardContent>
            <Skeleton height={70} />
          </CardContent>
          <CardMedia>
            <Skeleton sx={{m: "0 auto"}} width={100} variant="rounded" height={115} />
          </CardMedia>
          <CardContent>
            <Skeleton height={60} />
          </CardContent>
        </Card>
      ) : (
        weather.city && <WeatherApp weather={weather} />
      )}

      <Typography textAlign="center" sx={{ mt: 2, fontSize: "10px" }}>
        Powered by:{" "}
        <a href="https://www.weatherapi.com/" title="Weather API">
          WeatherAPI.com
        </a>
      </Typography>
    </Container>
  );
}

export default App;
