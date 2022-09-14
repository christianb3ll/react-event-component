import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import Rellax from 'rellax'

ReactDOM.render(<App />, document.getElementById("root"))

let rellax = new Rellax('.rellax');

let heroSection = document.getElementById("hero-section");

if(heroSection != null){
  let eventcards = document.getElementById('event-cards');
  let topPos = eventcards.getBoundingClientRect().top + window.scrollY;
  let opacity;
  
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= topPos) {
      opacity = 1 - currentScroll / topPos;
    } else {
      opacity = 0;
    }
    document.querySelector(".photo-grid").style.opacity = opacity;
  });
}

