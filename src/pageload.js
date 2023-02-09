function makeLoad() {
   window.onload = () => {
      // main div that everything resides in //
      const container = document.getElementById("content");

      // header image //
      const headerimg = document.createElement("img");
      headerimg.src = "../images/image.png";
      headerimg.style.cssText = `
      width: 70vw;
      height: 10vw;
      `;
      container.appendChild(headerimg);

      // headline //
      const headline = document.createElement("h1");
      headline.innerText = "Its Shark Time!!";
      container.appendChild(headline);

      // Paragraph describing shark //
      const copy = document.createElement("p");
      copy.innerText = "Sharks are a group of elasmobranch fish characterized by a cartilaginous skeleton, five to seven gill slits on the sides of the head, and pectoral fins that are not fused to the head. Modern sharks are classified within the clade Selachimorpha (or Selachii) and are the sister group to the rays. However, the term 'shark' has also been used to refer to all extinct members of Chondrichthyes with a shark-like morphology, such as hybodonts and xenacanths.";
      container.appendChild(copy);
   };
}

export { makeLoad };
