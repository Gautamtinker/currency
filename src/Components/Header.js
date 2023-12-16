import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import {
  Container,
  Toolbar,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useCrypto } from "../CryptoContext";

const MyComponent = styled("div")({
  flex: 1,
  color: "gold",
  fontWeight: "bold",
  cursor: "pointer",
});

const Header = () => {
  const { currency, setCurrency } = useCrypto();
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  console.log(currency);
  const handleChange = (event) => {
    setSelectedCurrency(event.target.value);
    // Add any additional logic you need when the currency changes
  };
  const navigate = useNavigate();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <MyComponent>
              <Typography onClick={() => navigate("/")} variant="h4">
                Crypto App
              </Typography>
            </MyComponent>
            <Select
              variant="outlined"
              style={{
                height: 100,
                width: 85,
                marginRight: 15,
                color: "white",
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
