const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decodedStr = '';
    let letterArr = splitMorseStr(expr);

    letterArr.forEach( (letter) => {
        if(letter.includes('*'.repeat(10))) {
            decodedStr += " "; 
        } else {
            let morseSymbols = defineMorseSymbol(letter);
            
            decodedStr += MORSE_TABLE[morseSymbols];
        }
    });

    return decodedStr;
}

function splitMorseStr(str) {
    let arr = [];

    for(let i = 0; i < str.length; i += 10) {
        arr.push(str.slice(i, i + 10)); 
    }

    return [].concat(arr);
}

function defineMorseSymbol(letter) {
    let morseSymbols = '';

    for (let i = 0; i < letter.length; i += 2) {
        let symbol = letter[i] + letter[i + 1];

        if(symbol == '00') continue;

        if(symbol == '10') {
            morseSymbols += '.';
        } else {
            morseSymbols += '-';
        }
    }

    return morseSymbols;
} 

module.exports = {
    decode
}