class FourndyFetch {
  constructor() {
    this.lastResponse = '';
    this.lastStatusCode = 0;
  }

  getInfo() {
    return {
      id: '4ndyFetch',
      name: '4ndy Fetch',
      color1: '#b3cee5',
      color2: '#91b8d8',
      color3: '#729ec6',
      blocks: [
        {
          opcode: 'sendGetRequest',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Send GET request to [URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://api.example.com/data'
            }
          },
        },
        {
          opcode: 'sendPostRequest',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Send POST request to [URL] with body [BODY]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://api.example.com/data'
            },
            BODY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{"key": "value"}'
            }
          },
        },
        {
          opcode: 'getLastResponse',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Last response'
        },
        {
          opcode: 'getLastStatusCode',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Last status code'
        }
      ]
    };
  }

  async sendGetRequest(args) {
    const { URL } = args;

    try {
      const response = await fetch(URL);
      this.lastStatusCode = response.status;
      this.lastResponse = await response.text();
    } catch (error) {
      this.lastResponse = `Error: ${error.message}`;
      this.lastStatusCode = 0;
    }
  }

  async sendPostRequest(args) {
    const { URL, BODY } = args;

    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: BODY
      });
      this.lastStatusCode = response.status;
      this.lastResponse = await response.text();
    } catch (error) {
      this.lastResponse = `Error: ${error.message}`;
      this.lastStatusCode = 0;
    }
  }

  getLastResponse() {
    return this.lastResponse;
  }

  getLastStatusCode() {
    return this.lastStatusCode;
  }
}

Scratch.extensions.register(new FourndyFetch());