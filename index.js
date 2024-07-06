let raceIndex = 1;
function plusRace(n) {
    raceSlides(raceIndex += n);
}
function currentRace(n) {
    raceSlides(raceIndex = n);
}
    function raceSlides(n) {
        let i;
        /*let rlinks = document.getElementsByClassName("rlink");*/
        let rslides = document.getElementsByClassName("rcard");
        let dots = document.getElementsByClassName("rdot");
        if (n > rslides.length) {raceIndex = 1}
        if (n < 1) {raceIndex = rslides.length}
        for (i = 0; i < rslides.length; i++) {
            rslides[i].style.display = "none";
        }
        /*for (i = 0; i < rlinks.length; i++) {
            rlinks[i].style.display = "none";
        }*/
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active","");
        }
        rslides[raceIndex-1].style.display = "block";
        /*document.getElementById("rF").src = "rlinks[raceIndex-1]"*/
        /*rlinks[raceIndex-1].style.display = "run-in";*/
        dots[raceIndex-1].className += " active";
    }

let profIndex = 1;

function plusProf(m) {
    profSlides(profIndex += m);
}
function currentProf(m) {
    profSlides(profIndex = m);
}
    function profSlides(m) {
        let p;
        let pslides = document.getElementsByClassName("pcard");
        let pdots = document.getElementsByClassName("pdot");
        if (m > pslides.length) {profIndex = 1}
        if (m < 1) {profIndex = pslides.length}
        for (p = 0; p < pslides.length; p++) {
            pslides[p].style.display = "none";
        }
        for (p = 0; p < pdots.length; p++) {
            pdots[p].className = pdots[p].className.replace(" pactive","");
        }
        pslides[profIndex-1].style.display = "block";
        pdots[profIndex-1].className += " pactive";
    
    }

    class Navbar extends HTMLElement {
        constructor() {
          super();
        }
      
        connectedCallback() {
          this.innerHTML = `    
  
          <header>
    <div class="navbar">
        <ul id="navlist">
            <li><a href='index.html' target='HomeWindow'>Home</a></li>
            <li>Gameplay & Rules</li>
            <li><a id=a href='Skills & Spells/index.html' target='S&Pwindow'>Skills & Spells</a></li>
            <li><a href='character.html' target='C&Cwindow'>Character Creation</a></li>
            <li>about</li>
        </ul>
        </div>
      </header>
    `;
  }
}

customElements.define('header-component', Navbar);