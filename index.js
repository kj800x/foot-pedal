const Gpio = require('onoff').Gpio;
let pin = new Gpio(15, 'in')
pin.setEdge('both');
pin.watch((err, val) => console.log(val))
