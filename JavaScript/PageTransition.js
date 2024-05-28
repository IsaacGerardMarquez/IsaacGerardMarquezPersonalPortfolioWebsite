// This function gets executed when the window loads.
window.onload = () => {
  // This selects all of the anchor elements in the document except the ones within the footer.
  const anchorElements = document.querySelectorAll('a:not(.FooterAtBottom a)');
  // This selects the transition element with the class named "PageTransition".
  const transitionElement = document.querySelector('.PageTransition');

  //I set a setTimeout to remove the class named "ActiveState" from the transition element after 450 milliseconds.
  setTimeout(() => transitionElement.classList.remove('ActiveState'), 450);

  // This selects all elements with the class named "More-Projects-ExploreButton-Content"
  const exploreButtons = document.querySelectorAll('.More-Projects-ExploreButton-Content');

  // This iterates over each "Explore" button element.
  exploreButtons.forEach(exploreButton => {
    // I added a click event listener to all of the "Explore" button elements.
    exploreButton.addEventListener('click', e => {
      // This determines if the anchor within the "Explore" button element already has a target attribute set to _blank.
      const anchor = exploreButton.querySelector('a');
      if (!anchor.getAttribute('target') || anchor.getAttribute('target') !== '_blank') {
        // This prevents the default behavior only if the link doesn't already have a target="_blank".
        e.preventDefault();
        // This gets the target URL from the href attribute of the anchor element that is within the clicked "Explore" button.
        const target = anchor.href;
        // This adds the class named "ActiveState" to the transition element.
        transitionElement.classList.add('ActiveState');
        // This removes the class named "ActiveState" from the transition element after a short delay.
        setTimeout(() => window.open(target, '_blank'), 450);
      }
    });
  });
};
