// need to do it with arrays

function hexToString(hex) {

    let base10 = parseInt(hexBlob, 16)
    return String.fromCharCode(base10)

   }

console.log(hexToString(['0x0041', '0x0042', '0x0043']));  // 'ABC'

