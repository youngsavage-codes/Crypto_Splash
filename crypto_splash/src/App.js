import { useState, useEffect } from "react";
import React from "react";
import axios from 'axios'
import Coins from "./components/Coins";
import Navbar from "./components/Navbar";
import Coin from "./routes/Coin";
import { Routes, Route } from "react-router-dom";

function App() {
  const [coins, setCoin] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data)
      console.log(response.data[0]);
    }).catch((error) => {
      console.log(error);
    })
  }, [])

  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/crypto_splash" element={ <Coins coins={coins}/>} />
          <Route path="/coin" element={<Coin />}>
            <Route path=":coinId" element={<Coin />}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
