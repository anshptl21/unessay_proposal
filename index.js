function toggleElement(elementId, elementButton) {
    // Get all elements with the class 'slide-element'
    const slideElements = document.querySelectorAll('.slide-element');
    const buttons = document.querySelectorAll('.button');
    console.log(buttons)
    // Hide all elements with the slideOut animation
    slideElements.forEach(element => {
      element.style.animation = 'slideOut 1.2s ease-in-out';
      setTimeout(() => {
        element.style.display = 'none'
      }, 1200);
    });

    buttons.forEach(element => {
        element.style.backgroundColor = 'transparent';
        element.style.color = 'darksalmon';
        element.style.borderRadius = '0';
      });
  
    // Show the selected element with the slideIn animation
    const selectedElement = document.getElementById(elementId);
    const selectedButton = document.getElementById(elementButton);
    selectedButton.style.backgroundColor = 'black'
    selectedButton.style.color = 'antiquewhite'
    selectedButton.style.borderRadius = '10%'
    selectedElement.style.animation = 'slideIn 1.2s ease-in-out';
    setTimeout(() => {
        selectedElement.style.display = 'block';
        document.getElementById('case').style.display = 'none'
    }, 1200);
  }



const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const bText = entry.target.querySelector('.before')
      const aText = entry.target.querySelector('.after')
      const image = entry.target.querySelector('.after_window')
      if (entry.isIntersecting) {
        image.classList.add('slid')
        image.classList.add('display')
        setTimeout(() => {
        bText.classList.add('fadeC')
        aText.classList.add('fadeC')   
        }, 1201);
        setTimeout(() =>{
            bText.classList.add('color')
            aText.classList.add('color')
        }, 1503);
      }
    });
  });
  
const ob2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const title = entry.target.querySelector('.parallax')
      console.log(title)
      if (entry.isIntersecting) {
        title.classList.add('scaled')
      }
    });
  });
  




observer.observe(document.getElementById('image'));
ob2.observe(document.getElementById('paral'));