module.exports = {
  networks: {
    development: {
     host: "localhost",     // localhost (default: none)
     port: 8545,            // standard ethereum port (default: none)
     network_id: "*",       // any network (default: none)
    },
    test: {
     host: "localhost",     // localhost (default: none)
     port: 8545,            // standard ethereum port (default: none)
     network_id: "*",       // any network (default: none)
    },
    live: {
     host: "localhost",     // localhost (default: none)
     port: 8545,            // standard ethereum port (default: none)
     network_id: "*",       // any network (default: none)
    }
  },
  mocha: {
  },
  compilers: {
    solc: {
      version: "=0.6.6"
    },
  },
};
