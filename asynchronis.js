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
//!
