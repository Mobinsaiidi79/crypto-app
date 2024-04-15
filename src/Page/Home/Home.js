import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Container from "@mui/material/Container";
import { IoSearch } from "react-icons/io5";
import "./Home.css";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Banner from "../../components/Baner/Banner";
import Loader from "../../components/Loader/Loader"
import { Link } from "react-router-dom";
export default function Home() {
  const [allCoin, setAllCoin] = useState([]);
  const [filteredCoin, setFilteredCoin] = useState([]); // State for filtered coins
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    )
      .then((res) => res.json())
      .then((data) => {
        setAllCoin(data);
        setFilteredCoin(data);
      });
  }, []);

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);
    if (searchValue) {

      const filteredData = allCoin.filter((coin) => {
        return (
          coin.name.toLowerCase().includes(searchValue) ||
          coin.symbol.toLowerCase().includes(searchValue)
        );
      });
      setFilteredCoin(filteredData);
    } else {
      
      setFilteredCoin(allCoin);
    }
  };

  console.log(allCoin);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "image",
      headerName: "image",
      width: 150,
      renderCell: (params) => <img src={params.row.image} alt={params.row.name} className="image__coin"/>,
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "symbol",
      headerName: "Symbol",
      width: 150,
    },{
      field: "price_change_percentage_24h",
      headerName: "Last 24 hours change",
      width: 150,
     
    },
    {
      field: "current_price",
      headerName: "Current Price",
      width: 150,
      type: "number",
     
    },
  ];
  return (
    <>
      <Container>
        <div className="Home-Page">
          <div className="Home-Page__Top">
            <Banner />
          </div>
          <div className="Home-Page__Bottom">
            <div className="search__box">
            <input
                type="text"
                className="search__box--input"
                placeholder="Search by name, symbol, or price..."
                value={searchTerm}
                onChange={handleSearch}
              />
              <IoSearch className="search__box--icon" />
            </div>

            <div className="data-grid">
             {
             filteredCoin.length < 0 ? (<Loader />):
             (
               
                 <DataGrid rows={filteredCoin} columns={columns} 
                initialState={{
                 pagination: {
                   paginationModel: {
                     pageSize: 5,
                   },
                 },
               }}
               pageSizeOptions={[5]}
               />
              
              )
             }
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
