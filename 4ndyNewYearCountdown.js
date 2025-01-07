class FourndyNewYearCountdown {
  constructor() {
    this.nextYear = new Date().getFullYear() + 1;
    this.countdownDate = new Date(`January 1, ${this.nextYear} 00:00:00`).getTime();
  }

  getInfo() {
    return {
      id: '4ndyNewYearCountdown',
      name: '4ndy New Year Countdown',
      color1: '#8B0000',
      color2: '#B22222',
      color3: '#FF4500',
      blocks: [
        {
          opcode: 'timeRemaining',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Time remaining until New Year',
          arguments: {}
        },
        {
          opcode: 'isNewYear',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is it New Year?',
          arguments: {}
        },
        {
          opcode: 'nextYearValue',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Next year',
          arguments: {}
        }
      ]
    };
  }

  timeRemaining() {
    const now = new Date().getTime();
    const distance = this.countdownDate - now;
    if (distance <= 0) return 'Happy New Year!';

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }

  isNewYear() {
    const today = new Date();
    return today.getMonth() === 0 && today.getDate() === 1;
  }

  nextYearValue() {
    return this.nextYear;
  }
}

Scratch.extensions.register(new FourndyNewYearCountdown());
