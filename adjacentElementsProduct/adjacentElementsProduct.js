function adjacentElementsProduct(inputArray) {
    var result = 0;
    var n = inputArray.length -1;
    for (var x=0; x < n; x++){
        var mul = inputArray[x]*inputArray[x+1];
        if(mul > result){
            result = mul;
        }else if(result === 0 && mul < 0) {
            result = mul;
        } else if(result < 0 && mul < 0 && mul > result){
            result = mul;
        }
    }
    return result;
}