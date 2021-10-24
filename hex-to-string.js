
function hexadecimalToString(hexadecimalChars) {
    let parseDec = '';
    let char = '';

    for (let i = 0; i < hexadecimalChars.length; i++) {
        parseDec += parseInt(hexadecimalChars[i], 16) + ',';
    }

    for (let i = 0; i < parseDec.length; i++) {
        char += String.fromCharCode(parseDec);
    }

    return char;

}


console.log(hexadecimalToString(['0x0041', '0x0042', '0x0043']));  // 'ABC'