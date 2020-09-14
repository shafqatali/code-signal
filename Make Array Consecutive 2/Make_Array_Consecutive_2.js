function makeArrayConsecutive2(statues) {
    var min = Math.min(...statues);
    var max = Math.max(...statues);
    var missed = [];
    for(var x=min; x< max; x++){
        if(statues.indexOf(x) == -1){
            missed.push(x);
        }
    }
    return missed.length;
}
