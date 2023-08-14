import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Initial from "../pages/Initial";
import Register from "../pages/Register";

export default function Rotas(){

return(
<BrowserRouter>
    <Routes>
        <Route element = { <Home/> } path="/" />
        <Route element = { <Initial/> } path="/inicial" />
        <Route element = { <Register/> } path="/registro" />
    </Routes>
</BrowserRouter>
);
}