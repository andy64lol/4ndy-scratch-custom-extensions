class FourndyEvents {
  getInfo() {
    return {
      id: '4ndyEvents',
      name: '4ndy Events',
      color1: '#FFB81C',
      blocks: [
        {
          opcode: 'whenBoolean',
          blockType: Scratch.BlockType.HAT,
          text: 'When [CONDITION]',
          arguments: {
            CONDITION: {
              type: Scratch.ArgumentType.BOOLEAN,
              defaultValue: true
            }
          },
          color1: '#FFB81C',
          color2: '#FFDD5B',
          color3: '#F19C42'
        },
        {
          opcode: 'whenCloneCreated',
          blockType: Scratch.BlockType.HAT,
          text: 'When a clone is created',
          arguments: {},
          color1: '#FFB81C',
          color2: '#FFDD5B',
          color3: '#F19C42'
        }
      ]
    };
  }

  whenBoolean(args) {
    return args.CONDITION;
  }

  whenCloneCreated() {
    console.log('A clone has been created!');
    return true;
  }
}

Scratch.extensions.register(new FourndyEvents());