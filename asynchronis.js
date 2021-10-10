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
