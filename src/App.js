import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Link, Navigate, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import EventHandling from "./Components/EventHandling";
import Gallery from "./Components/Gallery";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Notfound from "./Components/Notfound";
import Product from "./Components/Product";
import Register from "./Components/Register";
import ProductAdded from "./Components/ProductAdded";
import ManageUser from "./Components/ManageUser";
import Chat from "./Components/Chat";
import Click from "./Components/Click";
import Conditional from "./Components/Conditional";



function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const mytheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#133c68",
      },
    },
  });

  const mytheme2 = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#133c68",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme ? mytheme2 : mytheme}>
        <BrowserRouter>
          {/* <Link to="/signin">Go to Login Page</Link>
        <NavLink to="/homepage">Go to Home Page</NavLink> */}
          <Header
            username={"Sakshi"}
            avatar={
              "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
            }
            darkTheme={darkTheme}
            setDarkTheme={setDarkTheme}
          >
            My Content
          </Header>
          <Routes>
            <Route element={<Home />} path="homepage" />
            <Route element={<Login />} path="signin" />
            <Route element={<EventHandling />} path="event" />
            <Route element={<Gallery />} path="gallery" />
            <Route element={<Notfound />} path="404" />
            <Route element={<Product />} path="product" />
            <Route element={<Register />} path="register" />
            <Route element={<ProductAdded />} path="added" />
            <Route element={<ManageUser />} path="manageuser" />
            <Route element={<Chat />} path="chat" />
            <Route element={<Click />} path="click" />
            <Route element={<Conditional/>} path="condition" />

           
            {/*navigation */}
            <Route element={<Navigate to="/404" />} path="*" />
            {/* <Route element={<Navigate to="homepage" />} path="/" /> */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
