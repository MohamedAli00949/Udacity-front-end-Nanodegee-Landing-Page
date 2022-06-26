/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const myNavebar = document.querySelector("#navbar__list");
const mySections = document.getElementsByTagName("section");




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * Measuring The Dimensions Of The Active Class
 * Element.getBoundingClientRect ====>> This Method Is Using For Measuring Dimensions Of The Active Class
 * ele ====>> My Section That is being viewed while scrolling through the page.
*/
function theActiveSection (ele){
    let activeSection = ele.getBoundingClientRect();
    return ( activeSection.top );
};

/**
 * This Function Add My Active Class To My Section That is being viewed while scrolling through the page. 
*/
function addMyActiveClass() {
    for(mySection of mySections) {
        function addMyActiveSection ( section) {
            
            if(theActiveSection(section) < 150 && theActiveSection(section) >= -150){
                section.classList.add('your-active-class');
                
            }else{
                section.classList.remove('your-active-class');
            }
        };

        addMyActiveSection(mySection);
    };
};










/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildingNavBarMenu (){
    for (let i = 0; i < mySections.length; i++) {
        const mySection = document.createElement("li");
        const nameOfMySection = "Section " + (i+1);
        const anchorForMySection = document.createElement("a");
        const idOfMySection = mySections[i].getAttribute("id");
        anchorForMySection.setAttribute("href", "#" + idOfMySection);
        anchorForMySection.addEventListener("click", ()=> {
            mySections[i].scrollIntoView({behavior: "smooth"})
        });
        anchorForMySection.setAttribute("class", "menu__link");
        anchorForMySection.innerText = nameOfMySection;
        mySection.appendChild(anchorForMySection);
        myNavebar.appendChild(mySection);

    };
};






// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event




/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildingNavBarMenu();

const myActiveSections = document.querySelectorAll(".menu__link");
function highlightingSectionAtNavbar () {
    for (let i = 0; i < myActiveSections.length; i++){
        if (mySections[i].classList.contains("your-active-class")) {
            myActiveSections[i].classList.add("active__link");
        }else {
            myActiveSections[i].classList.remove("active__link");
        }
    };
};

// Scroll to section on link click



myNavebar.addEventListener('click', 
    function scrollToElement(mySection){
        if(mySection.target.nodeName === 'A'){
            const sectionId = mySection.target.getAttribute('id');
            const section = document.getElementById(sectionId);
            section.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        }
    }
);

// Set sections as active
window.addEventListener("scroll", addMyActiveClass);
document.addEventListener("scroll", function () {highlightingSectionAtNavbar()});


/**
 *  Removeing The Active Class
*/ 


/**
 *  Adding The Active Class
*/ 


//implementating the actual function




