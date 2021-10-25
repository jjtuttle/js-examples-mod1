// need to do it with arrays

function hexToString(hex) {

    let base10 = parseInt(hex, 16)

    for(let i = 0; i < hex.length; i++){
        let ele = hex[i]
        console.log(ele);
;    }
    return String.fromCharCode(base10)

   }


console.log(hexToString(['0x0041', '0x0042', '0x0043']));  // 'ABC'

