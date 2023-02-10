import { midHome } from "./home";
import { midMenu } from "./menu";
import { midpan } from "./pageload";

let midContact;

function setContact() {
   if (midHome) {
      midHome.remove();
   }
   if (midMenu) {
      midMenu.remove();
   }
   // HOME OVERLAY FOR MID PANNEL //
   midContact = document.createElement("div");
   midContact.style.cssText = `
   display: grid;
   padding: 10px;
    width: 50vw;
    height: 75vh;
    place-content: center;
    grid-auto-rows: auto;
    align-items: center;
    align-content: space-evenly;
   `;
   midpan.appendChild(midContact);

   // Contact Header //
   const contactContainer = document.createElement("div");
   contactContainer.style.cssText = `
   display: grid;
   padding: 10px;
   justify-content: center;
   align-content: center;
   background: rgba(2, 122, 154, 1);
   border-color: rgba(1, 18, 51, 1);
   border-style: solid;
   border-radius: 10px;
   border-width: 3px;
   height: fit-content;
   `;
   const contactTitle = document.createElement("h1");
   contactTitle.innerText = "WHERE TO FIND ME";
   contactContainer.appendChild(contactTitle);
   midContact.appendChild(contactContainer);

   // Place 1 //
   const findMeContainer = document.createElement("div");
   findMeContainer.style.cssText = `
   display: grid;
   padding: 10px;
   justify-content: center;
   align-content: center;
   background: rgba(2, 122, 154, 1);
   border-color: rgba(1, 18, 51, 1);
   border-style: solid;
   border-radius: 10px;
   border-width: 3px;
   height: fit-content;
   `;
   const findMe = document.createElement("p");
   findMe.innerText = "You can find me swimming in the ocean. Being that I am a shark that is the only place I will ever be unless I am dead.";
   findMeContainer.appendChild(findMe);
   midContact.appendChild(findMeContainer);

   // HOME FACT //
   const contactLastContainer = document.createElement("div");
   contactLastContainer.style.cssText = `
   display: grid;
    place-content: center;
    background: rgb(2, 122, 154);
    border-color: rgb(1, 18, 51);
    border-style: solid;
    border-radius: 10px;
    border-width: 3px;
    height: fit-content;
    width: 50vw;
    padding: 10px;
   `;
   const contactLast = document.createElement("p");
   contactLast.innerText = "Please do not contact me. If you absolutely must then freedive to the bottom of the Mariana Trench";
   contactLastContainer.appendChild(contactLast);
   midContact.appendChild(contactLastContainer);
}

export { setContact, midContact };
