import { Typography, Card, CardMedia } from "@mui/material";

const WeatherApp = ({ weather }) => {
  return (
    <Card sx={{ p: 5, mt: 5, display: "grid", textAlign: "center" }}>
      <Typography variant="h4" component="h2">
        {weather.city}, {weather.country}
      </Typography>

      <CardMedia
        component={"img"}
        title={weather.conditionText}
        src={weather.icon}
        sx={{ margin: "0 auto", width: "130px" }}
      />

      <Typography variant="h5" component="h3">
        {weather.temp}°C
      </Typography>

      <Typography variant="h6" component="h4">
        {weather.conditionText}
      </Typography>
    </Card>
  );
};

export default WeatherApp;
