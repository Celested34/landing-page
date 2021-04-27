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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// const navBar = document.getElementById("navBar_list")

const section = document.querySelectorAll("section");

const docFrag = document.createDocumentFragment();

// Adapted from an answer on the knoweldge, questions and answers section

const navigation = document.getElementById("navbar__list");
const sections = document.querySelectorAll('section');
sections.forEach(section => {
  const docFrag=document.createDocumentFragment();
  const navItem = document.createElement("li");
  const navItemLink = document.createElement("a");
  navItem.classList.add(section.id);
  navItemLink.textContent=section.id;
  navItemLink.href = `#${section.id}`;
  navItem.appendChild(navItemLink);
  docFrag.appendChild(navItem);
  navigation.appendChild(docFrag);
  navItem.addEventListener("click",  function (e){
    e.preventDefault();
    section.scrollIntoView({
      behavior:"smooth",
      block: "start"
    })
  }) 
})

document.getElementById("navbar__list").addEventListener("click",  function (){
  section.scrollIntoView({
		behavior:"smooth",
		block:"start"
	})
})

	

// // }



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 



// Scroll to section on link click

// Set sections as active

// Navbar at the top of the page 
