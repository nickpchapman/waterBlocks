const calcs = require('./calcs.js');
const mapUtils = require('./mapUtils');

const renderUtils = {

  renderBlocks: (walls, map, callback) => {
    let blockMap = mapUtils.editMap(walls.slice(), map, 1)
    callback(null, blockMap);
  },

  renderWater: (walls, map, callback) => {
    let water = calcs.getWaterBlocks(walls);
    let waterMap = mapUtils.editMap(water.slice(), map, 2);
    callback(null, water, waterMap);
  },

  renderFlanks: (water, map, callback) => {
    let flanks = calcs.getFlanks(water);
      if (flanks[2]) {
        let firstFlank = mapUtils.boldColumn(flanks[0] - 1, map, 3)
        callback(null, mapUtils.boldColumn(flanks[1] - 1, firstFlank, 3))
      } else {
        return callback(null, map);
      }
  },

  renderNewMap: (wallsStr, callback) => {
    let walls = wallsStr.split(',').map(el => parseInt(el));
    let blankMap = mapUtils.createMap(walls);
    renderUtils.renderBlocks(walls, blankMap, (err, blocksMap) => {
      if (err) {
        console.log(err);
      } else {
        renderUtils.renderWater(walls, blocksMap, (err, water, blockWaterMap) => {
          if (err) {
            console.log(err);
          } else {
            renderUtils.renderFlanks(water, blockWaterMap, (err, finalMap) => {
              if (err) {
                console.log(err);
              } else {
                callback(null, finalMap);
              }
            });
          }
        });
      }
    });
  }
};

module.exports = renderUtils;