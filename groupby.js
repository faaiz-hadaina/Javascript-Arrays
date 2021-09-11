const data = [
  {
    provider: 'uniswap',
    coin: 'ETH',
    amount: 29
  },
  {
    provider: 'smartcoin.com',
    coin: 'ETH',
    amount: 15
  },
  {
    provider: 'crypto.com',
    coin: 'BTC',
    amount: 25
  },
  {
    provider: 'crypto.com',
    coin: 'XRP',
    amount: 16
  },
  {
    provider: 'binance.com',
    coin: 'ETH',
    amount: 23.3
  },
  {
    provider: 'crypto.com',
    coin: 'AVAX',
    amount: 12
  },
  {
    provider: 'smartcoin.com',
    firstName: 'Jack',
    lastName: 'Robert'
  },
  {
    provider: 'smartcoin.com',
    coin: 'btc',
    amount: 15
  },
  {
    provider: 'crypto.com',
    coin: 'btc',
    amount: 290
  },
  {
    provider: 'binance.com',
    coin: 'eth',
    amount: 212
  },
  {
    provider: ' uniswap',
    coin: 'ADA',
    amount: 29
  }
];

function groupBy(data, key) {
  const allGroup = {};
  data.forEach((element) => {
    allGroup[element[key].trim()] = data.filter(
      (item) => item[key].trim() == element[key].trim()
    );
  });

  return allGroup;
}

console.log(groupBy(data, 'provider'));

// expected output
//  {
//      "smartcoin.com": [
//             {
//         provider: "smartcoin.com",
//         coin: "ETH",
//         amount: 15
//     },

//     {
//         provider: "smartcoin.com",
//         firstName: "Jack",
//         lastName: "Robert",
//     },
//     {
//         provider: "smartcoin.com",
//         coin: "btc",
//         amount: 15
//     },
//    //…
//  }
