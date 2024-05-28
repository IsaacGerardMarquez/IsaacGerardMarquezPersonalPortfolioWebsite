// Home-Page and About Me Page Light and Dark mode
const darkModeButton = document.querySelector('.Dark-Mode-Button');
// I added an event listener to the dark mode button.
darkModeButton.addEventListener('click', function() {
    document.body.classList.toggle('Dark-Mode-Colors'); // This toggles the dark mode colors for the entire body.
    //This toggles the dark mode colors for all of the <h1> elements inside the class 'Isaac-Titles'.
    document.querySelectorAll('.Isaac-Titles h1').forEach(element => {
        element.classList.toggle('Dark-Mode-Colors');
    });
    // This toggles the dark mode colors for all elements with the class 'Web-Dev-Portfolio-AboutMe-Trivias-Infos'.
    document.querySelectorAll('.Web-Dev-Portfolio-AboutMe-Trivias-Infos').forEach(tabcontent => {
        tabcontent.classList.toggle('Dark-Mode-Colors');
    });
    // These are the moon and sun icons that would change to indicate if the web-page is in light or dark mode.
    darkModeButton.classList.toggle('bx-sun');
    darkModeButton.classList.toggle('bx-moon');
});


// About Me Page - Trivias
// This selects all the elements with the class "Web-Dev-Portfolio-AboutMe-Trivias-AboutIsaac".
var tablinks = document.getElementsByClassName("Web-Dev-Portfolio-AboutMe-Trivias-AboutIsaac");
// This selects all the elements with the class "Web-Dev-Portfolio-AboutMe-Trivias-Infos".
var tabcontents = document.getElementsByClassName("Web-Dev-Portfolio-AboutMe-Trivias-Infos");

// This is the function that opens a tab that would show my trivia information in the given category.
function opentab(event, tabname) {
    document.querySelectorAll(".Web-Dev-Portfolio-AboutMe-Trivias-AboutIsaac").forEach(tablink => tablink.classList.remove("active-link")); //This removes the "active-link" class from all elements with the class "Web-Dev-Portfolio-AboutMe-Trivias-AboutIsaac".
    document.querySelectorAll(".Web-Dev-Portfolio-AboutMe-Trivias-Infos").forEach(tabcontent => tabcontent.classList.remove("active-tab")); //This removes the "active-tab" class from all elements with the class "Web-Dev-Portfolio-AboutMe-Trivias-Infos".
    event.currentTarget.classList.add("active-link"); // This adds an "active-link" class to the clicked tab link.
    document.getElementById(tabname).classList.add("active-tab"); // This adds an "active-tab" class to the tab content that is corresponding to the clicked tab link.
}


// Credentials Page - Image Slider
// I added an event listener for the Next button when clicked.
document.querySelector('.goNextbutton').addEventListener('click', function() {
    //  This appends the first image to the end of the image slider.
    document.querySelector('.Web-Dev-Portfolio-CredentialsPage-SlidingImage').appendChild(document.querySelector('.Web-Dev-Portfolio-CredentialsPage-Images'));
});
// I added an event listener for the Back button when clicked.
document.querySelector('.goBackbutton').addEventListener('click', function() {
    // This prepends the last image to the start of the image slider.
    document.querySelector('.Web-Dev-Portfolio-CredentialsPage-SlidingImage').prepend(document.querySelectorAll('.Web-Dev-Portfolio-CredentialsPage-Images')[5]);
});


// Reading Progress Bar
// This gets the element that represents the reading progress bar.
const ReadingProgressBar = document.getElementById("ReadingProgressBar");

// I added an event listener to the window for any scroll events.
window.addEventListener("scroll", () => {
    // This calculates the scroll distance from the top of the document.
    const scrollDistanceForReadingProgressBar = document.documentElement.scrollTop || document.body.scrollTop;

    // This is calculated by dividing the percentage of how far the user has already scrolled in the webpage to the total distance that is scrollable.
    const widthOfReadingProgressBar = (scrollDistanceForReadingProgressBar / (document.body.scrollHeight - window.innerHeight)) * 100;

    // This sets the width of the reading progress bar element which would display the calculated width.
    ReadingProgressBar.style.width = widthOfReadingProgressBar + "%";
});


// GoBackToTopButton: This is the button that, when clicked, brings the user back to the top of the webpage.
// This selects the element with the class "GoBackToTopButton" and assigns it to the variable GoBackToTopButton.
const GoBackToTopButton = document.querySelector(".GoBackToTopButton");

// I added a scroll event listener to the window object.
window.addEventListener("scroll", () => {
    // If the vertical scroll position is more than 100 pixels, this toggles the GoBackToTopButton element's "active" class.
    GoBackToTopButton.classList.toggle("active", window.pageYOffset > 100);
});
