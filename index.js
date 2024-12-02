function toggleElement(elementId) {
    // Get all elements with the class 'slide-element'
    const slideElements = document.querySelectorAll('.slide-element');
  
    // Hide all elements with the slideOut animation
    slideElements.forEach(element => {
      element.style.animation = 'slideOut 1.2s ease-in-out';
      setTimeout(() => {
        element.style.display = 'none'
      }, 1200);
    });
  
    // Show the selected element with the slideIn animation
    const selectedElement = document.getElementById(elementId);
    selectedElement.style.animation = 'slideIn 1.2s ease-in-out';
    setTimeout(() => {
        selectedElement.style.display = 'block';
        document.getElementById('case').style.display = 'none'
    }, 1200);
  }



