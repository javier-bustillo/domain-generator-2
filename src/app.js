/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  /*document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse-line").innerHTML = generateDomain();
  });
};*/
  let i = 1;
  do {
    document.querySelectorAll(`#${i}`).innerHTML = generateDomain();

    console.log(i);
    i++;
  } while (i < 2);
};
let generateDomain = () => {
  let pronoun = [
    "my",
    "your",
    "his",
    "her",
    "its",
    "our",
    "their",
    "mammas",
    "daddys"
  ];
  let adjective = ["new", "oldie", "crushed", "broken", "huge", "tiny"];
  let noun = [
    "wallet",
    "keys",
    "horse",
    "pepper-sproud",
    "chicken",
    "rooster",
    "nose",
    "boys",
    "girls"
  ];
  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * adjective.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let domainName =
    pronoun[pronounIndex] + adjective[adjIndex] + noun[nounIndex] + ".com";

  return domainName;
};
