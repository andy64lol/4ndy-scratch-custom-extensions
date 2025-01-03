class FourndyMathUtilities {
  constructor() {}

  getInfo() {
    return {
      id: '4ndymathutils',
      name: '4ndy Math Utilities',
      blocks: [
        {
          opcode: 'power',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Raise [NUM1] to the power of [NUM2]',
          arguments: {
            NUM1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 2
            },
            NUM2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 3
            }
          }
        },
        {
          opcode: 'sqrt',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Square root of [NUM]',
          arguments: {
            NUM: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 4
            }
          }
        },
        {
          opcode: 'randomInt',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Random integer between [MIN] and [MAX]',
          arguments: {
            MIN: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            },
            MAX: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 10
            }
          }
        },
        {
          opcode: 'eConstant',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Euler\'s number (e)',
          arguments: {}
        },
        {
          opcode: 'piConstant',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Pi (π)',
          arguments: {}
        },
        {
          opcode: 'factorial',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Factorial of [NUM]',
          arguments: {
            NUM: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5
            }
          }
        },
        {
          opcode: 'isPrime',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Is [NUM] a prime number?',
          arguments: {
            NUM: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5
            }
          }
        },
        {
          opcode: 'gcd',
          blockType: Scratch.BlockType.REPORTER,
          text: 'The GCD of [NUM1] and [NUM2]',
          arguments: {
            NUM1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 10
            },
            NUM2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 15
            }
          }
        },
        {
          opcode: 'lcm',
          blockType: Scratch.BlockType.REPORTER,
          text: 'The LCM of [NUM1] and [NUM2]',
          arguments: {
            NUM1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 4
            },
            NUM2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 6
            }
          }
        },
        {
          opcode: 'isApproxEqual',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Is [NUM1] ≈ [NUM2]?',
          arguments: {
            NUM1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 3.14159
            },
            NUM2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 3.14
            }
          }
        },
        {
          opcode: 'isNotEqual',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Is [NUM1] ≠ [NUM2]?',
          arguments: {
            NUM1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5
            },
            NUM2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 7
            }
          }
        },
        {
          opcode: 'resultOfPower',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Result of [NUM1] ^ [NUM2]',
          arguments: {
            NUM1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 2
            },
            NUM2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 3
            }
          }
        },
        {
          opcode: 'roundToNearest',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Round [NUM] to the nearest [PRECISION]',
          arguments: {
            NUM: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 3.14159
            },
            PRECISION: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 2
            }
          }
        },
        {
          opcode: 'isLessThanOrEqual',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is [NUM1] ≤ to [NUM2]?',
          arguments: {
            NUM1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 3
            },
            NUM2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5
            }
          }
        },
        {
          opcode: 'isGreaterThanOrEqual',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is [NUM1] ≥ to [NUM2]?',
          arguments: {
            NUM1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5
            },
            NUM2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 3
            }
          }
        }
      ]
    };
  }

  power(args) {
    return Math.pow(args.NUM1, args.NUM2);
  }

  sqrt(args) {
    return Math.sqrt(args.NUM);
  }

  randomInt(args) {
    return Math.floor(Math.random() * (args.MAX - args.MIN + 1)) + args.MIN;
  }

  eConstant() {
    return Math.E; // Euler's number
  }

  piConstant() {
    return Math.PI; // Pi constant
  }

  factorial(args) {
    if (args.NUM < 0) return 'Factorial not defined for negative numbers';
    let result = 1;
    for (let i = 1; i <= args.NUM; i++) {
      result *= i;
    }
    return result;
  }

  isPrime(args) {
    if (args.NUM <= 1) return false;
    for (let i = 2; i <= Math.sqrt(args.NUM); i++) {
      if (args.NUM % i === 0) return false;
    }
    return true;
  }

  gcd(args) {
    const num1 = args.NUM1;
    const num2 = args.NUM2;

    const findGCD = (a, b) => {
      while (b) {
        [a, b] = [b, a % b];
      }
      return a;
    };

    return findGCD(num1, num2);
  }

  lcm(args) {
    const num1 = args.NUM1;
    const num2 = args.NUM2;

    const findLCM = (a, b) => (a * b) / this.gcd({ NUM1: a, NUM2: b });

    return findLCM(num1, num2);
  }

  isApproxEqual(args) {
    const epsilon = 0.0001;
    return Math.abs(args.NUM1 - args.NUM2) < epsilon;
  }

  isNotEqual(args) {
    return args.NUM1 !== args.NUM2;
  }

  resultOfPower(args) {
    return Math.pow(args.NUM1, args.NUM2);
  }

  roundToNearest(args) {
    return Number(args.NUM.toFixed(args.PRECISION));
  }

  isLessThanOrEqual(args) {
    return args.NUM1 <= args.NUM2;
  }

  isGreaterThanOrEqual(args) {
    return args.NUM1 >= args.NUM2;
  }
}

Scratch.extensions.register(new FourndyMathUtilities());
