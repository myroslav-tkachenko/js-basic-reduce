// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
	return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));


// Challenge 2
function addS(word) {
	return word + 's';
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
	const mapped = [];
  for (let i = 0; i < array.length; i++) {
    mapped.push(callback(array[i]));
  }
  return mapped;
}

console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
	for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

// see for yourself if your forEach works!


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
	const mapped = [];
	forEach(array, (e) => mapped.push(callback(e)));  
  return mapped;
}

console.log(mapWith([1, 2, 3], addTwo));

//Extension 2
function reduce(array, callback, initialValue) {
	if (array.length === 0) return initialValue;
  if (array.length === 1) return callback(initialValue, ...array);
  return reduce(array.slice(1), callback, callback(initialValue, array[0]));
}

console.log(reduce([1, 2, 3, 4], (a, e) => a + e, 0));

//Extension 3
function intersection(arrays) {
	const list = Array.from(arguments);
  if ( list.length === 1 ) return list[0];
	return reduce(list.slice(1), (res, array) => {
    const match = [];
    forEach(array, (e) => { if (res.indexOf(e) > -1) match.push(e) });
    return match;
  }, list[0]);
}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(arrays) {
	const list = Array.from(arguments);
  if ( list.length === 1 ) return list[0];
	return reduce(list.slice(1), (res, array) => {
    forEach(array, (e) => { if (res.indexOf(e) === -1) res.push(e) });
    return res;
  }, list[0]);
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  const res = {};
	forEach(array1, (e, i) => { if ( callback(e) === array2[i] ) res[e] = array2[i]; });
  return res;
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {

}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

