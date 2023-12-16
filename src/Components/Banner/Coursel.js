import React, { useEffect, useState } from "react";
import { Container, styled } from "@mui/system";
import { useCrypto } from "../../CryptoContext";
import { TrendingCoins } from "../../config/apis";
import AliceCarousel from "react-alice-carousel";
import axios from "axios";
import { Link } from "react-router-dom";
const MyComponent1 = styled("div")({
  height: "50%",
  display: "flex",
  alignItems: "center",
});
const MyComponent = styled("div")({
  display: "flex", // Ensure that display is set to "flex"
  flexDirection: "row",
  alignItems: "center",
  cursor: "pointer",
  textTransform: "uppercase",
  color: "white",
  //   backgroundColor: "blue",
});

function Coursel() {
  const [trending, settrending] = useState([]);
  const { currency } = useCrypto();
  const fechcoins = async () => {
    try {
      const corsProxyUrl = "https://thingproxy.freeboard.io/fetch/";
      const response = await axios.get(corsProxyUrl + TrendingCoins(currency));
      console.log(response.data); // Log the response to check if data is received
      settrending(response.data);
    } catch (error) {
      console.error("Error fetching trending coins:", error.message);
      // Handle the error or show an error message to the user
    }
  };

  console.log(trending);
  useEffect(() => {
    const fetchData = async () => {
      await fechcoins();
    };

    fetchData(); // Invoke the function

    // No need to include fechcoins in the dependency array
  }, [currency]);

  const items = trending.map((coins) => {
    return (
      //   <MyComponent>
      <Link to={`/coins/${coins.id}`}>
        <img
          src={coins?.image}
          alt={coins.name}
          height="80"
          style={{ marginBottom: 10 }}
        />
      </Link>
      //   </MyComponent>
    );
  });
  console.log(items);
  const resonpsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };
  return (
    <MyComponent>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        responsive={resonpsive}
        autoPlay
        items={items}
      />
    </MyComponent>
  );
}

export default Coursel;
