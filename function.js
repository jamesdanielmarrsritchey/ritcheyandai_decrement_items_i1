function decrement_permutation(items, permutation) {
    // Map permutation to indices
    let nums = permutation.map(item => items.indexOf(item));

    // Decrement the number in mixed radix numeral system
    let i = nums.length - 1;
    while (i >= 0 && nums[i] === 0) {
        nums[i] = items.length - 1;
        i--;
    }
    if (i >= 0) {
        nums[i]--;
    } else {
        throw new Error("Cannot decrement the permutation any further.");
    }

    // If the first index is 0, remove it
    if (nums[0] === 0) {
        nums.shift();
    }

    // Map indices back to items
    return nums.map(index => items[index]);
}