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


console.log(hexToString(['0x00A5', '0x0042', '0x0043']));  // 'ABC'
































const binaryStringToArray = str => {
    let binary8bitStr = '';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        binary8bitStr += str[i];
        count++;

        if (count % 8 === 0) {
            if (!str[i + 1]) break;
            binary8bitStr += ',';
        }
    }

    return binary8bitStr.split(',');
};

const binaryToAscii = str => {
    // Your code here
    let asciiStr = "";

    let binaryArr = binaryStringToArray(str);

    binaryArr.forEach((binaryStr) => {
        let charCode = parseInt(binaryStr, 2);
        let char = String.fromCharCode(charCode);
        asciiStr += char;
    });

    return asciiStr;
};

/******************************************************************************/

// console.log(binaryToAscii('10100101'));
// 'abc'

//onsole.log(binaryToAscii('010000010100001001000011'));
// 'ABC'

// console.log(binaryToAscii('010010000110010101101100011011000110111100101100001000000111011101101111011100100110110001100100'));
// 'Hello, world'