import React from "react";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import theme from "./common/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Menu from "./components/Menu";
import Order from "./pages/Order";
import UserProvider from "./Contexts/UserProvider";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Menu />}>
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/order" element={<Order />} />
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  );
}
