function changeBG() {
    var navbar = document.getElementById("navbar");
    var scrollValue = window.scrollY;
    if (scrollValue < 100) {
        navbar.classList.remove("black");
    } else {
        navbar.classList.add("black");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('button');
    var hoverDiv = document.getElementById('hover');

    button.addEventListener('mouseover', function () {
        hoverDiv.style.display = 'block';
    });

    // Hide div when mouse leaves button
    button.addEventListener('mouseout', function () {
        hoverDiv.style.display = 'none';
    });

    // Keep div visible when mouse is inside it
    hoverDiv.addEventListener('mouseover', function () {
        hoverDiv.style.display = 'block';
    });

    // Hide div when mouse leaves div
    hoverDiv.addEventListener('mouseout', function () {
        hoverDiv.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('buttons');
  var hoverDiv = document.getElementById('hoverr');

  button.addEventListener('mouseover', function () {
      hoverDiv.style.display = 'block';
  });

  // Hide div when mouse leaves button
  button.addEventListener('mouseout', function () {
      hoverDiv.style.display = 'none';
  });

  // Keep div visible when mouse is inside it
  hoverDiv.addEventListener('mouseover', function () {
      hoverDiv.style.display = 'block';
  });

  // Hide div when mouse leaves div
  hoverDiv.addEventListener('mouseout', function () {
      hoverDiv.style.display = 'none';
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const slideInterval = 5000; // Interval time in milliseconds (3 seconds)
    let isPaused = false; // Flag to track hover state
  
    // Function to automatically click the next button
    function autoClickNext() {
      if (!isPaused) {
        const nextButton = document.getElementById('next');
        nextButton.click();
      }
    }
  
    // Set interval to automatically click next button
    const intervalId = setInterval(autoClickNext, slideInterval);
  
    // Event listener for mouseenter on carousel control buttons
    const controlButtons = document.querySelectorAll('.carousel-control-prev, .carousel-control-next');
    controlButtons.forEach(button => {
      button.addEventListener('mouseenter', function() {
        isPaused = true;
      });
    });
  
    // Event listener for mouseleave on carousel control buttons
    controlButtons.forEach(button => {
      button.addEventListener('mouseleave', function() {
        isPaused = false;
      });
    });
  
    // Event listener to pause interval when hovering over carousel indicators
    const indicators = document.querySelector('.carousel-indicators');
    indicators.addEventListener('mouseenter', function() {
      isPaused = true;
    });
  
    // Event listener to resume interval when leaving carousel indicators
    indicators.addEventListener('mouseleave', function() {
      isPaused = false;
    });
  
  
  });
  
window.addEventListener('scroll', changeBG);