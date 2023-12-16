import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import CoinPage from "./Pages/CoinPage";
import { styled } from "@mui/system";

const MyComponent = styled("div")({
  backgroundColor: "#14161a",
  color: "white",
  minHeight: "100vh",
});
function App() {
  return (
    <BrowserRouter>
      <div>
        <MyComponent>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coin/:id" element={<CoinPage />} />
          </Routes>
        </MyComponent>
      </div>
    </BrowserRouter>
  );
}

export default App;
