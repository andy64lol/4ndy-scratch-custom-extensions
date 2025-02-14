class FourndyRandomToolsZeroZeroOne {
  constructor() {
    this.lastResult = null;
  }

  getInfo() {
    return {
      id: 'fourndyRandomToolszerozeroone',
      name: '4ndy Random Tools 001',
      color1: '#FF4500',
      color2: '#FF6347',
      color3: '#FF8C00',
      blocks: [
        {
          opcode: 'rpmToHz',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Convert RPM [RPM] to Hertz',
          arguments: { RPM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 60 } }
        },
        {
          opcode: 'randomNumber',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Generate random number from [MIN] to [MAX]',
          arguments: {
            MIN: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
            MAX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 }
          }
        },
        {
          opcode: 'bananasToGrams',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Convert [BANANAS] bananas to grams',
          arguments: { BANANAS: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 } }
        },
        {
          opcode: 'randomEmoji',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Get a random emoji',
          arguments: {}
        },
        {
          opcode: 'flipCoin',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Flip a coin',
          arguments: {}
        },
        {
          opcode: 'rollDice',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Roll a 6-sided dice',
          arguments: {}
        },
        {
          opcode: 'pickRandomColor',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Pick a random color',
          arguments: {}
        },
        {
          opcode: 'magic8Ball',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Ask the Magic 8-Ball',
          arguments: {}
        }
      ]
    };
  }

  rpmToHz(args) {
    const rpm = Number(args.RPM);
    return isNaN(rpm) ? "Invalid input" : rpm / 60;
  }

  randomNumber(args) {
    const min = Number(args.MIN);
    const max = Number(args.MAX);
    if (isNaN(min) || isNaN(max) || min > max) return "Invalid input";
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  bananasToGrams(args) {
    const bananas = Number(args.BANANAS);
    return isNaN(bananas) ? "Invalid input" : bananas * 118;
  }

  randomEmoji() {
    const emojis = ['😀', '😂', '🤖', '🐱', '🚀', '🌍', '🎸', '🎮', '🍕', '☕'];
    return emojis[Math.floor(Math.random() * emojis.length)];
  }

  flipCoin() {
    return Math.random() < 0.5 ? 'Heads' : 'Tails';
  }

  rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  pickRandomColor() {
    const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink', 'Black', 'White'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  magic8Ball() {
    const responses = [
      'Yes', 'No', 'Maybe', 'Ask again later', 'Definitely', 'Not sure', 'Absolutely', 'I doubt it'
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
}

Scratch.extensions.register(new FourndyRandomToolsZeroZeroOne());
