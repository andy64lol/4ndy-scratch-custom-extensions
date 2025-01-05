class FourndyTextFiles {
  constructor() {
    this.latestUploadedFile = null;
    this.latestUploadedExtension = null;
    this.latestDownloadedFile = null;
    this.latestDownloadedExtension = null;
    this.fileUploaded = false;
    this.fileDownloaded = false;
    this.uploadTimestamp = null;
    this.downloadTimestamp = null;
    this.latestFileContent = '';
    this.latestFileSizeMB = 0;  // Store the file size in MB
  }

  getInfo() {
    return {
      id: '4ndyTextFiles',
      name: '4ndy Text Files',
      color1: '#022e69',
      color2: '#034a7d',
      color3: '#045a8c',
      blocks: [
        {
          opcode: 'createFile',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Create a [EXTENSION] file named [NAME] with the content [CONTENT]',
          arguments: {
            NAME: { type: Scratch.ArgumentType.STRING, defaultValue: 'example' },
            CONTENT: { type: Scratch.ArgumentType.STRING, defaultValue: 'This is the content of the file.' },
            EXTENSION: { type: Scratch.ArgumentType.STRING, menu: 'fileExtensions', defaultValue: '.txt' }
          },
          color1: '#022e69',
          color2: '#034a7d',
          color3: '#045a8c'
        },
        {
          opcode: 'importFile',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Import file',
          color1: '#022e69',
          color2: '#034a7d',
          color3: '#045a8c'
        },
        {
          opcode: 'generateRandomFileName',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Generate random file name with extension [EXTENSION]',
          arguments: {
            EXTENSION: { type: Scratch.ArgumentType.STRING, menu: 'fileExtensions', defaultValue: '.txt' }
          },
          color1: '#022e69',
          color2: '#034a7d',
          color3: '#045a8c'
        },
        {
          opcode: 'latestFileUploaded',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Get the name of the latest uploaded file',
          color1: '#022e69',
          color2: '#034a7d',
          color3: '#045a8c'
        },
        {
          opcode: 'latestFileDownloaded',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Get the name of the latest downloaded file',
          color1: '#022e69',
          color2: '#034a7d',
          color3: '#045a8c'
        },
        {
          opcode: 'latestUploadedFileExtension',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Get the extension of the latest uploaded file',
          color1: '#022e69',
          color2: '#034a7d',
          color3: '#045a8c'
        },
        {
          opcode: 'latestDownloadedFileExtension',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Get the extension of the latest downloaded file',
          color1: '#022e69',
          color2: '#034a7d',
          color3: '#045a8c'
        },
        {
          opcode: 'fileIsUploaded',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is a file uploaded?',
          color1: '#022e69',
          color2: '#034a7d',
          color3: '#045a8c'
        },
        {
          opcode: 'fileIsDownloaded',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is a file downloaded?',
          color1: '#022e69',
          color2: '#034a7d',
          color3: '#045a8c'
        },
        {
          opcode: 'deleteFile',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Delete the uploaded file',
          color1: '#022e69',
          color2: '#034a7d',
          color3: '#045a8c'
        },
        {
          opcode: 'clearFileData',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Clear file data (uploaded and downloaded)',
          color1: '#022e69',
          color2: '#034a7d',
          color3: '#045a8c'
        },
        {
          opcode: 'getFileContent',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Get the content of the latest uploaded file',
          color1: '#022e69',
          color2: '#034a7d',
          color3: '#045a8c'
        },
        {
          opcode: 'getFileSize',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Get the size of the latest uploaded file',
          color1: '#022e69',
          color2: '#034a7d',
          color3: '#045a8c'
        },
        {
          opcode: 'isFileExpired',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Has the file expired (5 minutes passed)?',
          color1: '#022e69',
          color2: '#034a7d',
          color3: '#045a8c'
        }
      ],
      menus: {
        fileExtensions: ['.txt', '.md', '.rft']
      }
    };
  }

  createFile(args) {
    const { NAME, CONTENT, EXTENSION } = args;
    const fileName = NAME + EXTENSION;
    try {
      const blob = new Blob([CONTENT], { type: 'text/plain' });
      const file = new File([blob], fileName, { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(file);
      link.download = fileName;
      link.click();
      this.latestUploadedFile = fileName;
      this.latestUploadedExtension = EXTENSION;
      this.latestFileSizeMB = file.size / (1024 * 1024);  // Calculate file size in MB
      this.fileUploaded = true;
      this.uploadTimestamp = Date.now();
      return `File "${fileName}" created and downloaded.`;
    } catch (error) {
      console.error('Error creating file:', error);
      return 'Error creating file.';
    }
  }

  importFile() {
    return new Promise((resolve, reject) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.txt,.md,.rft'; // Add support for .rft files
      input.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.latestDownloadedFile = file.name;  // Store the full file name with extension
            this.latestDownloadedExtension = file.name.split('.').pop();  // Get the extension
            this.latestFileContent = e.target.result;
            this.latestFileSizeMB = file.size / (1024 * 1024);  // Calculate file size in MB
            this.fileDownloaded = true;
            this.downloadTimestamp = Date.now();
            resolve(this.latestDownloadedFile);  // Return full file name
          };
          reader.onerror = (error) => {
            reject('Error reading file: ' + error);
          };
          reader.readAsText(file);
        }
      };
      input.click();
    });
  }

  generateRandomFileName(args) {
    const { EXTENSION } = args;
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const randomChars = Math.random().toString(36).substring(2, 10);
    const randomFileName = `file_${timestamp}_${randomChars}${EXTENSION}`;
    return randomFileName;
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
    if (this.fileDownloaded && Date.now() - this.downloadTimestamp < 300000) {
      return true;
    } else {
      this.fileDownloaded = false;
      return false;
    }
  }

  // Updated isFileExpired method
  isFileExpired() {
    if (this.uploadTimestamp) {
      return Date.now() - this.uploadTimestamp >= 300000;  // Check if 5 minutes have passed (300,000 ms)
    }
    return false;
  }

  deleteFile() {
    this.latestUploadedFile = null;
    this.latestDownloadedFile = null;
    return 'Files deleted.';
  }

  clearFileData() {
    this.latestUploadedFile = null;
    this.latestDownloadedFile = null;
    this.latestFileContent = '';
    this.latestFileSizeMB = 0;  // Reset file size
    return 'All file data cleared.';
  }

  getFileContent() {
    return this.latestFileContent;
  }

  getFileSize() {
    return this.latestFileSizeMB;
  }
}

Scratch.extensions.register(new FourndyTextFiles());