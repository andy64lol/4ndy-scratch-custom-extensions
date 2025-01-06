class FourndyNotificationSystem {
  constructor() {
    this.activeNotifications = [];
    this.lastAnswer = 'No answer';
  }

  getInfo() {
    return {
      id: '4ndyQuestionUtilities',
      name: '4ndyQuestionUtilities',
      blocks: [
        {
          opcode: 'askQuestion',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Ask a question with [MESSAGE]',
          arguments: {
            MESSAGE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'What is your name?'
            }
          }
        },
        {
          opcode: 'askTimedQuestion',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Ask a timed question with [MESSAGE] for [SECONDS] seconds',
          arguments: {
            MESSAGE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'What is your name?'
            },
            SECONDS: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5
            }
          }
        },
        {
          opcode: 'getLastAnswer',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Last answer',
          arguments: {}
        },
        {
          opcode: 'getLastQuestion',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Last question asked',
          arguments: {}
        }
      ]
    };
  }

  askQuestion(args) {
    this.displayMessageToBeAnswered(args.MESSAGE);
  }

  askTimedQuestion(args) {
    this.displayMessageToBeAnswered(args.MESSAGE, args.SECONDS);
  }

  getLastAnswer() {
    return this.lastAnswer;
  }

  getLastQuestion() {
    return this.activeNotifications.length > 0 ? this.activeNotifications[this.activeNotifications.length - 1] : 'No questions asked';
  }

  displayMessageToBeAnswered(message, timeout) {
    const modal = document.createElement('div');
    modal.className = 'notification-modal';
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = '#333333';
    modal.style.padding = '20px';
    modal.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.7)';
    modal.style.zIndex = '9999';
    modal.style.maxWidth = '300px';
    modal.style.borderRadius = '10px';
    modal.style.border = '3px solid #880000';

    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageElement.style.color = '#FFCCCC';
    modal.appendChild(messageElement);

    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.placeholder = 'Type your answer...';
    inputElement.style.backgroundColor = '#444444';
    inputElement.style.color = '#FFFFFF';
    inputElement.style.border = '1px solid #880000';
    inputElement.style.padding = '5px';
    modal.appendChild(inputElement);

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.style.marginTop = '10px';
    submitButton.style.backgroundColor = '#990000';
    submitButton.style.color = 'white';
    submitButton.style.border = 'none';
    submitButton.style.padding = '10px';
    submitButton.style.cursor = 'pointer';

    submitButton.onclick = () => {
      this.lastAnswer = inputElement.value || 'No answer';
      this.activeNotifications.push(message);
      document.body.removeChild(modal);
    };

    modal.appendChild(submitButton);
    document.body.appendChild(modal);

    if (timeout) {
      setTimeout(() => {
        if (document.body.contains(modal)) {
          document.body.removeChild(modal);
          this.lastAnswer = 'No answer';
        }
      }, timeout * 1000);
    }
  }
}

Scratch.extensions.register(new FourndyNotificationSystem());
