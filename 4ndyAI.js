class FourndyAI {
  constructor() {
    this.lastResponse = '';
  }

  getInfo() {
    return {
      id: '4ndyAI',
      name: '4ndy AI',
      color1: '#34B7F1', // ChatGPT primary blue
      color2: '#5C9CD6', // ChatGPT secondary blue
      color3: '#3A7CA5', // Darker blue
      blocks: [
        {
          opcode: 'setApiKey',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Set OpenAI API key to [KEY]',
          arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'sk-...'
            }
          }
        },
        {
          opcode: 'askAI',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Ask AI: [PROMPT]',
          arguments: {
            PROMPT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Write a short story about a robot cat.'
            }
          }
        },
        {
          opcode: 'getLastResponse',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Last AI response'
        }
      ]
    };
  }

  setApiKey(args) {
    this.apiKey = args.KEY;
  }

  async askAI(args) {
    const { PROMPT } = args;

    if (!this.apiKey) {
      return 'Error: API key not set!';
    }

    const body = {
      model: 'text-davinci-003',
      prompt: PROMPT,
      max_tokens: 100,
      temperature: 0.7
    };

    try {
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify(body)
      });

      const data = await response.json();

      if (data.choices && data.choices.length > 0) {
        this.lastResponse = data.choices[0].text.trim();
        return this.lastResponse;
      } else {
        this.lastResponse = 'No response from AI.';
        return this.lastResponse;
      }
    } catch (error) {
      this.lastResponse = `Error: ${error.message}`;
      return this.lastResponse;
    }
  }

  getLastResponse() {
    return this.lastResponse;
  }
}

Scratch.extensions.register(new FourndyAI());