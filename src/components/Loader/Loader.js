import React from "react";
import './Loader.css'
export default function Loader() {
  return (
    <div class="loader">
      <div class="load-inner load-one"></div>
      <div class="load-inner load-two"></div>
      <div class="load-inner load-three"></div>
      <span class="text">Loading...</span>
    </div>
  );
}
