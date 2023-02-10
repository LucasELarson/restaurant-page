import { midContact } from "./contact";
import { midMenu } from "./menu";
import { midpan } from "./pageload";
let midHome;

function setHome() {
   if (midMenu) {
      midMenu.remove();
   }
   if (midContact) {
      midContact.remove();
   }
   // HOME OVERLAY FOR MID PANNEL //
   midHome = document.createElement("div");
   midHome.style.cssText = `
   display: grid;
   padding: 10px;
    width: 100vw;
    height: 75vh;
    place-content: center;
    grid-auto-rows: auto;
    align-items: center;
    align-content: space-evenly;
   `;
   midpan.appendChild(midHome);

   // HOME TITLE //
   const homeTitleContainer = document.createElement("div");
   homeTitleContainer.style.cssText = `
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
   const homeTitle = document.createElement("h1");
   homeTitle.innerText = "WELCOME TO THE OCEAN";
   homeTitleContainer.appendChild(homeTitle);
   midHome.appendChild(homeTitleContainer);

   // HOME ABOUT ME //
   const aboutMeContainer = document.createElement("div");
   aboutMeContainer.style.cssText = `
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
   const aboutMe = document.createElement("p");
   aboutMe.innerText = "I am a shark, this page will tell you all about what its like to be a shark";
   aboutMeContainer.appendChild(aboutMe);
   midHome.appendChild(aboutMeContainer);

   // HOME FACT //
   const sharkFactContainer = document.createElement("div");
   sharkFactContainer.style.cssText = `
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
   const sharkFact = document.createElement("p");
   sharkFact.innerText = "Sharks are a group of elasmobranch fish characterized by a cartilaginous skeleton, five to seven gill slits on the sides of the head, and pectoral fins that are not fused to the head. Modern sharks are classified within the clade Selachimorpha (or Selachii) and are the sister group to the rays.";
   sharkFactContainer.appendChild(sharkFact);
   midHome.appendChild(sharkFactContainer);
}
export { midHome };
export { setHome };
