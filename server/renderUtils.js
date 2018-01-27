const calcs = require('./calcs.js');
const mapUtils = require('./mapUtils');

const renderUtils = {

  renderBlocks: (walls, map) => {
    return mapUtils.editMap(walls, map, 1);
  },

  renderWater: (water, map) => {
    return mapUtils.editMap(water, map, 2);
  },

  renderFlanks: (water, map) => {
    let flanks = calcs.getFlanks(water);
    let tempMap = mapUtils.boldColumn(flanks[0] - 1, map, 3);
    return mapUtils.boldColumn(flanks[1] - 1, tempMap, 3);
  },

  renderNewMap: wallsStr => {
    let walls = wallsStr.split(',');
    let water = calcs.getWaterBlocks(walls);
    let blankMap = mapUtils.createMap(walls);
    let blocksMap = renderUtils.renderBlocks(walls, blankMap);
    let blocksWaterMap = renderUtils.renderWater(water, blocksMap);
    return renderUtils.renderFlanks(water, blocksWaterMap);
  }
};

module.exports = renderUtils;