// need to do it with arrays

function hexToString(hex) {
    let hex2Base10 = '';
    let base10 = parseInt(hex, 16)

    for(let i = 0; i < hex.length; i++){
        let ele = hex[i]
        hex2Base10 += String.fromCharCode(ele)
    }
    return hex2Base10;

   }


console.log(hexToString(['0x0041', '0x0042', '0x0043']));  // 'ABC'

