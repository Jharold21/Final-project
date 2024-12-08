// narbar header 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Add event listener for the menu icon click
menuIcon.onclick = () => {
  // Toggle the class to show or hide the navbar
  menuIcon.classList.toggle('bx-x'); // For the close icon
  navbar.classList.toggle('active'); // For the active navbar
};


//header function
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active'); // Remove active class from all links
      });
      // Add active class to the link corresponding to the current section
      document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    }
  });

  // Toggle sticky header when scrolling
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
};



// Interest function
document.addEventListener("DOMContentLoaded", () => {
    // Gallery 1
    const galleryContainer = document.querySelector('.gallery-container');
    const galleryControlsContainer = document.querySelector('.gallery-controls');
    const galleryControls = ['previous', 'next'];
    const galleryItems = document.querySelectorAll('.gallery-item');
  
    class Carousel {
      constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
      }
  
      updateGallery() {
        this.carouselArray.forEach((el, index) => {
          el.className = 'gallery-item'; // Reset classes
          el.classList.add(`gallery-item-${index + 1}`); // Apply new positions
        });
      }
  
      setCurrentState(direction) {
        if (direction.classList.contains('gallery-controls-previous')) {
          this.carouselArray.unshift(this.carouselArray.pop()); // Move last item to first
        } else {
          this.carouselArray.push(this.carouselArray.shift()); // Move first item to last
        }
        this.updateGallery();
      }
  
      setControls() {
        this.carouselControls.forEach((control) => {
          const button = document.createElement('button');
          button.className = `gallery-controls-${control}`;
          button.innerText = control.charAt(0).toUpperCase() + control.slice(1); // Capitalize
          galleryControlsContainer.appendChild(button);
        });
      }
  
      useControls() {
        const triggers = galleryControlsContainer.querySelectorAll('button');
        triggers.forEach((control) => {
          control.addEventListener('click', (e) => {
            e.preventDefault();
            this.setCurrentState(control);
          });
        });
      }
    }
  
    const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
  
    exampleCarousel.setControls(); // Add control buttons
    exampleCarousel.useControls(); // Enable control functionality
    exampleCarousel.updateGallery(); // Initial update
  
  
    // Gallery 2
    const gallery2Container = document.querySelector('.gallery2-container');
    const gallery2ControlsContainer = document.querySelector('.gallery2-controls');
    const gallery2Controls = ['previous', 'next'];
    const gallery2Items = document.querySelectorAll('.gallery2-item');
  
    class Carousel2 {
      constructor(container, items, controls) {
        this.carouselContainer2 = container;
        this.carouselControls2 = controls;
        this.carouselArray2 = [...items];
      }
  
      updateGallery2() {
        this.carouselArray2.forEach((el, index) => {
          el.className = 'gallery2-item'; // Reset classes
          el.classList.add(`gallery2-item-${index + 1}`); // Apply new positions
        });
      }
  
      setCurrentState2(direction) {
        if (direction.classList.contains('gallery2-controls-previous')) {
          this.carouselArray2.unshift(this.carouselArray2.pop()); // Move last item to first
        } else {
          this.carouselArray2.push(this.carouselArray2.shift()); // Move first item to last
        }
        this.updateGallery2();
      }
  
      setControls2() {
        this.carouselControls2.forEach((control) => {
          const button = document.createElement('button');
          button.className = `gallery2-controls-${control}`;
          button.innerText = control.charAt(0).toUpperCase() + control.slice(1); // Capitalize
          gallery2ControlsContainer.appendChild(button);
        });
      }
  
      useControls2() {
        const triggers = gallery2ControlsContainer.querySelectorAll('button');
        triggers.forEach((control) => {
          control.addEventListener('click', (e) => {
            e.preventDefault();
            this.setCurrentState2(control);
          });
        });
      }
    }
  
    const exampleCarousel2 = new Carousel2(gallery2Container, gallery2Items, gallery2Controls);
  
    exampleCarousel2.setControls2(); // Add control buttons
    exampleCarousel2.useControls2(); // Enable control functionality
    exampleCarousel2.updateGallery2(); // Initial update
  });
  