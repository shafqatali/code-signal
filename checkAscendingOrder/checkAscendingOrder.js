function checkAscendingOrder(arr) {
    var count = arr.length;
    var isSmaller = true;
    for (var i = 0; i < count; i++) {
        if (i < count - 1) {
            if (arr[i + 1] < arr[i]) {
                isSmaller = false;
            }
        }
    }
    return isSmaller;
}