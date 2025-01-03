class FourndyMathComparisons {
  constructor() {}

  getInfo() {
    return {
      id: '4ndymathcomp',
      name: '4ndy Math Comparisons',
      blocks: [
        {
          opcode: 'isFactorial',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is [NUM1] factorial of [NUM2]?',
          arguments: {
            NUM1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 120
            },
            NUM2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5
            }
          }
        },
        {
          opcode: 'isLog',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is [NUM1] log base [BASE] of [NUM2]?',
          arguments: {
            NUM1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 3
            },
            BASE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 10
            },
            NUM2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1000
            }
          }
        },
        {
          opcode: 'isPrime',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is [NUM] a prime number?',
          arguments: {
            NUM: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 7
            }
          }
        },
        {
          opcode: 'isFibonacci',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is [NUM] a Fibonacci number?',
          arguments: {
            NUM: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 21
            }
          }
        },
        {
          opcode: 'isPerfectSquare',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is [NUM] a perfect square?',
          arguments: {
            NUM: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 16
            }
          }
        },
        {
          opcode: 'isPerfectCube',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is [NUM] a perfect cube?',
          arguments: {
            NUM: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 27
            }
          }
        },
        {
          opcode: 'isEven',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is [NUM] even?',
          arguments: {
            NUM: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 8
            }
          }
        },
        {
          opcode: 'isOdd',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is [NUM] odd?',
          arguments: {
            NUM: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 7
            }
          }
        },
        {
          opcode: 'isAbs',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is [NUM1] abs of [NUM2]?',
          arguments: {
            NUM1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5
            },
            NUM2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: -5
            }
          }
        },
        {
          opcode: 'isCos',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is [NUM1] cos of [NUM2]?',
          arguments: {
            NUM1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0.5
            },
            NUM2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: Math.PI / 3
            }
          }
        },
        {
          opcode: 'isTan',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is [NUM1] tan of [NUM2]?',
          arguments: {
            NUM1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: Math.sqrt(3)
            },
            NUM2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: Math.PI / 3
            }
          }
        },
        {
          opcode: 'isSin',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is [NUM1] sin of [NUM2]?',
          arguments: {
            NUM1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0.5
            },
            NUM2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: Math.PI / 6
            }
          }
        },
        {
          opcode: 'isSqrt',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is [NUM1] sqrt of [NUM2]?',
          arguments: {
            NUM1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 2
            },
            NUM2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 4
            }
          }
        }
      ]
    };
  }

  isFactorial(args) {
    let factorial = 1;
    for (let i = 1; i <= args.NUM2; i++) {
      factorial *= i;
    }
    return factorial === args.NUM1;
  }

  isLog(args) {
    return Math.log(args.NUM2) / Math.log(args.BASE) === args.NUM1;
  }

  isPrime(args) {
    if (args.NUM < 2) return false;
    for (let i = 2; i <= Math.sqrt(args.NUM); i++) {
      if (args.NUM % i === 0) return false;
    }
    return true;
  }

  isFibonacci(args) {
    const isPerfectSquare = (x) =>
      Number.isInteger(Math.sqrt(x)) && Math.sqrt(x) % 1 === 0;
    return (
      isPerfectSquare(5 * args.NUM ** 2 + 4) ||
      isPerfectSquare(5 * args.NUM ** 2 - 4)
    );
  }

  isPerfectSquare(args) {
    return Number.isInteger(Math.sqrt(args.NUM));
  }

  isPerfectCube(args) {
    return Number.isInteger(Math.cbrt(args.NUM));
  }

  isEven(args) {
    return args.NUM % 2 === 0;
  }

  isOdd(args) {
    return args.NUM % 2 !== 0;
  }

  isAbs(args) {
    return Math.abs(args.NUM2) === args.NUM1;
  }

  isCos(args) {
    return Math.cos(args.NUM2) === args.NUM1;
  }

  isTan(args) {
    return Math.tan(args.NUM2) === args.NUM1;
  }

  isSin(args) {
    return Math.sin(args.NUM2) === args.NUM1;
  }

  isSqrt(args) {
    return Math.sqrt(args.NUM2) === args.NUM1;
  }
}

Scratch.extensions.register(new FourndyMathComparisons());
