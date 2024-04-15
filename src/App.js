import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Router from "./routes";
import { useRoutes } from "react-router-dom";
import "./App.css";
import SidBar from "./components/Sidbar/SidBar";

export default function App() {
  const router = useRoutes(Router);

  return (
    <>
      <Navbar />
      <div className="landing">
          <SidBar />
        <div className="container">
          {router}
        </div>
      </div>
    </>
  );
}
