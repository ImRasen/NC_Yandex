function getMaxSubSum(arr) {
    if (arr.length < 1){
        return;
    }

    let currentSum = Math.max(arr[0], 0);
    let maxSum = currentSum;

    for (let i = 1; i < arr.length; i++) {
        currentSum = arr[i] + Math.max(currentSum, 0);
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }

    return maxSum;
}