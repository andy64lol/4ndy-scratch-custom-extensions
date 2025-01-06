class FourndyCats {
  constructor() {
    this.catCount = 0;
    this.catsJokes = [
      "Why don't cats play poker in the jungle? Too many cheetahs!",
      "What do you call a pile of kittens? A meow-tain!",
      "Why was the cat sitting on the computer? Because it wanted to keep an eye on the mouse!",
      "What do cats like to eat for breakfast? Mice Krispies!"
    ];
    this.catsFacts = [
      "A group of cats is called a clowder.",
      "Cats sleep for 70% of their lives.",
      "A cat's nose is as unique as a human's fingerprint.",
      "Cats can rotate their ears 180 degrees."
    ];
    this.catMood = ["Happy", "Curious", "Sleepy", "Playful", "Grumpy"];
  }

  getInfo() {
    return {
      id: '4ndyCats',
      name: '4ndy Cats',
      color1: '#FF6347',
      color2: '#FF4500',
      color3: '#FFD700',
      blocks: [
        {
          opcode: 'getCatJoke',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Get a random cat joke',
          color1: '#FF6347',
          color2: '#FF4500',
          color3: '#FFD700'
        },
        {
          opcode: 'getCatFact',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Get a random cat fact',
          color1: '#FF6347',
          color2: '#FF4500',
          color3: '#FFD700'
        },
        {
          opcode: 'cat',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Increase the cat count by 1',
          color1: '#FF6347',
          color2: '#FF4500',
          color3: '#FFD700'
        },
        {
          opcode: 'catReporter',
          blockType: Scratch.BlockType.REPORTER,
          text: 'The current cat count is [CAT]',
          arguments: {
            CAT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            }
          },
          color1: '#FF6347',
          color2: '#FF4500',
          color3: '#FFD700'
        },
        {
          opcode: 'getCatMood',
          blockType: Scratch.BlockType.REPORTER,
          text: 'What is the cat\'s mood?',
          color1: '#FF6347',
          color2: '#FF4500',
          color3: '#FFD700'
        },
        {
          opcode: 'resetCatCount',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Reset the cat count to 0',
          color1: '#FF6347',
          color2: '#FF4500',
          color3: '#FFD700'
        },
        {
          opcode: 'setCatMood',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Set the cat\'s mood to [MOOD]',
          arguments: {
            MOOD: {
              type: Scratch.ArgumentType.STRING,
              menu: 'moods',
              defaultValue: 'Happy'
            }
          },
          color1: '#FF6347',
          color2: '#FF4500',
          color3: '#FFD700'
        },
        {
          opcode: 'incrementCatMoodCount',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Increment the [MOOD] mood count by 1',
          arguments: {
            MOOD: {
              type: Scratch.ArgumentType.STRING,
              menu: 'moods',
              defaultValue: 'Happy'
            }
          },
          color1: '#FF6347',
          color2: '#FF4500',
          color3: '#FFD700'
        }
      ],
      menus: {
        moods: this.catMood
      }
    };
  }

  getCatJoke() {
    const randomJoke = this.catsJokes[Math.floor(Math.random() * this.catsJokes.length)];
    return randomJoke;
  }

  getCatFact() {
    const randomFact = this.catsFacts[Math.floor(Math.random() * this.catsFacts.length)];
    return randomFact;
  }

  cat() {
    this.catCount += 1;
  }

  catReporter() {
    return this.catCount;
  }

  getCatMood() {
    const randomMood = this.catMood[Math.floor(Math.random() * this.catMood.length)];
    return randomMood;
  }

  resetCatCount() {
    this.catCount = 0;
  }

  setCatMood(args) {
    const { MOOD } = args;
    if (this.catMood.includes(MOOD)) {
      return `The cat's mood is now set to ${MOOD}.`;
    } else {
      return 'Invalid mood.';
    }
  }

  incrementCatMoodCount(args) {
    const { MOOD } = args;
    if (this.catMood.includes(MOOD)) {
      return `The ${MOOD} mood count is incremented.`;
    } else {
      return 'Invalid mood.';
    }
  }
}

Scratch.extensions.register(new FourndyCats());