var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var tempArray = [element, ...array];
  return tempArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var tempArray = [...array, element];
  return tempArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}

function removeElementFromBeginningOfArray(array) {
  array.slice(1);
  return array;
}

 function destructivelyRemoveElementFromEndOfArray(array) {
   return array.pop();
 }

function removeElementFromEndOfArray(array) {
  array.slice(array.length -1 );
  return array;
}
