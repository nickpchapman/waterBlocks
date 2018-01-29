const calcs = require('./calcs.js');
const mapUtils = require('./mapUtils');

const renderUtils = {

  renderBlocks: (walls, map, callback) => {
    mapUtils.editMap(walls.slice(), map, 1, (err, newMap) => {
      if (err) {
        console.log(err);
      } else {
        callback(null, newMap);
      }
    });
  },

  renderWater: (walls, map, callback) => {
    calcs.getWaterBlocks(walls, (err, water) => {
      if (err) {
        console.log(err)
      } else {
        mapUtils.editMap(water.slice(), map, 2, (err, waterMap) => {
          if (err) {
            console.log(err);
          } else {
            callback(null, water, waterMap);
          }
        });
      }
    });
  },

  renderFlanks: (water, map, callback) => {
    let flanks = calcs.getFlanks(water, (err, flanks) => {
      if (err) {
        console.log(err)
      } else {
        if (flanks[2]) {
          mapUtils.boldColumn(flanks[0] - 1, map, 3, (err, oneFlank) => {
            if (err) {
              console.log(err);
            } else {
              mapUtils.boldColumn(flanks[1] - 1, oneFlank, 3, (err, twoFlanks) => {
                if (err) {
                  console.log(err);
                } else {
                  callback(null, twoFlanks);
                }
              });
            }
          });
        } else {
          callback(null, map);
        }
      }
    });
  },

  renderNewMap: (wallsStr, callback) => {
    let walls = wallsStr.split(',').map(el => parseInt(el));

    mapUtils.createMap(walls, (err, blankMap) => {
      if (err) {
        console.log(err);
      } else {
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
                })
              }
            });
          }
        });
      }
    });
  }
};

module.exports = renderUtils;