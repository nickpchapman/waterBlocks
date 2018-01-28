const calcs = require('./calcs.js');
const mapUtils = require('./mapUtils');

const renderUtils = {

  renderBlocks: (walls, map) => {
    return mapUtils.editMap(walls.slice(), map, 1);
  },

  renderWater: (water, map) => {
    return mapUtils.editMap(water.slice(), map, 2);
  },

  renderFlanks: (water, map) => {
    let flanks = calcs.getFlanks(water);
    if (flanks[2]) {
      let tempMap = mapUtils.boldColumn(flanks[0] - 1, map, 3);
      return mapUtils.boldColumn(flanks[1] - 1, tempMap, 3);
    }
    return map;
  },

  renderNewMap: wallsStr => {
    let walls = wallsStr.split(',').map(el => parseInt(el));
    let water = calcs.getWaterBlocks(walls);
    let blankMap = mapUtils.createMap(walls);
    let blocksMap = renderUtils.renderBlocks(walls, blankMap);
    let blocksWaterMap = renderUtils.renderWater(water, blocksMap);
    return renderUtils.renderFlanks(water, blocksWaterMap);
  }
};

module.exports = renderUtils;