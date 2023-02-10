import { midContact } from "./contact";
import { midHome } from "./home";
import { midpan } from "./pageload";

let midMenu;

function setMenu() {
   if (midHome) {
      midHome.remove();
   }
   if (midContact) {
      midContact.remove();
   }
   // Menu OVERLAY FOR MID PANNEL //
   midMenu = document.createElement("div");
   midMenu.style.cssText = `
   display: grid;
   padding: 10px;
    width: 50vw;
    height: 75vh;
    place-content: center;
    grid-auto-rows: auto;
    align-items: center;
    align-content: space-evenly;
   `;
   midpan.appendChild(midMenu);

   // Menu Header //
   const menuContainer = document.createElement("div");
   menuContainer.style.cssText = `
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
   const menuTitle = document.createElement("h1");
   menuTitle.innerText = "WHAT DO I EAT?";
   menuContainer.appendChild(menuTitle);
   midMenu.appendChild(menuContainer);

   // menu 1 //
   const menuItemOne = document.createElement("div");
   menuItemOne.style.cssText = `
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
   const itemOne = document.createElement("p");
   itemOne.innerText = "I eat all sorts of things. My favorite things to eat are dolphins, sea urchins, toads, dogs, cats, eagles, cobras, pythons, spiders, squirrels, water bears, elk, muskrats and of course the mighty moose. ";
   menuItemOne.appendChild(itemOne);
   midMenu.appendChild(menuItemOne);

   // menu 2 //
   const menuItemTwo = document.createElement("div");
   menuItemTwo.style.cssText = `
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
   const itemTwo = document.createElement("p");
   itemTwo.innerText = "Aside from the aforementioned meal items I also enjoy fresh brownies.";
   menuItemTwo.appendChild(itemTwo);
   midMenu.appendChild(menuItemTwo);
}

export { setMenu, midMenu };
