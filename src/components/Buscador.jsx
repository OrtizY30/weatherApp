import { LoadingButton } from "@mui/lab";
import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Buscador = ({ setError, error, setCity, city, getData }) => {
const [carga, setCarga] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setCarga(true);
    // setError({
    //   error: false,
    //   message: "", 
    // });
    getData();
 
  };
  return (
    <>
      <Typography variant="h3" component={"h1"} align="center" gutterBottom>
        Weather App
      </Typography>

      <Box
        sx={{ display: "grid", gap: 2 }}
        component="form"
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <TextField
          id="city"
          label="Ciudad"
          variant="outlined"
          size="small"
          error={error.error}
          helperText={error.message}
          // required
          fullWidth
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <LoadingButton
          type="submit"
          variant="contained"
          // loading={carga}
          loadingIndicator="Buscando ciudad..."
        >
          Buscar
        </LoadingButton>
      </Box>
    </>
  );
};

export default Buscador;
