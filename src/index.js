/* eslint-disable no-unused-vars */
import { makeLoad } from "./pageload.js";
import { midHome, setHome } from "./home.js";
import { midContact, setContact } from "./contact.js";
import { midMenu, setMenu } from "./menu.js";

makeLoad();

setTimeout(() => {
   const goHome = document.querySelector("#nav1");
   goHome.addEventListener("click", (e) => setHome());
   const goContact = document.querySelector("#nav3");
   goContact.addEventListener("click", (e) => setContact());
   const goMenu = document.querySelector("#nav2");
   goMenu.addEventListener("click", (e) => setMenu());
}, 1);
