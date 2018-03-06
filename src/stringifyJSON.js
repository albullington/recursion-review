// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) { 
  var results = [];

  //if (obj === null) {
  //  return 'null'; 
  //}
  // if (obj === undefined) {
  //   return undefined;  
  // }
    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        results.push(stringifyJSON(obj[i]));
      }
      return '[' + results.concat() + ']';
      
    //} else if (typeof obj === 'function') {
    //  return continue;

    } else if (typeof obj === 'object' && obj !== undefined && obj !== null) {
                                    //add !== null 
      for (var key in obj) {
        if (obj[key] === undefined || typeof obj[key] === "function") {
          continue;
        } else {
        results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      } 
    }
    return '{' + results.concat() + '}';
    //} else if (typeof obj === 'number' || typeof obj === 'boolean') {
    //  return "" + obj; 

      //take string as a if 
      // the rest can be just '' + obj
    } else if (typeof obj === 'string') {
      return '"' + obj +'"';
    } else {
      return obj + "";
    }
  //object is not null
  //solve for array (Array.isArray(obj))
  //solve for object (typeof obj === 'object')
  //solve for string (typeof obj === 'string')
  //base case
};