
exports.getDate = function (){
    var today = new Date();


    
    var options = {
        weekday:"long" , day:"numeric",month:"long"
    };

    return today.toLocaleDateString("en-us",options);
    
}

exports.getDay = function (){
    var today = new Date();
    var options = {
        weekday : "long"
    };
    
    return today.toLocaleDateString("en-us",options);
    
}

console.log(module.exports);