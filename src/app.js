/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  generateDomain();
  /*document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse-line").innerHTML = generateDomain();
  });
};*/
  /*
  do {
    document.querySelector(text).innerHTML = generateDomain();

    console.log(i);
    i++;
  } while (i < 3);
  */
};

let generateDomain = () => {
  let pronoun = ["my", "your", "his", "her"];
  let adjective = ["new", "oldie", "crushed", "broken"];
  let noun = ["wallet", "keys", "horse", "pepper-sproud"];
  let domainName;

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjective.length; j++) {
      for (let z = 0; z < noun.length; z++) {
        domainName = pronoun[i] + adjective[j] + noun[z] + ".com";
        document.querySelector(
          "#domainName"
        ).innerHTML += `<li  class="list-group-item">${domainName} </li>`;
        console.log(domainName);
      }
    }
  }

  return domainName;
};
