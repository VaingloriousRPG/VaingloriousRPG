/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  /*Navbar for Skills and Spells*/
  class Navbar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `    

      <header>
<div class="navbar">
    <ul id="navlist">
        <li><a href='../../../index.html' target='Vainglorious RPG'>Home</a></li>
        <li>Gameplay & Rules</li>
        <li><a href='../../index.html' target='S&Pwindow'>Skills & Spells</a></li>
        <li><a href='../../../character.html' target='C&Cwindow'>Character Creation</a></li>
        <li>About</li>
    </ul>
    </div>
  </header>
`;
}
}

customElements.define('header-component', Navbar);