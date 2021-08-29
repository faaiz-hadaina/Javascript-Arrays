var threeSum = function (nums) {
  let twosometotal = 0;
  let threesomefinal = 0;
  let result = [];
  for (x = 0; x < nums.length; x++) {
    for (r = 0; r < nums.length; r++) {
      if (x != r) {
        twosometotal = nums[x] + nums[r];
        threesomefinal = 0 - twosometotal;
        for (z = 0; z < nums.length; z++) {
          if (threesomefinal == nums[z] && x != r && x != z && r != z) {
            let tempresult = [nums[x], nums[r], nums[z]];
            tempresult.sort();
            let canadd = true;
            for (y = 0; y < result.length; y++) {
              if (arrayEquals(result[y], tempresult)) {
                canadd = false;
              }
            }
            if (canadd) result.push(tempresult);
          }
        }
      }
    }
  }
  return result;
};
function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
