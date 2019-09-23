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


const dot = '10';
const dotSymbol = '.';
const dash = '11';
const dashSymbol = '-';
const space = '**********';
const letterRegex = /\d{10}/gm;
const symbolsRegex = /\d{2}/gm;

function decode(expr) {
    const words = expr.split(space);
    let wordsDecoded = [];

    words.forEach(word => {
        let wordDecoded = '';
        const letters = word.match(letterRegex);

        letters.forEach(letter => {
            const symbols = letter.match(symbolsRegex);
            let letterEncoded = '';

            symbols.forEach(symbol => {
                switch (symbol) {
                    case dot:
                        letterEncoded += dotSymbol;
                        break;
                    case dash:
                        letterEncoded += dashSymbol;
                    default:
                        break;
                }
            });

            wordDecoded += MORSE_TABLE[letterEncoded];
        });

        wordsDecoded.push(wordDecoded);
    });

    return wordsDecoded.join(' ');
}

module.exports = {
    decode
}