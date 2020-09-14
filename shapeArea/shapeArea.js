function shapeArea(n) {
    var sum = 0;
    for(var x=n; x>0; x--){
        var z = (2* (x-1)) + 1;
        if(x == n){
            sum += (x + (x-1));
        }else {
            sum += z+z;
        }
    }
    return sum;
}
