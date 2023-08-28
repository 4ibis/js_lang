/****** Nested timers in JS ******
  
  Only few (0-4) NESTED timers can be set with 0 delay
 
  Usually the result will be something like this
  
  Browser:   Nodejs: 
  
  1 >> 0     1 >> 1                                     
  2 >> 0     2 >> 1                                     
  3 >> 0     3 >> 1                                     
  4 >> 0     4 >> 1                                     
  5 >> 5     5 >> 1                                     
  6 >> 4     6 >> 1                                     
  7 >> 5     7 >> 1                                     
  8 >> 5     8 >> 1                                     
     
*/

var times = [];

var calculate = () => {
  times.forEach((_, i) => {
    if (i > 0) {
      var timeDelta = parseInt(times[i] - times[i - 1]);
      console.log(`${i} >>`, timeDelta);
    }
  });
};

// start time
times.push(performance.now());

setTimeout(() => {
  // 1
  times.push(performance.now());
  setTimeout(() => {
    // 2
    times.push(performance.now());
    setTimeout(() => {
      // 3
      times.push(performance.now());
      setTimeout(() => {
        // 4
        times.push(performance.now());
        setTimeout(() => {
          // 5
          times.push(performance.now());
          setTimeout(() => {
            // 6
            times.push(performance.now());
            setTimeout(() => {
              // 7
              times.push(performance.now());
              setTimeout(() => {
                // 8
                times.push(performance.now());
                setTimeout(calculate, 500);
              }, 0);
            }, 0);
          }, 0);
        }, 0);
      }, 0);
    }, 0);
  }, 0);
}, 0);
