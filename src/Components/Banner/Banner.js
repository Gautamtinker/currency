import React from "react";
import { Container, styled } from "@mui/system";
import { Typography } from "@mui/material";
import Coursel from "./Coursel";
const MyComponent = styled("div")({
  backgroundImage: "url(./banner2.jpg)",
});
const MyComponent1 = styled("div")({
  height: 400,
  display: "flex",
  direction: "column",
  paddingTop: 25,
  justifyContent: "space-around",
});

const MyComponent2 = styled("div")({
  display: "flex",
  height: "40%",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
});
function Banner() {
  return (
    <MyComponent>
      <MyComponent1>
        <Container>
          <MyComponent2>
            <Typography
              variant="h2"
              sx={{ fontWeight: "bold", marginBottom: 3 }}
            >
              Crypto Tracker
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: "bold",
                color: "darkgray",
                textTransform: "capitalize",
              }}
            >
              Get all the Info regarding your Crypto Currency
            </Typography>
          </MyComponent2>
          <Coursel />
        </Container>
      </MyComponent1>
    </MyComponent>
  );
}

export default Banner;
