class FourndyPopUps {
  constructor() {
    this.popUpMessage = '';
    this.popUpTitle = '4ndyPopUps';
    this.popUpCount = 0;
    this.popUps = [];
  }

  getInfo() {
    return {
      id: '4ndyPopUps',
      name: '4ndy PopUps',
      color1: '#000000',
      color2: '#333333',
      color3: '#555555',
      blocks: [
        {
          opcode: 'createPopUp',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Create a pop-up with title [TITLE] and message [MESSAGE]',
          arguments: {
            TITLE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '4ndyPopUps Title'
            },
            MESSAGE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello, this is a pop-up!'
            }
          },
        },
        {
          opcode: 'createHTMLPopUp',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Create a pop-up with title [TITLE] and HTML content [HTML]',
          arguments: {
            TITLE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '4ndyPopUps Title'
            },
            HTML: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '<a href="https://example.com" target="_blank">Click Here</a>'
            }
          },
        },
        {
          opcode: 'getPopUpCount',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Number of pop-ups created'
        },
        {
          opcode: 'resetPopUpCount',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Reset pop-up count'
        },
        {
          opcode: 'deleteAllPopUps',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Delete all pop-ups'
        }
      ]
    };
  }

  createPopUp(args) {
    const { TITLE, MESSAGE } = args;
    this.popUpMessage = MESSAGE;
    this.popUpTitle = TITLE;
    this.popUpCount += 1;

    const popUp = window.open('', '_blank', 'width=400,height=300');
    this.popUps.push(popUp);
    popUp.document.write(`<html><head><title>${TITLE}</title></head><body><h1>${TITLE}</h1><p>${MESSAGE}</p></body></html>`);
    popUp.document.close();
  }

  createHTMLPopUp(args) {
    const { TITLE, HTML } = args;
    this.popUpCount += 1;

    const popUp = window.open('', '_blank', 'width=400,height=300');
    this.popUps.push(popUp);
    popUp.document.write(`<html><head><title>${TITLE}</title></head><body><h1>${TITLE}</h1>${HTML}</body></html>`);
    popUp.document.close();
  }

  getPopUpCount() {
    return this.popUpCount;
  }

  resetPopUpCount() {
    this.popUpCount = 0;
  }

  deleteAllPopUps() {
    for (const popUp of this.popUps) {
      if (popUp && !popUp.closed) {
        popUp.close();
      }
    }
    this.popUps = [];
    this.popUpCount = 0;
  }
}

Scratch.extensions.register(new FourndyPopUps());