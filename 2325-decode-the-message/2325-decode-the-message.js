/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u","v","w","x","y","z"];
    const object = {};
    let arrayIndex = 0;
    
    for(const letter of key){
        if(letter !== " "){
            if(!object[letter]){
                object[letter] = array[arrayIndex++];
            }
        }
    }
    
    let output = "";
    for(const letter of message){
        if(letter !== " "){
            output+= object[letter];
        }else{
            output+= letter;
        }
    }
    
    return output;
};