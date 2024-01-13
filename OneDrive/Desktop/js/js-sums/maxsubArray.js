const maxSubArray = (nums) => {
    let prev = 0; // no prev when we start so make it 0
    let max = -Infinity; // no max when we start so anything will be the new max 

    for (let i = 0; i < nums.length; i++) { // loop through in vanilla way starting at 0 and going to end by 1
        const curr = nums[i]; // set our current value as a variable to make it easy to understand 
        prev = Math.max(prev + curr, curr); // basically poses the question: build or start over?
        max = Math.max(prev, max) // basically poses the question: update max or not? 
    }
    return max
}


const nums=[-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));