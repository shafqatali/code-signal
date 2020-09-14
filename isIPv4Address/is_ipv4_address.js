function isIPv4Address(entry) {
    var blocks = entry.split(".");
    if(blocks.length === 4) {
        return blocks.every(function(block) {
            if(isNaN(block)){
                return false;
            }
            if(block.startsWith("0") && block.length > 1){
                return false;
            }
            return parseInt(block,10) >=0 && parseInt(block,10) <= 255;
        });
    }
    return false;
}
