const utils = require('./utilities.js');
const helpers = {

  createMap: walls => {
    let n = walls.length;
    let m = Math.max(...walls) + 1;
    let newMap = [];
    for (let i = 0; i < m; i++ ) {
      let row = [];
      for (let j = 0; j < n; j++) {
        row.push(0)
      }
      newMap.push(row)
    }
    return newMap;
  },

  renderBlocks: (walls, map) => {

  },

  renderWater: (walls, map) => {

  },

  renderFlanks: (flanks, map) => {

  },

  addMapLabel: (map) => {

  },

  renderNewMap: wallsStr => {
    let blankMap = helpers.createMap(wallsStr.split(','));

  }
};

module.exports = helpers;