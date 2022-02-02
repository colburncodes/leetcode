// Given a binary array nums, return the maximum number of consecutive 1's in the array.
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Constraints:
// 1 <= nums.lenth <= 10^5
// nums[i] is either 0 or 1

function findMaxConsecutiveOnes(nums) {
    let count = 0;
    let maxCount = 0; 
    for(let i =0; i < nums.length; i++){
        if(nums[i] === 1) {
            count++;
        } else {
            maxCount = Math.max(maxCount, count);
            count=0;
        }
    }
    return Math.max(maxCount, count);
}

// Test Cases
nums = [1, 1, 0, 1, 1, 1];
nums = [1, 0, 1, 1, 0, 1];
console.log(findMaxConsecutiveOnes(nums));