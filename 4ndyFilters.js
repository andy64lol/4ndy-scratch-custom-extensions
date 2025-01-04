class FourndyFilters {
  constructor() {
    this.apiUrl = 'https://www.purgomalum.com/service/json';
  }

  async detectLanguage(message) {
    try {
      const response = await fetch(`https://api.detectlanguage.com/0.2/detect?q=${encodeURIComponent(message)}`, {
        headers: {
          'Authorization': 'Bearer YOUR_API_KEY' // Make sure to replace with actual API key
        }
      });
      const data = await response.json();
      if (data && data.data && data.data.detections && data.data.detections.length > 0) {
        return data.data.detections[0].language;
      }
      return 'en'; // default to English if no language is detected
    } catch (error) {
      console.error('Language detection failed:', error);
      return 'en'; // default to English in case of failure
    }
  }

  async translateMessage(message, targetLang = 'en') {
    try {
      const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(message)}&langpair=auto|${targetLang}`, {
        headers: {
          'X-RapidAPI-Key': '8cb9e694bceb7b0f5b16badfa802ecad' // Ensure your API key is correct
        }
      });
      const data = await response.json();
      if (data && data.responseData && data.responseData.translatedText) {
        return data.responseData.translatedText;
      }
      return message; // return original message if translation fails
    } catch (error) {
      console.error('Translation failed:', error);
      return message; // return original message in case of failure
    }
  }

  async fetchBadWords() {
    try {
      const response = await fetch('https://raw.githubusercontent.com/andy64lol/improved-doodle/refs/heads/main/librarybadwords.json');
      const data = await response.json();
      return data || { badWordsList: [], regexList: [] }; // return empty lists if data is invalid
    } catch (error) {
      console.error('Failed to fetch bad words:', error);
      return { badWordsList: [], regexList: [] }; // return empty lists in case of failure
    }
  }

  async processMessage(args) {
    const originalMessage = args.MESSAGE;
    let message = originalMessage;

    // Translate to English first
    message = await this.translateMessage(originalMessage, 'en');

    // Fetch bad words list and regex
    const { badWordsList, regexList } = await this.fetchBadWords();

    let filteredMessage = message;

    // Filter bad words
    badWordsList.forEach(word => {
      const wordRegex = new RegExp(`\\b${word}\\b`, 'gi');
      filteredMessage = filteredMessage.replace(wordRegex, '****');
    });

    // Filter regex patterns
    regexList.forEach(regex => {
      filteredMessage = filteredMessage.replace(new RegExp(regex, 'gi'), '****');
    });

    // Detect original language
    const detectedLanguage = await this.detectLanguage(originalMessage);
    if (detectedLanguage !== 'en') {
      filteredMessage = await this.translateMessage(filteredMessage, detectedLanguage);
    }

    return filteredMessage;
  }

  getInfo() {
    return {
      id: '4ndyFilters',
      name: '4ndy Filters',
      blocks: [
        {
          opcode: 'processMessage',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Process message [MESSAGE]',
          arguments: {
            MESSAGE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello, you are stupid'
            }
          }
        }
      ]
    };
  }
}

Scratch.extensions.register(new FourndyFilters());
