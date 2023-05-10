import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// import css
import "./styles/_reset.scss";
// import pages
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Quiz from "./pages/Quiz";
import Quizhome from "./pages/Quizhome";
import {
  BoardPageContainer,
  BoardDetailContainer,
  BoardCreateContainer,
} from "./containers/boardContainer";
import Map from "./pages/Map";
import Traininginfo from "./pages/Traininginfo";
import Training from "./pages/Training";
import Mydog from "./pages/Mydog";
import Mydoginfo from "./pages/Mydoginfo";
import Store from "./pages/Store";
import Storefood from "./pages/Storefood";
import Storesnack from "./pages/Storesnack";
import StoreT from "./pages/StoreT";
import Storecushion from "./pages/Storecushion";
import Storedetail from "./pages/Storedetail";
import Storelead from "./pages/Storelead";
import StoreCart from "./pages/StoreCart";
//데이터
import shopData from "./json/shopData.json";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/quizhome/quiz" element={<Quiz />} />
          <Route path="/quizhome" element={<Quizhome />} />
          <Route path="/board/page/:pageId" element={<BoardPageContainer />} />
          <Route
            path="/board/searchPage/:pageId"
            element={<BoardPageContainer />}
          />
          <Route path="/board/:contentId" element={<BoardDetailContainer />} />
          <Route path="/board/create" element={<BoardCreateContainer />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/training/traininginfo" element={<Traininginfo />} />
          <Route path="/training" element={<Training />} />
          <Route path="/mydog" element={<Mydog />} />
          <Route path="/mydog/mydoginfo" element={<Mydoginfo />} />
          <Route path="/store" element={<Store Stores={shopData} />} />
          <Route path="/store/food" element={<Storefood Stores={shopData} />} />
          <Route
            path="/store/snack"
            element={<Storesnack Stores={shopData} />}
          />
          <Route path="/store/t" element={<StoreT Stores={shopData} />} />
          <Route path="/store/lead" element={<Storelead Stores={shopData} />} />
          <Route
            path="/store/cushion"
            element={<Storecushion Stores={shopData} />}
          />
          <Route
            path="/store/:storeId"
            element={<Storedetail Stores={shopData} />}
          />
          <Route path="/store/cart" element={<StoreCart Stores={shopData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
