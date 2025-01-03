class NormalUtilityExtension {
  constructor() {
    this.activityLog = [];
  }

  getInfo() {
    return {
      id: 'normalUtility',
      name: '4ndy Normal sussy stuff',
      blocks: [
        {
          opcode: 'processText',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Process [TEXT] normally',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'This is some regular text.'
            }
          }
        },
        {
          opcode: 'processNumber',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Process [NUMBER] normally',
          arguments: {
            NUMBER: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 42
            }
          }
        },
        {
          opcode: 'processBoolean',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Process [BOOLEAN] normally',
          arguments: {
            BOOLEAN: {
              type: Scratch.ArgumentType.BOOLEAN,
              defaultValue: true
            }
          }
        },
        {
          opcode: 'performAction',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Perform normal action',
          arguments: {}
        },
        {
          opcode: 'redirectToReference',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Open reference page',
          arguments: {}
        },
        {
          opcode: 'generateMemeText',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Generate normal meme for [TEXT]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Everything is fine.'
            }
          }
        },
        {
          opcode: 'processColor',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Identify color of [COLOR]',
          arguments: {
            COLOR: {
              type: Scratch.ArgumentType.COLOR,
              defaultValue: '#808080'
            }
          }
        },
        {
          opcode: 'fixWire',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Fix wire [WIRE_NUMBER]',
          arguments: {
            WIRE_NUMBER: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        },
        {
          opcode: 'reportObservation',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Report observation at [LOCATION]',
          arguments: {
            LOCATION: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'central room'
            }
          }
        },
        {
          opcode: 'createLoopingWindows',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Perform infinite routine (DON\'T EVER TOUCH THIS)',
          arguments: {}
        },
        {
          opcode: 'scanRoom',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Scan room for anomalies',
          arguments: {
            ROOM: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'storage'
            }
          }
        },
        {
          opcode: 'ventAction',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Use ventilation system at [LOCATION]',
          arguments: {
            LOCATION: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'reactor'
            }
          }
        },
        {
          opcode: 'inspectCrewmate',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Inspect crewmate at [POSITION]',
          arguments: {
            POSITION: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'control room'
            }
          }
        },
        {
          opcode: 'sabotageSystem',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Initiate system overload at [SYSTEM]',
          arguments: {
            SYSTEM: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'communications'
            }
          }
        }
      ]
    };
  }

  processText(args) {
    return `NORMAL: ${args.TEXT}... Looks quite usual.`;
  }

  processNumber(args) {
    return `${args.NUMBER} is just a number, nothing more.`;
  }

  processBoolean(args) {
    return args.BOOLEAN ? 'This is true, as expected.' : 'This is false, as expected.';
  }

  performAction() {
    console.log("All actions performed as planned.");
    alert("Routine operations completed.");
    this.activityLog.push("Routine action performed.");
  }

  redirectToReference() {
    window.location.href = 'https://es.wikipedia.org/wiki/Among_Us';
  }

  generateMemeText(args) {
    const memeTemplates = [
      "Everything is perfectly fine.",
      "No need for concern—just a routine operation.",
      "Proceed with normal procedures.",
      "Everything checks out. Move along.",
      "Everything here is normal.",
      "Nothing is strange here."
    ];
    const randomMeme = memeTemplates[Math.floor(Math.random() * memeTemplates.length)];
    return `${args.TEXT}... ${randomMeme}`;
  }

  processColor(args) {
    return `Color ${args.COLOR} detected. Everything seems in order.`;
  }

  fixWire(args) {
    console.log(`Wire ${args.WIRE_NUMBER} fixed with no issues.`);
    alert(`Wire ${args.WIRE_NUMBER} was repaired successfully.`);
    this.activityLog.push(`Wire ${args.WIRE_NUMBER} fixed.`);
  }

  reportObservation(args) {
    console.log(`Observation reported at ${args.LOCATION}. Nothing unusual found.`);
    alert(`Observation noted at ${args.LOCATION}. All seems normal.`);
    this.activityLog.push(`Observation at ${args.LOCATION} reported.`);
  }

  createLoopingWindows() {
    const confirmation = confirm("Ready for reactor meltdown?\n[Yes] or [*RUNNNN*]");
    if (!confirmation) return;
    while (true) {
      const newWindow = window.open('', '', `width=200,height=100,left=${Math.random() * window.screen.width},top=${Math.random() * window.screen.height}`);
      newWindow.document.write('<p style="font-size:20px;">SUS</p>');
    }
  }

  scanRoom(args) {
    console.log(`Scanning room: ${args.ROOM}. No anomalies detected.`);
    alert(`Room ${args.ROOM} appears secure.`);
    this.activityLog.push(`Scanned room: ${args.ROOM}.`);
  }

  ventAction(args) {
    console.log(`Vent accessed at ${args.LOCATION}. Nothing suspicious.`);
    alert(`Ventilation system used at ${args.LOCATION}. Proceeding as normal.`);
    this.activityLog.push(`Vent used at ${args.LOCATION}.`);
  }

  inspectCrewmate(args) {
    return `Crewmate at ${args.POSITION} looks perfectly trustworthy.`;
  }

  sabotageSystem(args) {
    console.log(`System ${args.SYSTEM} overloaded. Please resolve immediately.`);
    alert(`Warning: System overload initiated in ${args.SYSTEM}!`);
    this.activityLog.push(`System overload at ${args.SYSTEM}.`);
  }
}

Scratch.extensions.register(new NormalUtilityExtension());
  
