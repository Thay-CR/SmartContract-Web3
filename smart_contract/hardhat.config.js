require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/DEH18DiZx5yl5a4jJUL-rf_TCmrPp6H1',
      accounts: ['a427d4611ea4efb4f4bcb43ba538b936339e2497f89829e854c9dfd08de2429e'],
    },
  },
};