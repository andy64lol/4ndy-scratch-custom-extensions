class SusExtension {
  constructor() {
    this.history = [];
  }

  getInfo() {
    return {
      id: 'susExtension',
      name: 'Sus Extension',
      blocks: [
        {
          opcode: 'susifyText',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Make [TEXT] sus',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'This is totally normal.'
            }
          }
        },
        {
          opcode: 'susifyNumber',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Make [NUMBER] sus',
          arguments: {
            NUMBER: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 10
            }
          }
        },
        {
          opcode: 'susifyBoolean',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Make [BOOLEAN] sus',
          arguments: {
            BOOLEAN: {
              type: Scratch.ArgumentType.BOOLEAN,
              defaultValue: true
            }
          }
        },
        {
          opcode: 'SUS',
          blockType: Scratch.BlockType.COMMAND,
          text: 'SUSIFY EVERYTHING!',
          arguments: {}
        }
      ]
    };
  }

  susifyText(args) {
    return `SUS: ${args.TEXT}... Hmm... suspicious... 🤨`;
  }

  susifyNumber(args) {
    return `${args.NUMBER} SUS... wait... that number looks weird...`;
  }

  susifyBoolean(args) {
    return args.BOOLEAN ? 'SUS... this is definitely suspicious.' : 'Not sus... or is it...?';
  }

  SUS() {
    console.log("⚠️ EVERYTHING IS NOW SUS! ⚠️");
    alert("⚠️ EVERYTHING IS NOW SUS! ⚠️");
    this.history.push("SUSIFIED EVERYTHING!");
  }
}

Scratch.extensions.register(new SusExtension());
