// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className,node = document.body) {
  // pass in an extra parameter, node/element
  // start by looking through the body of the document to see if there are matching elements
  // iterate through the child nodes array
  // then, use recursion to look through the child nodes
  // hints: use body.document, element.childList, element.childNodes
  var results = [];
  
  if (className !== undefined && node.classList.contains(className)) {
    console.log(node);

    results.push(node); 
  }
  
  Array.from(node.children).forEach(function(child) {
    // console.log('hi');
    results = results.concat(getElementsByClassName(className,child))
  });
    // for (var i = 0; i < newArray.length; i++) {
    //   results.push(getElementsByClassName(className,newArray[i]));
    // }
  // console.log(results);
  return results;
};
