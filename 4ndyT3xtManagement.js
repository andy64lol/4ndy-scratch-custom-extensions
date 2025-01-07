class FourndyT3xtManagementPlus {
  constructor() {
    this.logs = [];
    this.variables = {};
  }

  getInfo() {
    return {
      id: '4ndyt3xtmanagementplus',
      name: '4ndy T3xt Management+',
      blocks: [
        {
          opcode: 'textManipulation',
          blockType: Scratch.BlockType.REPORTER,
          text: '[OPERATION] of [TEXT]',
          arguments: {
            OPERATION: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'reverse'
            },
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hello'
            }
          }
        },
        {
          opcode: 'stringOperations',
          blockType: Scratch.BlockType.REPORTER,
          text: '[OPERATION] [TEXT] with [SUBSTRING]',
          arguments: {
            OPERATION: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'replace'
            },
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hello world'
            },
            SUBSTRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'world'
            }
          }
        },
        {
          opcode: 'stringComparison',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Does [TEXT] [OPERATION] [COMPARE]?',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hello world'
            },
            OPERATION: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'start with'
            },
            COMPARE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hello'
            }
          }
        },
        {
          opcode: 'concatenateStrings',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Concatenate [TEXT1] and [TEXT2]',
          arguments: {
            TEXT1: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hello'
            },
            TEXT2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'world'
            }
          }
        },
        {
          opcode: 'repeatString',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Repeat [TEXT] [TIMES] times',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hello'
            },
            TIMES: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 3
            }
          }
        },
        {
          opcode: 'splitString',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Split [TEXT] by [DELIMITER]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple,orange,banana'
            },
            DELIMITER: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ','
            }
          }
        },
        {
          opcode: 'repeatSubstring',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Repeat [SUBSTRING] from [TEXT] [TIMES] times',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hello world'
            },
            SUBSTRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'world'
            },
            TIMES: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 3
            }
          }
        },
        {
          opcode: 'toUpperCase',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Convert [TEXT] to uppercase',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hello'
            }
          }
        },
        {
          opcode: 'toLowerCase',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Convert [TEXT] to lowercase',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'HELLO'
            }
          }
        },
        {
          opcode: 'trimWhitespace',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Trim whitespace from [TEXT]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '  hello world  '
            }
          }
        },
        {
          opcode: 'findSubstring',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Find position of [SUBSTRING] in [TEXT]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hello world'
            },
            SUBSTRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'world'
            }
          }
        },
        {
          opcode: 'replaceAllOccurrences',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Replace all [SUBSTRING] in [TEXT] with [REPLACEMENT]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hello world hello'
            },
            SUBSTRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hello'
            },
            REPLACEMENT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hi'
            }
          }
        },
        {
          opcode: 'checkEmpty',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is [TEXT] empty?',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ''
            }
          }
        }
      ]
    };
  }

  textManipulation(args) {
    switch (args.OPERATION) {
      case 'reverse':
        return args.TEXT.split('').reverse().join('');
      case 'toUpperCase':
        return args.TEXT.toUpperCase();
      case 'toLowerCase':
        return args.TEXT.toLowerCase();
      case 'removeWhitespace':
        return args.TEXT.replace(/\s+/g, '');
      default:
        return args.TEXT;
    }
  }

  stringOperations(args) {
    switch (args.OPERATION) {
      case 'replace':
        return args.TEXT.replace(args.SUBSTRING, '');
      case 'insert':
        return args.TEXT.slice(0, args.TEXT.length / 2) + args.SUBSTRING + args.TEXT.slice(args.TEXT.length / 2);
      default:
        return args.TEXT;
    }
  }

  stringComparison(args) {
    switch (args.OPERATION) {
      case 'start with':
        return args.TEXT.startsWith(args.COMPARE);
      case 'end with':
        return args.TEXT.endsWith(args.COMPARE);
      default:
        return false;
    }
  }

  concatenateStrings(args) {
    return args.TEXT1 + args.TEXT2;
  }

  repeatString(args) {
    return args.TEXT.repeat(args.TIMES);
  }

  splitString(args) {
    return args.TEXT.split(args.DELIMITER);
  }

  repeatSubstring(args) {
    const start = args.TEXT.indexOf(args.SUBSTRING);
    if (start === -1) return args.TEXT;
    return args.SUBSTRING.repeat(args.TIMES);
  }

  toUpperCase(args) {
    return args.TEXT.toUpperCase();
  }

  toLowerCase(args) {
    return args.TEXT.toLowerCase();
  }

  trimWhitespace(args) {
    return args.TEXT.trim();
  }

  findSubstring(args) {
    return args.TEXT.indexOf(args.SUBSTRING);
  }

  replaceAllOccurrences(args) {
    const regex = new RegExp(args.SUBSTRING, 'g');
    return args.TEXT.replace(regex, args.REPLACEMENT);
  }

  checkEmpty(args) {
    return args.TEXT.length === 0;
  }
}

Scratch.extensions.register(new FourndyT3xtManagementPlus());
