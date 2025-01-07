class FourndyEconomicalAnalytics {
  constructor() {
    this.logs = [];
    this.lastCalculation = null;
  }

  async fetchData(url, headers = {}) {
    try {
      const response = await fetch(url, { headers });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }

  getInfo() {
    return {
      id: '4ndyEconomicalAnalytics',
      name: '4ndy Economical Analytics',
      color1: '#0F4B3D', // Dark green (hacker green)
      color2: '#1A6B47', // Darker green
      color3: '#2E8B57', // Forest green
      blocks: [
        {
          opcode: 'fetchGDP',
          blockType: Scratch.BlockType.REPORTER,
          text: 'GDP of [COUNTRY] for year [YEAR]',
          arguments: {
            COUNTRY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'USA'
            },
            YEAR: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 2023
            }
          }
        },
        {
          opcode: 'calculateInvestmentReturn',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Investment return: Initial [INITIAL] Final [FINAL]',
          arguments: {
            INITIAL: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1000
            },
            FINAL: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1500
            }
          }
        },
        {
          opcode: 'getCompanyData',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Data for company [SYMBOL]',
          arguments: {
            SYMBOL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'AAPL'
            }
          }
        },
        {
          opcode: 'fetchCurrencyExchange',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Exchange rate from [FROM] to [TO]',
          arguments: {
            FROM: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'USD'
            },
            TO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'EUR'
            }
          }
        },
        {
          opcode: 'calculateCompoundInterest',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Compound interest for principal [PRINCIPAL] at rate [RATE] over [TIME] years',
          arguments: {
            PRINCIPAL: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1000
            },
            RATE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5
            },
            TIME: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 10
            }
          }
        },
        {
          opcode: 'calculateInflationRate',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Inflation rate between [YEAR1] and [YEAR2]',
          arguments: {
            YEAR1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 2000
            },
            YEAR2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 2023
            }
          }
        },
        {
          opcode: 'getCurrencyForCountry',
          blockType: Scratch.BlockType.REPORTER,
          text: "[COUNTRY]'s currency",
          arguments: {
            COUNTRY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'USA'
            }
          }
        }
      ]
    };
  }

  async fetchGDP(args) {
    const url = `https://api.worldbank.org/v2/country/${args.COUNTRY}/indicator/NY.GDP.MKTP.CD?format=json&date=${args.YEAR}`;
    const data = await this.fetchData(url);
    return data[1] ? data[1][0].value : 'Data not available';
  }

  calculateInvestmentReturn(args) {
    const returnRate = ((args.FINAL - args.INITIAL) / args.INITIAL) * 100;
    this.lastCalculation = returnRate;
    return `${returnRate.toFixed(2)}%`;
  }

  async getCompanyData(args) {
    const finnhubApiKey = 'ctuqd1hr01qg98tdrt80ctuqd1hr01qg98tdrt8g';
    const url = `https://finnhub.io/api/v1/quote?symbol=${args.SYMBOL}&token=${finnhubApiKey}`;
    const data = await this.fetchData(url);
    return data ? `Current Price: ${data.c}` : 'Data not available';
  }

  async fetchStockPrice(args) {
    const alphaVantageApiKey = 'SGZ8VBRTPCHMUBB7';
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${args.SYMBOL}&interval=1min&apikey=${alphaVantageApiKey}`;
    const data = await this.fetchData(url);
    return data['Time Series (1min)'] ? data['Time Series (1min)']['1. open'] : 'Data not available';
  }

  async fetchHistoricalData(args) {
    const alphaVantageApiKey = 'SGZ8VBRTPCHMUBB7';
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${args.SYMBOL}&outputsize=compact&apikey=${alphaVantageApiKey}`;
    const data = await this.fetchData(url);
    const latestDate = Object.keys(data['Time Series (Daily)'])[0];
    return `Date: ${latestDate}, Close: ${data['Time Series (Daily)'][latestDate]['4. close']}`;
  }

  async fetchCurrencyExchange(args) {
    const exchangerateApiKey = '48650d70f0e9355071b87ee1';
    const url = `https://v6.exchangerate-api.com/v6/${exchangerateApiKey}/latest/${args.FROM}`;
    const data = await this.fetchData(url);
    return data.conversion_rates && data.conversion_rates[args.TO] 
      ? `Exchange rate from ${args.FROM} to ${args.TO}: ${data.conversion_rates[args.TO]}`
      : 'Data not available';
  }

  async getCurrencyForCountry(args) {
    const url = `https://restcountries.com/v3.1/name/${args.COUNTRY}`;
    const data = await this.fetchData(url);
    if (data && data[0] && data[0].currencies) {
      const currency = Object.keys(data[0].currencies)[0];
      return `${args.COUNTRY}'s currency: ${data[0].currencies[currency].name}`;
    } else {
      return `${args.COUNTRY}'s currency data not available`;
    }
  }

  calculateCompoundInterest(args) {
    const principal = args.PRINCIPAL;
    const rate = args.RATE / 100;
    const time = args.TIME;
    const compoundInterest = principal * Math.pow(1 + rate, time) - principal;
    return `Compound Interest: ${compoundInterest.toFixed(2)}`;
  }

  async calculateInflationRate(args) {
    const url1 = `https://api.worldbank.org/v2/country/USA/indicator/FP.CPI.TOTL?format=json&date=${args.YEAR1}`;
    const url2 = `https://api.worldbank.org/v2/country/USA/indicator/FP.CPI.TOTL?format=json&date=${args.YEAR2}`;
    
    const data1 = await this.fetchData(url1);
    const data2 = await this.fetchData(url2);
    
    const gdpDeflator1 = data1[1] ? data1[1][0].value : null;
    const gdpDeflator2 = data2[1] ? data2[1][0].value : null;
    
    if (gdpDeflator1 && gdpDeflator2) {
      const inflationRate = ((gdpDeflator2 - gdpDeflator1) / gdpDeflator1) * 100;
      return `Inflation rate between ${args.YEAR1} and ${args.YEAR2}: ${inflationRate.toFixed(2)}%`;
    } else {
      return 'Data not available';
    }
  }
}

Scratch.extensions.register(new FourndyEconomicalAnalytics());
