(function() {
  'use strict';
  let stopButton = document.getElementById('stopButton');
  let slowButton = document.getElementById('slowButton');
  let goButton = document.getElementById('goButton');
  
  let stop = function () {
  let redLight = document.getElementById('stopLight');  
  redLight.classList.toggle('stop');
  if(redLight.classList.contains('stop')) {
    console.log('Red bulb on');
   } else {
    console.log('Red bulb off');
   }
  }
  
  stopButton.addEventListener('click', stop);
  
  stopButton.addEventListener('mouseenter', () => {
    console.log('Enter stop button');
  });
  
  stopButton.addEventListener('mouseleave', () => {
    console.log('Left stop button');
  });
  
  
  
  let slow = function () {
    let orangeLight = document.getElementById('slowLight');
    orangeLight.classList.toggle('slow');
    if(orangeLight.classList.contains('slow')) {
      console.log('Orange bulb on');
    } else {
      console.log('Orange bulb off');
    }
  }
  
  slowButton.addEventListener('click',slow);
  
  slowButton.addEventListener('mouseenter', () => {
    console.log('Enter slow button');
  });
  
  slowButton.addEventListener('mouseleave', () => {
    console.log('Left slow button');
  });
  
    // YOUR CODE HERE
  
    let go = function () {
      let greenLight = document.getElementById('goLight');
      greenLight.classList.toggle('go');
      if(greenLight.classList.contains('go')) {
        console.log('Green bulb on');
      } else {
        console.log('Green bulb off');
      }
  
    }
  
    goButton.addEventListener('click',go)
  
    goButton.addEventListener('mouseenter', () => {
      console.log('Enter go button');
    });
  
    goButton.addEventListener('mouseleave', () => {
      console.log('Left go button');
    });
})();
