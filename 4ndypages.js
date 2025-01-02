class FourndyPagesExtension {
  constructor() {
    this.history = [];
  }

  getInfo() {
    return {
      id: '4ndypages',
      name: '4ndy pages',
      blocks: [
        {
          opcode: 'openPageInNewTab',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Open page [URL] in new tab',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://www.example.com'
            }
          }
        },
        {
          opcode: 'openPageInCurrentTab',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Open page [URL] in current tab',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://www.example.com'
            }
          }
        },
        {
          opcode: 'isValidURL',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is [URL] a valid URL?',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://www.example.com'
            }
          }
        },
        {
          opcode: 'isHttpURL',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Does [URL] start with "http"?',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://www.example.com'
            }
          }
        },
        {
          opcode: 'isHttpsURL',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is [URL] entrusted with "https"?',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://www.example.com'
            }
          }
        },
        {
          opcode: 'containsDomain',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Does [URL] contain a domain name?',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://www.example.com'
            }
          }
        },
        {
          opcode: 'openPageWithDelay',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Open page [URL] in new tab after [DELAY] seconds',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://www.example.com'
            },
            DELAY: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 3
            }
          }
        },
        {
          opcode: 'openRandomPage',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Open a random page from the list',
          arguments: {}
        },
        {
          opcode: 'openHistory',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Open last visited page',
          arguments: {}
        },
        {
          opcode: 'addToHistory',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Add [URL] to history',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://www.example.com'
            }
          }
        },
        {
          opcode: 'clearHistory',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Clear browsing history',
          arguments: {}
        },
        {
          opcode: 'displayHistory',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Display search history on a new page',
          arguments: {}
        }
      ]
    };
  }

  openPageInNewTab(args) {
    const currentTime = new Date().toLocaleString();
    window.open(args.URL, '_blank');
    this.addToHistory({ URL: args.URL, time: currentTime });
  }

  openPageInCurrentTab(args) {
    const currentTime = new Date().toLocaleString();
    window.location.href = args.URL;
    this.addToHistory({ URL: args.URL, time: currentTime });
  }

  isValidURL(args) {
    const pattern = /^(https?:\/\/)?([a-zA-Z0-9.-]+)(\.[a-zA-Z]{2,})$/;
    return pattern.test(args.URL);
  }

  isHttpURL(args) {
    return /^http:\/\//i.test(args.URL);
  }

  isHttpsURL(args) {
    return /^https:\/\//i.test(args.URL);
  }

  containsDomain(args) {
    const domainPattern = /([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;
    return domainPattern.test(args.URL);
  }

  openPageWithDelay(args) {
    const currentTime = new Date().toLocaleString();
    setTimeout(() => {
      window.open(args.URL, '_blank');
      this.addToHistory({ URL: args.URL, time: currentTime });
    }, args.DELAY * 1000);
  }

  openRandomPage() {
    const pages = [
      'https://www.example.com',
      'https://www.wikipedia.org',
      'https://www.google.com',
      'https://www.github.com'
    ];
    const randomPage = pages[Math.floor(Math.random() * pages.length)];
    const currentTime = new Date().toLocaleString();
    window.open(randomPage, '_blank');
    this.addToHistory({ URL: randomPage, time: currentTime });
  }

  openHistory() {
    const lastVisited = this.history[this.history.length - 1];
    if (lastVisited) {
      window.open(lastVisited.URL, '_blank');
    } else {
      console.log('No history available');
    }
  }

  addToHistory(args) {
    this.history.push(args);
    if (this.history.length > 10) {
      this.history.shift();
    }
  }

  clearHistory() {
    this.history = [];
  }

  displayHistory() {
    const historyPage = document.createElement('html');
    const head = document.createElement('head');
    const title = document.createElement('title');
    title.textContent = 'Search History';
    head.appendChild(title);

    const body = document.createElement('body');
    body.innerHTML = '<h1>Search History</h1>';

    this.history.forEach((entry, index) => {
      const historyItem = document.createElement('p');
      historyItem.textContent = `${index + 1}. ${entry.URL} - Opened at: ${entry.time}`;
      body.appendChild(historyItem);
    });

    historyPage.appendChild(head);
    historyPage.appendChild(body);

    const newWindow = window.open();
    newWindow.document.write(historyPage.outerHTML);
  }
}

Scratch.extensions.register(new FourndyPagesExtension());
