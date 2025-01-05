class FourndyJSON {
  constructor() {
    this.latestUploadedFile = null;
    this.latestFileContent = '';
    this.latestFileSizeMB = 0;
    this.fileUploaded = false;
    this.uploadTimestamp = null;
  }

  getInfo() {
    return {
      id: '4ndyJSON',
      name: '4ndy JSON',
      color1: '#9b4d99',  // Dark magenta
      color2: '#a957a9',
      color3: '#bb6da0',
      blocks: [
        {
          opcode: 'createJSONFile',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Create a JSON file named [NAME] with the content [CONTENT]',
          arguments: {
            NAME: { type: Scratch.ArgumentType.STRING, defaultValue: 'example' },
            CONTENT: { type: Scratch.ArgumentType.STRING, defaultValue: '{"key":"value"}' },
          },
          color1: '#9b4d99',
          color2: '#a957a9',
          color3: '#bb6da0'
        },
        {
          opcode: 'importJSONFile',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Import JSON file',
          color1: '#9b4d99',
          color2: '#a957a9',
          color3: '#bb6da0'
        },
        {
          opcode: 'parseJSONFile',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Parse the content of the JSON file',
          color1: '#9b4d99',
          color2: '#a957a9',
          color3: '#bb6da0'
        },
        {
          opcode: 'fileIsUploaded',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is a JSON file uploaded?',
          color1: '#9b4d99',
          color2: '#a957a9',
          color3: '#bb6da0'
        },
        {
          opcode: 'fileIsDownloaded',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is a JSON file downloaded?',
          color1: '#9b4d99',
          color2: '#a957a9',
          color3: '#bb6da0'
        },
        {
          opcode: 'deleteFile',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Delete the uploaded JSON file',
          color1: '#9b4d99',
          color2: '#a957a9',
          color3: '#bb6da0'
        },
        {
          opcode: 'clearFileData',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Clear JSON file data (uploaded and downloaded)',
          color1: '#9b4d99',
          color2: '#a957a9',
          color3: '#bb6da0'
        },
        {
          opcode: 'getFileContent',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Get the content of the latest uploaded JSON file',
          color1: '#9b4d99',
          color2: '#a957a9',
          color3: '#bb6da0'
        },
        {
          opcode: 'getFileSize',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Get the size of the latest uploaded JSON file',
          color1: '#9b4d99',
          color2: '#a957a9',
          color3: '#bb6da0'
        },
        {
          opcode: 'turnIntoJSONAndDownload',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Turn [DATA] into JSON and download it as [NAME].json',
          arguments: {
            DATA: { type: Scratch.ArgumentType.STRING, defaultValue: '{"key":"value"}' },
            NAME: { type: Scratch.ArgumentType.STRING, defaultValue: 'example' },
          },
          color1: '#9b4d99',
          color2: '#a957a9',
          color3: '#bb6da0'
        }
      ]
    };
  }

  createJSONFile(args) {
    const { NAME, CONTENT } = args;
    const fileName = NAME + '.json';
    try {
      const blob = new Blob([CONTENT], { type: 'application/json' });
      const file = new File([blob], fileName, { type: 'application/json' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(file);
      link.download = fileName;
      link.click();
      this.latestUploadedFile = fileName;
      this.latestFileSizeMB = file.size / (1024 * 1024);  // Calculate file size in MB
      this.fileUploaded = true;
      this.uploadTimestamp = Date.now();
      return `JSON file "${fileName}" created and downloaded.`;
    } catch (error) {
      console.error('Error creating JSON file:', error);
      return 'Error creating JSON file.';
    }
  }

  importJSONFile() {
    return new Promise((resolve, reject) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.json';
      input.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.latestFileContent = e.target.result;
            this.latestFileSizeMB = file.size / (1024 * 1024);  // Calculate file size in MB
            this.fileUploaded = true;
            resolve(file.name);  // Return the file name
          };
          reader.onerror = (error) => {
            reject('Error reading JSON file: ' + error);
          };
          reader.readAsText(file);
        }
      };
      input.click();
    });
  }

  parseJSONFile() {
    try {
      return JSON.parse(this.latestFileContent);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return 'Error parsing JSON.';
    }
  }

  fileIsUploaded() {
    if (this.fileUploaded && Date.now() - this.uploadTimestamp < 300000) {
      return true;
    } else {
      this.fileUploaded = false;
      return false;
    }
  }

  fileIsDownloaded() {
    return this.fileUploaded;  // This can now be simply checked with fileUploaded
  }

  deleteFile() {
    this.latestUploadedFile = null;
    return 'JSON files deleted.';
  }

  clearFileData() {
    this.latestUploadedFile = null;
    this.latestFileContent = '';
    this.latestFileSizeMB = 0;  // Reset file size
    return 'All JSON file data cleared.';
  }

  getFileContent() {
    return this.latestFileContent;
  }

  getFileSize() {
    return this.latestFileSizeMB;
  }

  turnIntoJSONAndDownload(args) {
    const { DATA, NAME } = args;
    const fileName = NAME + '.json';
    try {
      const jsonContent = JSON.stringify(JSON.parse(DATA)); // Convert data into JSON format
      const blob = new Blob([jsonContent], { type: 'application/json' });
      const file = new File([blob], fileName, { type: 'application/json' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(file);
      link.download = fileName;
      link.click();
      this.latestUploadedFile = fileName;
      this.latestFileSizeMB = file.size / (1024 * 1024);  // Calculate file size in MB
      this.fileUploaded = true;
      this.uploadTimestamp = Date.now();
      return `JSON data turned into file "${fileName}" and downloaded.`;
    } catch (error) {
      console.error('Error converting data to JSON:', error);
      return 'Error converting data to JSON.';
    }
  }
}

Scratch.extensions.register(new FourndyJSON());