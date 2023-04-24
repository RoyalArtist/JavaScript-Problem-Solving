    //Challenge 1

//There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.
//Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.
//Note that multiple kids can have the greatest number of candies.

    const candies = [2,3,5,1,3]
    const extraCandies = 3
    const result =  function kidsWithCandies(candies, extraCandies) {
    const maxCandies = Math.max(...candies)
    const result = []

    for(let i = 0; i < candies.length; i++) {
        if(candies[i] + extraCandies >= maxCandies)  {
            result.push(true)
        } else {
            result.push(false)
        }
    }

    return result
}

console.log(result(candies, extraCandies))

// This function first finds the maximum number of candies in the array. Then it loops through the array and checks if the current kid has the maximum number of candies. If so, it pushes true to the result array. If not, it pushes false to the result array.
// finally, it returns the result array.

    //Challenge 2

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

    const counter = createCounter(5)

    function createCounter(n) {
        return function() {
            return n++
        }
    }

    // This function takes an integer n as an argument and returns another function that acts as a counter.
    // The returned function keeps track of the current count by using a closure to store the current value of n.
    // Each time the function is called, it increments n by 1 and returns the new value.

    console.log(counter()) // 5
    console.log(counter()) // 6
    console.log(counter()) // 7


    //Challenge 3

// Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

//A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.
//If the length of the array is 0, it should return init.

const nums = [1, 2, 3, 4];

const reduce = function(nums, fn, init) {
  if (nums.length) {
    nums.forEach(num => init = fn(init, num));
  }
  return init;
};

const numResult = reduce(nums, (acc, curr) => acc + curr, 0);
console.log(numResult); // Output: 10

    //Challenge 4

//Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.
//The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.

function filter(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i)) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  const arr = [0, 10, 20, 30];
  const fn = function greaterThan10(n) {
    return n > 10;
  };
  
  const filteredArray = filter(arr, fn);
  console.log(filteredArray); // Output: [20, 30]