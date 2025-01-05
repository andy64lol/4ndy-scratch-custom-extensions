class FourndyCurrencyConversions {
  getInfo() {
    return {
      id: '4ndyCurrencyConversions',
      name: '4ndy Currency Conversions (Data as of 2025)',
      color1: '#407285',
      blocks: [
        {
          opcode: 'convertCurrency',
          blockType: Scratch.BlockType.REPORTER,
          text: '[VALUE] [FROM] to [TO] (Data from 2025)',
          arguments: {
            VALUE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            },
            FROM: {
              type: Scratch.ArgumentType.STRING,
              menu: 'currencyMenu',
              defaultValue: 'USD'
            },
            TO: {
              type: Scratch.ArgumentType.STRING,
              menu: 'currencyMenu',
              defaultValue: 'EUR'
            }
          },
          color1: '#407285',
          color2: '#61A7B1',
          color3: '#305E67'
        }
      ],
      menus: {
        currencyMenu: ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'INR', 'ZAR', 'BRL', 'KRW']
      }
    };
  }

  convertCurrency(args) {
    const value = args.VALUE;
    const from = args.FROM;
    const to = args.TO;

    if (from === to) return value;

    const exchangeRates = {
      'USD': { 'EUR': 0.85, 'GBP': 0.75, 'JPY': 110, 'AUD': 1.3, 'CAD': 1.25, 'CHF': 0.92, 'CNY': 6.45, 'INR': 74, 'ZAR': 15.6, 'BRL': 5.2, 'KRW': 1111 },
      'EUR': { 'USD': 1.18, 'GBP': 0.88, 'JPY': 129, 'AUD': 1.53, 'CAD': 1.47, 'CHF': 1.08, 'CNY': 7.6, 'INR': 87, 'ZAR': 18.4, 'BRL': 6.1, 'KRW': 1300 },
      'GBP': { 'USD': 1.34, 'EUR': 1.14, 'JPY': 150, 'AUD': 1.8, 'CAD': 1.7, 'CHF': 1.23, 'CNY': 8.8, 'INR': 100, 'ZAR': 20.3, 'BRL': 7.0, 'KRW': 1450 },
      'JPY': { 'USD': 0.0091, 'EUR': 0.0078, 'GBP': 0.0067, 'AUD': 0.012, 'CAD': 0.011, 'CHF': 0.0082, 'CNY': 0.058, 'INR': 0.67, 'ZAR': 0.14, 'BRL': 0.048, 'KRW': 9.8 },
      'AUD': { 'USD': 0.77, 'EUR': 0.65, 'GBP': 0.56, 'JPY': 83, 'CAD': 0.96, 'CHF': 0.68, 'CNY': 5.0, 'INR': 57, 'ZAR': 12.1, 'BRL': 4.1, 'KRW': 880 },
      'CAD': { 'USD': 0.80, 'EUR': 0.68, 'GBP': 0.59, 'JPY': 86, 'AUD': 1.04, 'CHF': 0.71, 'CNY': 5.2, 'INR': 60, 'ZAR': 13.3, 'BRL': 4.4, 'KRW': 920 },
      'CHF': { 'USD': 1.09, 'EUR': 0.93, 'GBP': 0.81, 'JPY': 118, 'AUD': 1.47, 'CAD': 1.4, 'CNY': 7.3, 'INR': 81, 'ZAR': 18.2, 'BRL': 6.2, 'KRW': 1250 },
      'CNY': { 'USD': 0.16, 'EUR': 0.13, 'GBP': 0.11, 'JPY': 17, 'AUD': 0.2, 'CAD': 0.19, 'CHF': 0.14, 'INR': 11.4, 'ZAR': 2.4, 'BRL': 0.82, 'KRW': 170 },
      'INR': { 'USD': 0.013, 'EUR': 0.011, 'GBP': 0.01, 'JPY': 1.5, 'AUD': 0.018, 'CAD': 0.017, 'CHF': 0.012, 'CNY': 0.088, 'ZAR': 0.21, 'BRL': 0.073, 'KRW': 15 },
      'ZAR': { 'USD': 0.064, 'EUR': 0.055, 'GBP': 0.048, 'JPY': 7, 'AUD': 0.081, 'CAD': 0.077, 'CHF': 0.058, 'CNY': 0.42, 'INR': 4.8, 'BRL': 0.35, 'KRW': 70, 'BRL': 0.36, 'JPY': 6.8 },
      'BRL': { 'USD': 0.19, 'EUR': 0.16, 'GBP': 0.14, 'JPY': 21, 'AUD': 0.24, 'CAD': 0.23, 'CHF': 0.17, 'CNY': 1.1, 'INR': 13.8, 'ZAR': 2.9, 'KRW': 200, 'ZAR': 2.85, 'JPY': 20.5 },
      'KRW': { 'USD': 0.0009, 'EUR': 0.0008, 'GBP': 0.0007, 'JPY': 0.12, 'AUD': 0.0011, 'CAD': 0.0010, 'CHF': 0.00085, 'CNY': 0.006, 'INR': 0.07, 'ZAR': 0.014, 'BRL': 0.005 }
    };

    const rateFrom = exchangeRates[from];
    if (!rateFrom || !rateFrom[to]) {
      throw new Error(`Conversion from ${from} to ${to} is not supported.`);
    }

    return value * rateFrom[to];
  }
}

Scratch.extensions.register(new FourndyCurrencyConversions());
