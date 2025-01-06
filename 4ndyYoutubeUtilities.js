class FourndyYouTubeUtilities {
  constructor() {
    this.iframeContainer = null;
    this.currentVideoURL = '';
    this.currentVideoName = '';
    this.isPlaying = false;
    this.isShort = false;
  }

  getInfo() {
    return {
      id: 'fourndyYouTubeUtilities',
      name: '4ndy YouTube Utilities',
      color1: '#FF0000',
      blocks: [
        {
          opcode: 'openYouTubeVideo',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Open YouTube video https://www.youtube.com/watch?v=[VIDEOID]',
          arguments: {
            VIDEOID: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'dQw4w9WgXcQ'
            }
          },
          color1: '#FF0000',
          color2: '#FF4D4D',
          color3: '#B30000'
        },
        {
          opcode: 'openYouTubeShorts',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Open YouTube Shorts https://m.youtube.com/shorts/[SHORTID]',
          arguments: {
            SHORTID: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'SXHMnicI6Pg'
            }
          },
          color1: '#FF0000',
          color2: '#FF4D4D',
          color3: '#B30000'
        },
        {
          opcode: 'closeYouTubePlayer',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Close YouTube player',
          color1: '#FF0000',
          color2: '#FF4D4D',
          color3: '#B30000'
        },
        {
          opcode: 'resizeYouTubePlayer',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Resize YouTube player to width [WIDTH] px and height [HEIGHT] px',
          arguments: {
            WIDTH: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 400
            },
            HEIGHT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 300
            }
          },
          color1: '#FF0000',
          color2: '#FF4D4D',
          color3: '#B30000'
        },
        {
          opcode: 'moveYouTubePlayer',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Move YouTube player to x [X] px and y [Y] px',
          arguments: {
            X: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 10
            },
            Y: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 10
            }
          },
          color1: '#FF0000',
          color2: '#FF4D4D',
          color3: '#B30000'
        },
        {
          opcode: 'getYouTubeLink',
          blockType: Scratch.BlockType.REPORTER,
          text: 'YouTube link',
          color1: '#FF0000',
          color2: '#FF4D4D',
          color3: '#B30000'
        },
        {
          opcode: 'getYouTubeVideoName',
          blockType: Scratch.BlockType.REPORTER,
          text: 'YouTube video name',
          color1: '#FF0000',
          color2: '#FF4D4D',
          color3: '#B30000'
        },
        {
          opcode: 'isVideoPlaying',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is video playing?',
          color1: '#FF0000',
          color2: '#FF4D4D',
          color3: '#B30000'
        },
        {
          opcode: 'isShortPlaying',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is short playing?',
          color1: '#FF0000',
          color2: '#FF4D4D',
          color3: '#B30000'
        },
        {
          opcode: 'isExtensionWorking',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is extension working?',
          color1: '#FF0000',
          color2: '#FF4D4D',
          color3: '#B30000'
        }
      ]
    };
  }

  openYouTubeVideo(args) {
    const url = `https://www.youtube.com/embed/${args.VIDEOID}?autoplay=1`;
    this.currentVideoURL = `https://www.youtube.com/watch?v=${args.VIDEOID}`;
    this.currentVideoName = `YouTube Video ID: ${args.VIDEOID}`;
    this.isPlaying = true;
    this.isShort = false;
    this.loadIframe(url);
  }

  openYouTubeShorts(args) {
    const url = `https://www.youtube.com/embed/${args.SHORTID}?autoplay=1`;
    this.currentVideoURL = `https://m.youtube.com/shorts/${args.SHORTID}`;
    this.currentVideoName = `YouTube Short ID: ${args.SHORTID}`;
    this.isPlaying = true;
    this.isShort = true;
    this.loadIframe(url);
  }

  closeYouTubePlayer() {
    if (this.iframeContainer) {
      this.iframeContainer.remove();
      this.iframeContainer = null;
      this.isPlaying = false;
      this.isShort = false;
    }
  }

  resizeYouTubePlayer(args) {
    if (this.iframeContainer) {
      this.iframeContainer.style.width = `${args.WIDTH}px`;
      this.iframeContainer.style.height = `${args.HEIGHT}px`;
    }
  }

  moveYouTubePlayer(args) {
    if (this.iframeContainer) {
      this.iframeContainer.style.left = `${args.X}px`;
      this.iframeContainer.style.top = `${args.Y}px`;
    }
  }

  getYouTubeLink() {
    return this.currentVideoURL || 'No video opened';
  }

  getYouTubeVideoName() {
    return this.currentVideoName || 'No video name available';
  }

  isVideoPlaying() {
    return this.isPlaying && !this.isShort;
  }

  isShortPlaying() {
    return this.isPlaying && this.isShort;
  }

  isExtensionWorking() {
    return true;
  }

  loadIframe(url) {
    this.closeYouTubePlayer();
    this.iframeContainer = document.createElement('div');
    this.iframeContainer.style.position = 'absolute';
    this.iframeContainer.style.bottom = '10px';
    this.iframeContainer.style.right = '10px';
    this.iframeContainer.style.width = '300px';
    this.iframeContainer.style.height = '200px';
    this.iframeContainer.style.border = '2px solid #880000';
    this.iframeContainer.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
    this.iframeContainer.style.zIndex = '1000';
    this.iframeContainer.style.backgroundColor = '#1C1C1C';

    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.allow = 'autoplay; encrypted-media';
    iframe.allowFullscreen = true; // Ensuring fullscreen capability

    this.iframeContainer.appendChild(iframe);
    document.body.appendChild(this.iframeContainer);
  }
}

Scratch.extensions.register(new FourndyYouTubeUtilities());
