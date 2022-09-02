// Strict mode
'use strict';

// Traffic light operator | toggle parameter (string) for which light to change | log parameter (true/false) for logging light change
function LightSwitch(toggle) {
  this.toggle = function(cssClass) {
    let button = document.querySelector(`#${toggle}Button`);
    let light = document.querySelector(`#${cssClass}Light`);
    console.log(light);
    button.addEventListener('click', () => {
      light.classList.toggle(`${cssClass}`);
    });
  };
}


let redLight = new LightSwitch('stop');
let yellowLight = new LightSwitch('slow');
let greenLight = new LightSwitch('go');



redLight.toggle('stop');
yellowLight.toggle('slow');
greenLight.toggle('go');