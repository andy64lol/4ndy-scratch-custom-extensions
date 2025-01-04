class FourndyMeasurementsConversions {
  getInfo() {
    return {
      id: '4ndyMeasurementsConversions',
      name: '4ndy Measurements Conversions',
      color1: '#808080',
      blocks: [
        {
          opcode: 'distanceConvert',
          blockType: Scratch.BlockType.REPORTER,
          text: '[VALUE] [FROM] To [TO]',
          arguments: {
            VALUE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            },
            FROM: {
              type: Scratch.ArgumentType.STRING,
              menu: 'distanceMenu',
              defaultValue: 'km'
            },
            TO: {
              type: Scratch.ArgumentType.STRING,
              menu: 'distanceMenu',
              defaultValue: 'm'
            }
          },
          color1: '#808080',
          color2: '#999999',
          color3: '#666666'
        },
        {
          opcode: 'massConvert',
          blockType: Scratch.BlockType.REPORTER,
          text: '[VALUE] [FROM] To [TO]',
          arguments: {
            VALUE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            },
            FROM: {
              type: Scratch.ArgumentType.STRING,
              menu: 'massMenu',
              defaultValue: 'kg'
            },
            TO: {
              type: Scratch.ArgumentType.STRING,
              menu: 'massMenu',
              defaultValue: 'g'
            }
          },
          color1: '#808080',
          color2: '#999999',
          color3: '#666666'
        },
        {
          opcode: 'temperatureConvert',
          blockType: Scratch.BlockType.REPORTER,
          text: '[VALUE] [FROM] To [TO]',
          arguments: {
            VALUE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            },
            FROM: {
              type: Scratch.ArgumentType.STRING,
              menu: 'temperatureMenu',
              defaultValue: 'C°'
            },
            TO: {
              type: Scratch.ArgumentType.STRING,
              menu: 'temperatureMenu',
              defaultValue: 'F°'
            }
          },
          color1: '#808080',
          color2: '#999999',
          color3: '#666666'
        },
        {
          opcode: 'speedConvert',
          blockType: Scratch.BlockType.REPORTER,
          text: '[VALUE] [FROM] To [TO]',
          arguments: {
            VALUE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            },
            FROM: {
              type: Scratch.ArgumentType.STRING,
              menu: 'speedMenu',
              defaultValue: 'km/h'
            },
            TO: {
              type: Scratch.ArgumentType.STRING,
              menu: 'speedMenu',
              defaultValue: 'm/s'
            }
          },
          color1: '#808080',
          color2: '#999999',
          color3: '#666666'
        },
        {
          opcode: 'volumeConvert',
          blockType: Scratch.BlockType.REPORTER,
          text: '[VALUE] [FROM] To [TO]',
          arguments: {
            VALUE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            },
            FROM: {
              type: Scratch.ArgumentType.STRING,
              menu: 'volumeMenu',
              defaultValue: 'ml'
            },
            TO: {
              type: Scratch.ArgumentType.STRING,
              menu: 'volumeMenu',
              defaultValue: 'l'
            }
          },
          color1: '#808080',
          color2: '#999999',
          color3: '#666666'
        }
      ],
      menus: {
        distanceMenu: ['mm', 'cm', 'm', 'km', 'in', 'yd', 'mi'],
        massMenu: ['g', 'kg', 'Mg'],
        temperatureMenu: ['C°', 'F°', 'K°'],
        speedMenu: ['m/s', 'km/h', 'kt', 'mi/h'],
        volumeMenu: ['ml', 'l', 'm³', 'cm³', 'ft³', 'kl', 'km³', 'mm³']
      }
    };
  }

  distanceConvert(args) {
    const value = args.VALUE;
    const from = args.FROM;
    const to = args.TO;

    if (from === to) return value;

    const conversions = {
      'mm': 0.001,
      'cm': 0.01,
      'm': 1,
      'km': 1000,
      'in': 0.0254,
      'yd': 0.9144,
      'mi': 1609.34
    };

    return value * (conversions[to] / conversions[from]);
  }

  massConvert(args) {
    const value = args.VALUE;
    const from = args.FROM;
    const to = args.TO;

    if (from === to) return value;

    const conversions = {
      'g': 0.001,
      'kg': 1,
      'Mg': 1000
    };

    return value * (conversions[to] / conversions[from]);
  }

  temperatureConvert(args) {
    const value = args.VALUE;
    const from = args.FROM;
    const to = args.TO;

    if (from === to) return value;

    if (from === 'C°' && to === 'F°') return (value * 9/5) + 32;
    if (from === 'C°' && to === 'K°') return value + 273.15;
    if (from === 'F°' && to === 'C°') return (value - 32) * 5/9;
    if (from === 'F°' && to === 'K°') return (value - 32) * 5/9 + 273.15;
    if (from === 'K°' && to === 'C°') return value - 273.15;
    if (from === 'K°' && to === 'F°') return (value - 273.15) * 9/5 + 32;

    return value;
  }

  speedConvert(args) {
    const value = args.VALUE;
    const from = args.FROM;
    const to = args.TO;

    if (from === to) return value;

    const conversions = {
      'm/s': 1,
      'km/h': 0.277778,
      'kt': 0.514444,
      'mi/h': 0.44704
    };

    return value * (conversions[to] / conversions[from]);
  }

  volumeConvert(args) {
    const value = args.VALUE;
    const from = args.FROM;
    const to = args.TO;

    if (from === to) return value;

    const conversions = {
      'ml': 1,
      'l': 1000,
      'm³': 1000000,
      'cm³': 1,
      'ft³': 28.3168,
      'kl': 1000000,
      'km³': 1e12,
      'mm³': 1e-9
    };

    return value * (conversions[to] / conversions[from]);
  }
}

Scratch.extensions.register(new FourndyMeasurementsConversions());