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
    let binaryArm = lettersBinary(expr)
    let morseArr = binaryToMorse(binaryArm)
    return morseToWord(morseArr)
}

module.exports = {
    decode
}

function lettersBinary(expr) {
    let letters = [];
    let count = 0; 
    do {
        let letter = expr.substr(count, 10)
        count += 10
        letters.push(letter)
    } while (count < expr.length)
    return letters
}

function binaryToMorse(arr) {
    let arrBinary = [];
    for (let binary of arr) {
        let withoutEleven = binary.replace(new RegExp('10', 'g'), '.')
        let withoutTen = withoutEleven.replace(new RegExp('11', 'g'), '-')
        let withoutZero = withoutTen.replace(new RegExp('00', 'g'), '')
        arrBinary.push(withoutZero)
    }
    return arrBinary;
}

function morseToWord(arr) {
    let centence = '';
    for (let morse of arr) {
        if (morse !== '**********') {
            centence += MORSE_TABLE[morse]
        } else centence += ' '
    }
    return centence;
}