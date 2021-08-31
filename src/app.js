/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".net", ".us", ".io", ".digital"];

  for (let i of pronoun) {
    for (let j of adj) {
      for (let k of noun) {
        for (let l of extension) {
          document.querySelector("#domainslisted").innerHTML +=
            "<li>" + i + j + k + l + "</li>";
        }
      }
    }
  }

  console.log("Hello Rigo from the console.");
};
