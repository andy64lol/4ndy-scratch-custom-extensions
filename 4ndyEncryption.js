class FourndyEncryption {
  constructor() {
    this.history = [];
  }

  getInfo() {
    return {
      id: 'Fourndyencryption',
      name: '4ndy Encryption',
      blocks: [
        {
          opcode: 'morseToText',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Convert Morse Code [MORSE] to Text',
          arguments: {
            MORSE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '.... . .-.. .-.. ---'
            }
          }
        },
        {
          opcode: 'textToMorse',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Convert Text [TEXT] to Morse Code',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'HELLO'
            }
          }
        },
        {
          opcode: 'binaryToDecimal',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Convert Binary [BINARY] to Decimal',
          arguments: {
            BINARY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '1101'
            }
          }
        },
        {
          opcode: 'decimalToBinary',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Convert Decimal [DECIMAL] to Binary',
          arguments: {
            DECIMAL: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 13
            }
          }
        },
        {
          opcode: 'octalToDecimal',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Convert Octal [OCTAL] to Decimal',
          arguments: {
            OCTAL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '15'
            }
          }
        },
        {
          opcode: 'decimalToOctal',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Convert Decimal [DECIMAL] to Octal',
          arguments: {
            DECIMAL: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 13
            }
          }
        },
        {
          opcode: 'alphabetToBinary',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Convert Alphabet [TEXT] to Binary',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'A'
            }
          }
        },
        {
          opcode: 'binaryToAlphabet',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Convert Binary [BINARY] to Alphabet',
          arguments: {
            BINARY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '01000001'
            }
          }
        }
      ]
    };
  }

  morseToText(args) {
    const morseCode = args.MORSE.split(' ');
    const morseDict = {
      '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G',
      '....': 'H', '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N',
      '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T', '..-': 'U',
      '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y', '--..': 'Z', '-----': '0',
      '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6',
      '--...': '7', '---..': '8', '----.': '9', '/': ' ', '.-.-.-': '.', '--..--': ',', 
    };

    let text = '';
    for (let code of morseCode) {
      text += morseDict[code] || '';
    }
    return text;
  }

  textToMorse(args) {
    const text = args.TEXT.toUpperCase();
    const morseDict = {
      'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.',
      'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.',
      'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-',
      'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', '0': '-----',
      '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....',
      '7': '--...', '8': '---..', '9': '----.', ' ': '/', '.': '.-.-.-', ',': '--..--'
    };

    let morseCode = '';
    for (let char of text) {
      morseCode += morseDict[char] ? morseDict[char] + ' ' : '';
    }
    return morseCode.trim();
  }

  binaryToDecimal(args) {
    return parseInt(args.BINARY, 2);
  }

  decimalToBinary(args) {
    return args.DECIMAL.toString(2);
  }

  octalToDecimal(args) {
    return parseInt(args.OCTAL, 8);
  }

  decimalToOctal(args) {
    return args.DECIMAL.toString(8);
  }

  alphabetToBinary(args) {
    const text = args.TEXT.toUpperCase();
    return text.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
  }

  binaryToAlphabet(args) {
    const binaryCodes = args.BINARY.split(' ');
    return binaryCodes.map(code => String.fromCharCode(parseInt(code, 2))).join('');
  }
}

Scratch.extensions.register(new EncryptionExtension());
    
