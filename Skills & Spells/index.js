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
      <div id="myNav" class="overlay">

        <!-- Button to close the overlay navigation -->
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  
        <!-- Overlay content -->
          <div class="overlay-content">
            <p class="all" id="classbanners">Skill Pages</p>
            <span id="skillgrid">
            
                <button id="one" onclick="document.location='skillPages/Hunter/HunterColumn.html'">Hunter</button>
            
                <button id="two" onclick="document.location='skillPages/Fighter/FighterColumn.html'">Fighter</button>
            
                <button id="three" onclick="document.location='skillPages/Rogue/RogueColumn.html'">Rogue</button>
            
                <button id="four" onclick="document.location='skillPages/Sylvan/SylvanColumn.html'">Sylvan</button>
            
                <button id="five" onclick="document.location='skillPages/Strumos/StrumosColumn.html'">Strumos</button>
            
                <button id="six" onclick="document.location='skillPages/Dokour/DokourColumn.html'">Dokour</button>>
            
                <button id="seven" onclick="document.location='skillPages/Venerator/VeneratorColumn.html'">Venerator</button>
            
                <button id="eight" onclick="document.location='skillPages/Tiro/TiroColumn.html'">Tiro</button>

                 <button id="nine" onclick="document.location='index.html'">All Skills</button>
            
                <!-- button id="nine" onclick="document.location='skillPages/Orix/OrixColumn.html'">Orix</button -->
            
               
            </span>
        </div> 
      </overlay>
`;
}
}

customElements.define('header-component', Navbar);