/****** Plane (not nested) timers in JS ******
  
 Plane (not nested) timers can be set with zero delay
 
 Usually the result in Browser and Nodejs will be something like this
  
  1 >> 0
  2 >> 0
  3 >> 0
  4 >> 0
  5 >> 0
  6 >> 0
  7 >> 0
  8 >> 0
     
*/
var times = [];

var calculate = () => {
  times.forEach((_, i) => {
    if (i > 0) {
      var timeDelta = parseInt(times[i] - times[i - 1]);
      console.log(`${i} >> ${timeDelta}`);
    }
  });
};

// calculate after all timers
setTimeout(calculate, 500);

// start time
times.push(performance.now());

// 1
setTimeout(() => {
  times.push(performance.now());
}, 0);

// 2
setTimeout(() => {
  times.push(performance.now());
}, 0);

// 3
setTimeout(() => {
  times.push(performance.now());
}, 0);

// 4
setTimeout(() => {
  times.push(performance.now());
}, 0);

// 5
setTimeout(() => {
  times.push(performance.now());
}, 0);

// 6
setTimeout(() => {
  times.push(performance.now());
}, 0);

// 7
setTimeout(() => {
  times.push(performance.now());
}, 0);

// 8
setTimeout(() => {
  times.push(performance.now());
}, 0);
