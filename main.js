console.log("Starting program");
let Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
let Fan = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output
console.log('Fan is set to', Fan.readSync());

let fanInterval = setInterval(toggleFan, 2000); // toggle fan every 1000ms

function toggleFan() {
  console.log('currently', Fan.readSync());
  Fan.writeSync(Fan.readSync() === 0 ? 1 : 0);
  console.log('changed to', Fan.readSync());
}
