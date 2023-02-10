import { setHome } from "./home";
import "../images/background.png";

let nav1, nav2, nav3, midpan;

function makeLoad() {
   window.onload = () => {
      // main div that everything resides in //

      // the body of the app //
      const webBody = document.body;
      webBody.style.cssText = `
      width: 100vw;
      height: 100vh;
      margin: 0px;
      background-image: url(../images/background.png); 
      background-size: 100vw 100vh;
      margin: 0px;
      `;
      // image will not load//

      // Content Container //
      const content = document.createElement("div");
      content.setAttribute("id", "content");
      content.style.cssText = `
      display: grid;
      margin: 0px;
      background-size: 100vw 100vh;
      width: 100vw;
      height: 100vh;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr auto 1fr;
      `;
      webBody.appendChild(content);

      // Header //
      const header = document.createElement("div");
      header.setAttribute("id", "header");
      header.style.cssText = `
      display: grid;
      background-color: #92E3EBff;
      align-items: center;
      justify-content: center;
      gride-area: header;
      grid-column: 1/4;
      grid-row: 1/2;
      `;
      content.appendChild(header);

      // NAVBAR //
      const navbar = document.createElement("div");
      navbar.setAttribute("id", "navbar");
      navbar.style.cssText = `
      display: grid;
      width: clamp(33vw, 60vw, 90vw);
      grid-template-columns: 1fr 1fr 1fr;
      gap: 5vw;
      `;
      header.appendChild(navbar);

      // NAVBUTTONS //
      nav1 = document.createElement("button");
      nav1.setAttribute("id", "nav1");
      nav1.classList.add("navbutton");
      nav1.style.cssText = `
      height: 5vh;
      background: rgba(2, 122, 154, 1);
      border-radius: 10px;
      border: 0px;
      `;
      nav1.innerText = "HOME";
      navbar.appendChild(nav1);

      nav2 = document.createElement("button");
      nav2.setAttribute("id", "nav2");
      nav2.classList.add("navbutton");
      nav2.style.cssText = `
      height: 5vh;
      background: rgba(2, 122, 154, 1);
      border-radius: 10px;
      border: 0px;
      `;
      nav2.innerText = "MENU";
      navbar.appendChild(nav2);

      nav3 = document.createElement("button");
      nav3.setAttribute("id", "nav3");
      nav3.classList.add("navbutton");
      nav3.style.cssText = `
      height: 5vh;
      background: rgba(2, 122, 154, 1);
      border-radius: 10px;
      border: 0px;
      `;
      nav3.innerText = "CONTACT";
      navbar.appendChild(nav3);

      // MID DIV //
      const middiv = document.createElement("div");
      middiv.setAttribute("id", "middiv");
      middiv.style.cssText = `
      display: grid;
      background: rgba(146, 227, 235, 0);
      align-items: center;
      justify-content: center;
      grid-area: 2 / 1 / 3 / 4;
      grid-template-rows: 1fr minmax(85vh, auto) 1fr;
      grid-template-columns: 1fr clamp(33vw, 60vw , 90vw) 1fr;
      `;
      content.appendChild(middiv);

      // MIDDLE PANNEL //
      midpan = document.createElement("div");
      midpan.setAttribute("id", "midpan");
      midpan.style.cssText = `
      display: grid;
      background-color: #92E3EBff;
      align-items: center;
      justify-content: center;
      grid-row: 2/3;
      grid-column: 2/3;
      height: 75vh;
      border-radius: 10px;
      overflow: scroll;
      `;
      middiv.appendChild(midpan);

      // Footer //
      const footer = document.createElement("div");
      footer.setAttribute("id", "footer");
      footer.innerText = "Did you enjoy shark time?";
      footer.style.cssText = `
      display: grid;
      background-color: #92E3EBff;
      align-items: center;
      justify-content: center;
      gride-area: header;
      grid-row: 3/4;
      grid-column: 1/4;
      `;
      content.appendChild(footer);

      setHome();
   };
}

export { nav1, nav2, nav3, midpan };
export { makeLoad };
