class FourndyTimeAndDateUtilities {
  constructor() {}

  getInfo() {
    return {
      id: '4ndytimeanddateutils',
      name: '4ndy Time and Date Utilities',
      blocks: [
        {
          opcode: 'getCurrentHour',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Current hour'
        },
        {
          opcode: 'getCurrentMinute',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Current minute'
        },
        {
          opcode: 'getCurrentSecond',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Current second'
        },
        {
          opcode: 'getCurrentTimezone',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Current timezone'
        },
        {
          opcode: 'isTimezoneGMT',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is timezone GMT [OFFSET]?',
          arguments: {
            OFFSET: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            }
          }
        },
        {
          opcode: 'isDayOfWeek',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Day is [DAY]?',
          arguments: {
            DAY: {
              type: Scratch.ArgumentType.STRING,
              menu: 'daysOfWeek',
              defaultValue: 'Monday'
            }
          }
        },
        {
          opcode: 'getCurrentDayOfWeek',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Current day of week'
        },
        {
          opcode: 'getDayOfWeekForDate',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Day of the week for [DATE]',
          arguments: {
            DATE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '01/01/2026'
            }
          }
        },
        {
          opcode: 'getCurrentMonth',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Current month'
        },
        {
          opcode: 'getCurrentYear',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Current year'
        },
        {
          opcode: 'getCurrentSeason',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Current season'
        },
        {
          opcode: 'isTime',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is it [TIME]?',
          arguments: {
            TIME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '12:00:00'
            }
          }
        },
        {
          opcode: 'timeUntil',
          blockType: Scratch.BlockType.REPORTER,
          text: '[UNIT] left until [TIME]',
          arguments: {
            UNIT: {
              type: Scratch.ArgumentType.STRING,
              menu: 'timeUnits',
              defaultValue: 'minutes'
            },
            TIME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '12:00:00'
            }
          }
        },
        {
          opcode: 'daysUntil',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Days left until [DATE]',
          arguments: {
            DATE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '01/01/2026'
            }
          }
        },
        {
          opcode: 'monthsUntil',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Months left until [DATE]',
          arguments: {
            DATE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '01/01/2026'
            }
          }
        },
        {
          opcode: 'yearsUntil',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Years left until [DATE]',
          arguments: {
            DATE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '01/01/2030'
            }
          }
        }
      ],
      menus: {
        daysOfWeek: {
          acceptReporters: true,
          items: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
          ]
        },
        timeUnits: {
          acceptReporters: true,
          items: ['minutes', 'seconds', 'hours']
        }
      }
    };
  }

  getCurrentHour() {
    const now = new Date();
    return now.getHours().toString().padStart(2, '0');
  }

  getCurrentMinute() {
    const now = new Date();
    return now.getMinutes().toString().padStart(2, '0');
  }

  getCurrentSecond() {
    const now = new Date();
    return now.getSeconds().toString().padStart(2, '0');
  }

  getCurrentTimezone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  isTimezoneGMT(args) {
    const offset = -new Date().getTimezoneOffset() / 60;
    return offset === args.OFFSET;
  }

  isDayOfWeek(args) {
    const now = new Date();
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });
    return currentDay.toLowerCase() === args.DAY.toLowerCase();
  }

  getCurrentDayOfWeek() {
    const now = new Date();
    return now.toLocaleDateString('en-US', { weekday: 'long' });
  }

  getDayOfWeekForDate(args) {
    const dateParts = args.DATE.split('/');
    const targetDate = new Date(
      dateParts[2],
      dateParts[1] - 1,
      dateParts[0]
    );
    return targetDate.toLocaleDateString('en-US', { weekday: 'long' });
  }

  getCurrentMonth() {
    const now = new Date();
    return now.toLocaleDateString('en-US', { month: 'long' });
  }

  getCurrentYear() {
    const now = new Date();
    return now.getFullYear();
  }

  getCurrentSeason() {
    const now = new Date();
    const month = now.getMonth();
    if (month < 2 || month === 11) return 'Winter';
    if (month < 5) return 'Spring';
    if (month < 8) return 'Summer';
    return 'Fall';
  }

  isTime(args) {
    const now = new Date();
    const [hour, minute, second] = args.TIME.split(':').map(Number);
    return (
      now.getHours() === hour &&
      now.getMinutes() === minute &&
      now.getSeconds() === second
    );
  }

  timeUntil(args) {
    const now = new Date();
    const [hour, minute, second] = args.TIME.split(':').map(Number);
    const target = new Date();
    target.setHours(hour, minute, second, 0);

    if (target < now) target.setDate(target.getDate() + 1);

    const diff = target - now;
    if (args.UNIT === 'seconds') return Math.floor(diff / 1000);
    if (args.UNIT === 'minutes') return Math.floor(diff / 1000 / 60);
    if (args.UNIT === 'hours') return Math.floor(diff / 1000 / 60 / 60);
    return 0;
  }

  daysUntil(args) {
    const now = new Date();
    const [day, month, year] = args.DATE.split('/').map(Number);
    const target = new Date(year, month - 1, day);
    const diff = target - now;
    return Math.ceil(diff / 1000 / 60 / 60 / 24);
  }

  monthsUntil(args) {
    const now = new Date();
    const [day, month, year] = args.DATE.split('/').map(Number);
    const target = new Date(year, month - 1, day);
    return (
      target.getFullYear() * 12 +
      target.getMonth() -
      (now.getFullYear() * 12 + now.getMonth())
    );
  }

  yearsUntil(args) {
    const now = new Date();
    const [day, month, year] = args.DATE.split('/').map(Number);
    const target = new Date(year, month - 1, day);
    return target.getFullYear() - now.getFullYear();
  }
}

Scratch.extensions.register(new FourndyTimeAndDateUtilities());
