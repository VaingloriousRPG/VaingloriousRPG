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
        <li><a href='../../../index.html' target='Vainglorious RPG'>Home &nbsp; &nbsp;</a></li>
        <li>Gameplay & Rules</li>
        <li><a href='../../index.html' target='S&Pwindow'>Skills & Spells</a></li>
        <li><a href='../../../character.html' target='C&Cwindow'>Character Creation</a></li>
        <li>About</li>
    </ul>
    </div>
  </header>
  </overlay>
          <div class="overlay-content">
            <p class="all" id="classbanners">Skill Pages</p>
            <span id="skillgrid">
            
                <button id="one" onclick="document.location='../Hunter/HunterColumn.html'">Hunter</button>
            
                <button id="two" onclick="document.location='../Fighter/FighterColumn.html'">Fighter</button>
            
                <button id="three" onclick="document.location='../Rogue/RogueColumn.html'">Rogue</button>
            
                <button id="four" onclick="document.location='../Sylvan/SylvanColumn.html'">Sylvan</button>
            
                <button id="five" onclick="document.location='../Strumos/StrumosColumn.html'">Strumos</button>
            
                <button id="six" onclick="document.location='../Dokour/DokourColumn.html'">Dokour</button>>
            
                <button id="seven" onclick="document.location='/skillPages/Venerator/VeneratorColumn.html'">Venerator</button>
            
                <button id="eight" onclick="document.location='../Tiro/TiroColumn.html'">Tiro</button>
            
                <button id="nine" onclick="document.location='../Orix/OrixColumn.html'">Orix</button>
            
                <button id="ten" onclick="document.location='../../index.html'">All Skills</button>
            </span>
        </div> 
      </overlay>
`;
}
}

customElements.define('header-component', Navbar);