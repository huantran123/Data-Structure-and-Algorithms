// https://leetcode.com/problems/trapping-rain-water/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let totalWater = 0;

  let rightMaxValues = [];
  var rMax = 0;

  // store max value seen so far from right to left
  for(let i = height.length-1; i>=0 ;i--){
      rightMaxValues[i] = rMax;
      if (height[i]>rMax){
          rMax = height[i];
      }
  }
  //We could store a leftMaxValues array, but are just keeping max seen so far, which we can track in the same loop as the water calculation

  let leftMaxValue = 0;
  for(let i = 0; i<height.length; i++){
    //update left max value if needed
      if (height[i-1] > leftMaxValue){
          leftMaxValue= height[i-1]
      }

//calculate water level at index
      let minWaterLevel = Math.min(leftMaxValue, rightMaxValues[i]);
      let waterAtIndex = minWaterLevel>height[i] ? minWaterLevel-height[i] : 0;
      totalWater += waterAtIndex
  }

  return totalWater

};