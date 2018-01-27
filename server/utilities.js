const utils = {
  findMaxWalls: (index, walls) => {
    let maxLeft = 0;
    let maxRight = 0;
    for (let i = index - 1; i >= 0; i--){
      if (walls[i] > maxLeft) {
        maxLeft = walls[i];
      }
    }
    for (let i = index + 1; i < walls.length; i++){
      if (walls[i] > maxRight) {
        maxRight = walls[i];
      }
    }
    return [maxLeft, maxRight];
  },

  getWaterBlocks: walls => {
    let waterBlocks = [];
    for (let i = 0; i < walls.length; i++) {
      let max = utils.findMaxWalls(i, walls)
      let addedBlocks = Math.min(max[0], max[1]) - walls[i];
      if (addedBlocks > 0) {
        waterBlocks.push(addedBlocks)
      } else {
        waterBlocks.push(0);
      }
    }
    return waterBlocks
  },

  findLargestSum: water => {
    let maxSum = 0;
    let maxIndexes = [1, 1];
    let start = 1;
    let end = 2;
    let currentSum = 0;
    for (let i = 1; i < water.length - 1; i++) {
      if (water[i] > 0) {
        currentSum += water[i];
        end++;
        if (currentSum > maxSum) {
          maxSum = currentSum;
          maxIndexes = [start, end];
        }
      } else {
        currentSum = 0;
        start = i + 1;
        end = i + 2;
      }
    }
    maxIndexes.push(maxSum)
    return maxIndexes
  },

  //can remove
  calcWaterWalls: walls => {
    let waterBlocks = utils.getWaterBlocks(walls);
    let mostWater = utils.findLargestSum(waterBlocks)
    return mostWater;
  }
}

module.exports = utils;