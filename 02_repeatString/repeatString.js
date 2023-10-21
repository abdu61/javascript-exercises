const repeatString = function(string, num) {
    let result;
    if (num < 0){
        return 'ERROR';
    }
    else if (num == 0){
        return '';
    }
    else{
        result = string.repeat(num);
        return result;
    }


};

// Do not edit below this line
module.exports = repeatString;
