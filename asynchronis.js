//! - simple timeout call with callback & delay
const setSecondsTimeout = (cb, seconds) => {
    setTimeout(cb, (seconds * 1000))
}
//! ===============================================
//! 
let setSecondsTimeoutArgs = (cb, delay, ...args) => {
    setTimeout(function () {
        cb(...args)
    }, (delay * 1000));

}

//! ===============================================
//! batch callbacks with timer 
const batchTimeouts = (cb, delays) => {

    return cb.map((callback, i) => {
        return setTimeout(callback, delays[i]);
    })
}

//! ===============================================
//! interval count timeout
const intervalCount = (cb, delay, amount) => {
    const interval = setInterval(function () {
        cb();
        amount--;
        if (amount === 0) {
            clearInterval(interval);
        }
    }, delay);
};

//! ===============================================
//! delay and pause timeout

function printAndPause(nums) {
    if (!nums.length) return;

    let delay = nums.shift();

    console.log(delay);

    setTimeout(printAndPause, delay, nums);
}

//! ===============================================
//! with conditionals 
const directions = ['North', 'East', 'East', 'West', 'North', 'South', 'South', 'West']

const navigator = dirArr => {

    if (!dirArr.length) return;


    let first = dirArr.shift();
    let delay;
    if (first === 'North') delay = 250;
    if (first === 'South') delay = 125;
    if (first === 'East') delay = 300;
    if (first === 'West') delay = 175;
    console.log(`Moving ${first}, and waiting ${delay}ms`);
    setTimeout(navigator, delay, dirArr);
}
navigator(directions);

//! ===============================================