// This opens and enlarges the image of the project when clicked.

// This selects all of the elements within the class named "My-Projects-Container-Contents".
const imagePopUpButton = document.querySelectorAll('.My-Projects-Container-Contents');

// This selects all of the elements within the class named "My-Projects-Container-Contents-Close".
const ProjectContent = document.querySelector('.My-Projects-Container-Contents-Close');

// This selects all of the elements within the class named "My-Projects-Container-Contents-Close-Content img".
const ProjectContentImage = document.querySelector('.My-Projects-Container-Contents-Close-Content img');

// I added event listeners for each of the element within the class named "My-Projects-Container-Contents".
imagePopUpButton.forEach(button => {
  button.addEventListener('click', () => {
    // This adds the class "openPopUpImage" to the element within the class "My-Projects-Container-Contents-Close", when the user clicks the button.
    ProjectContent.classList.add('openPopUpImage');

    // Meanwhile, this sets the src (source) attribute of the <img> (image) element to the src (source) attribute of the button that was clicked by the user <img> (image) element.
    ProjectContentImage.src = button.querySelector('img').src;
  });
});

// I added an event listener to the element with the class named "My-Projects-Container-Contents-Close".
ProjectContent.addEventListener('click', () => {
  // When the user clicks the element named "My-Projects-Container-Contents-Close", the class named "openPopUpImage" is removed.
  ProjectContent.classList.remove('openPopUpImage');
});
