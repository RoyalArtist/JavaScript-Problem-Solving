    //Challenge 1

// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.
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