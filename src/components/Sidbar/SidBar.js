import React, { useEffect, useState } from "react";
import BoxSidbar from "../BoxSidbar/BoxSidbar";
import "./SidBar.css";

export default function SidBar() {
  const [tradingCoin, setTradingCoin] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => res.json())
      .then((data) => {
        setTradingCoin(data.coins);
      });
  }, []);

  console.log(tradingCoin);


  return (
    <div className="Sidbar">
      <h1 className="Sidbar__title">The most changes</h1>
      <div className="Sidbar__Boxes">
        {tradingCoin.map((coin) => (
          <BoxSidbar coin={coin} key={coin.id} /> 
        ))}
      </div>
    </div>
  );
}
