var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var tempArray = [element, ...chocolateBars];
  return tempArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var tempArray = [...chocolateBars, element];
  return tempArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(elemnent);
  return array;
}
