import React from "react";
import Container from "@mui/material/Container"
import './BoxSidbar.css'
export default function BoxSidbar({coin}) {
  return (
    <Container >
      <div className="SidBar__Box">
        <img className="SidBar__img" src={coin.item.large} alt="Coin" />
        <h1 className="SidBar__nameCoin">{coin.item.name}</h1>
        <div className="SidBar__informations">
          <p className="SidBar__Price">{(coin.item.data.price).toFixed(4)}$</p>
          
        </div>
      </div>
      
    </Container>
  );
}
