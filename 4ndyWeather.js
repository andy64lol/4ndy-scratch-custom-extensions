class FourndyWeather {
  constructor() {
    this.apiUrl = 'https://api.weatherapi.com/v1/current.json?key=52f0b34b8177490893613729250401&q='; 
  }

  getInfo() {
    return {
      id: '4ndyWeather',
      name: '4ndy Weather',
      blocks: [
        {
          opcode: 'getTemperature',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get temperature of [LOCATION]',
          arguments: {
            LOCATION: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'London'
            }
          }
        },
        {
          opcode: 'getCondition',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get weather condition of [LOCATION]',
          arguments: {
            LOCATION: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'London'
            }
          }
        },
        {
          opcode: 'getHumidity',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get humidity of [LOCATION]',
          arguments: {
            LOCATION: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'London'
            }
          }
        },
        {
          opcode: 'getWindSpeed',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get wind speed of [LOCATION]',
          arguments: {
            LOCATION: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'London'
            }
          }
        },
        {
          opcode: 'getWeatherIcon',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get weather icon of [LOCATION]',
          arguments: {
            LOCATION: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'London'
            }
          }
        },
        {
          opcode: 'getAirQualityIndex',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get air quality index (AQI) of [LOCATION]',
          arguments: {
            LOCATION: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'London'
            }
          }
        },
        {
          opcode: 'getPressure',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get air pressure of [LOCATION]',
          arguments: {
            LOCATION: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'London'
            }
          }
        },
        {
          opcode: 'getFeelsLike',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get feels like temperature of [LOCATION]',
          arguments: {
            LOCATION: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'London'
            }
          }
        },
        {
          opcode: 'getUVIndex',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get UV index of [LOCATION]',
          arguments: {
            LOCATION: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'London'
            }
          }
        },
        {
          opcode: 'getCloudCoverage',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get cloud coverage of [LOCATION]',
          arguments: {
            LOCATION: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'London'
            }
          }
        }
      ]
    };
  }

  async getTemperature(args) {
    const response = await fetch(`${this.apiUrl}${args.LOCATION}&aqi=yes`);
    const data = await response.json();
    return data.current.temp_c; 
  }

  async getCondition(args) {
    const response = await fetch(`${this.apiUrl}${args.LOCATION}&aqi=yes`);
    const data = await response.json();
    return data.current.condition.text; 
  }

  async getHumidity(args) {
    const response = await fetch(`${this.apiUrl}${args.LOCATION}&aqi=yes`);
    const data = await response.json();
    return data.current.humidity; 
  }

  async getWindSpeed(args) {
    const response = await fetch(`${this.apiUrl}${args.LOCATION}&aqi=yes`);
    const data = await response.json();
    return data.current.wind_kph; 
  }

  async getWeatherIcon(args) {
    const response = await fetch(`${this.apiUrl}${args.LOCATION}&aqi=yes`);
    const data = await response.json();
    return data.current.condition.icon; 
  }

  async getAirQualityIndex(args) {
    const response = await fetch(`${this.apiUrl}${args.LOCATION}&aqi=yes`);
    const data = await response.json();
    return data.current.air_quality.pm2_5; 
  }

  async getPressure(args) {
    const response = await fetch(`${this.apiUrl}${args.LOCATION}&aqi=yes`);
    const data = await response.json();
    return data.current.pressure_mb;
  }

  async getFeelsLike(args) {
    const response = await fetch(`${this.apiUrl}${args.LOCATION}&aqi=yes`);
    const data = await response.json();
    return data.current.feelslike_c;
  }

  async getUVIndex(args) {
    const response = await fetch(`${this.apiUrl}${args.LOCATION}&aqi=yes`);
    const data = await response.json();
    return data.current.uv;
  }

  async getCloudCoverage(args) {
    const response = await fetch(`${this.apiUrl}${args.LOCATION}&aqi=yes`);
    const data = await response.json();
    return data.current.cloud;
  }

}

Scratch.extensions.register(new FourndyWeather());
