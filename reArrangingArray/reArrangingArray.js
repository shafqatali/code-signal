function reArrangingArray(arr) {
    var count = arr.length;
    var half = Math.ceil(( count / 2));
    var b = [];
    for(var c=0; c< half; c++){
        var x = c;
        var y = count - c -1;
        b.push(arr[x]);
        if( x != y){
            b.push(arr[y]);
        }
    }
    return b;
}