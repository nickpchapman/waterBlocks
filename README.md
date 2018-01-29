<!-- const findMaxWalls = (index, walls) => {
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
}

const getWaterBlocks = (walls) => {
  let waterBlocks = [];
  for (let i = 0; i < walls.length; i++) {
    let max = findMaxWalls(i, walls)
    let addedBlocks = Math.min(max[0], max[1]) - walls[i];
    if (addedBlocks > 0) {
      waterBlocks.push(addedBlocks)
    } else {
      waterBlocks.push(0);
    }
  }
  return waterBlocks
}

const findLargestSum = (water) => {
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
}

const calcWaterWalls = (walls) => {
  let waterBlocks = getWaterBlocks(walls);
  let mostWater = findLargestSum(waterBlocks)
  return mostWater;
} -->
========== Water Blocks Problem Statment ==========


You are given an input array where each element represents the height of a wall. The width of every tower is 1. It starts raining. How much water is collected between the walls?

Find the two walls that collect the most water between them.


============ Installation Instructions ============


1) Clone git repo to your local machine
2) Navigate to project folder in the command line
3) Type 'npm install' to install dependencies
3) Type 'node server/server.js' to start local server
4) To view project open browser and navigate to 'localhost:4000'
5) Once page loads, input comma separated string of numbers and hit submit to view a visual representation of the solution


============= Water Blocks Setup Notes ============


Overall Strategy:
find water blocks at each position in wall
find stretch of continous values in water blocks that has the largest sum. note positions flanking the largest sum

Big O:
must loop over entire walls array to find max walls each time we visit a value => O(n^2)
additonal loop over water blocks array occurs once to find sum and is negligible

example data flow:

input walls: [5, 3, 4, 1, 7]

map of walls and water:
1 === wall
2 === water

    1
    1
12221
12121
11121
11121
11111

calculating water blocks at each position:
wall index: 0
wall size: 5
biggest wall left: 0
biggest wall right: 7
0 - 5 < 0 => water blocks added: 0, [0]

    1
    1
1   1
1 1 1
111 1
111 1
11111

wall index: 1
wall size: 3
biggest wall left: 5
biggest wall right: 7
5 - 3 = 2 => water blocks added: 2, [0, 2]

    1
    1
12  1
121 1
111 1
111 1
11111

wall index: 2
wall size: 4
biggest wall left: 5
biggest wall right: 7
5 - 4 = 1 => water blocks added: 3, [0, 2, 3]

    1
    1
122 1
121 1
111 1
111 1
11111

wall index: 3
wall size: 1
biggest wall left: 5
biggest wall right: 7
5 - 1 = 4 => water blocks added: 4, [0, 2, 3, 4]

    1
    1
12221
12121
11121
11121
11111

wall index: 4
wall size: 7
biggest wall left: 5
biggest wall right: 0
5 - 7 < 0 => water blocks added: 0, [0, 2, 3, 4, 0]

Intermeidate Array generated at this step:
water blocks: [0, 2, 1, 4, 0]


Find two walls with largest amount of water between them:
  - find largest sum of consecutive values greater than 0 in:
   [0, 2, 1, 4, 0] => 7


  - find position of walls flanking this region
  [flank, 2, 1, 4, flank] => [1, 5]


output: [flank1, flank2, sum] => [1, 5, 7]


Functions Needed:
(no function constraints)

const findMaxWalls = (index, walls) => {
  // find biggest wall to left of index
  // find biggest wall to right of index
}

const getWaterBlocks = (walls) => {
  // find how many water blocks each space has
}

const findLargestSum = (water) => {
 // find the begining, end index, and sum of the largest continous sum in an array
}

const calcWaterWalls = (walls) => {
  // get water blocks at each position
  // find start and end of continous sum
}
