'use strict';

// YOU KNOW WHAT TO DO //


/**
 * 
 * identity: takes a value and returns it unchanged
 * 
 * @param {*} value:single value that can be any datatype 
 * 
 * @returns {*}: the input value unchanged
 */ 
 
 function identity(value){
    //return value unchanged
    return value;
}

module.exports.identity = identity;

/**
 * 
 * typeOf: takes a value and returns the type of 
 * 
 * @param {*} value: single value that can be any datatype 
 * 
 * @returns {string}: returns a string of the type of datatype 
 */ 

function typeOf(value){
    // if statement to check for array
    if (Array.isArray(value)){
        return "array";
    // else if to check for null
    
    } else if (value === null){
        return "null";
    } else {
    //else to use typeof to find other values
    return typeof value; 
}
}
module.exports.typeOf = typeOf

/**
 * 
 * first: access the first amount of elements in an array based on the number given.
 * 
 * @param {array} arrray: an array over which to iterate.
 * @param {number} number: 
 * 
 * @returns {array}: returns a portion of the array based on the number in the parameters, 
 * if there is not an array present or not a number it will return an empty array
 * 
 */ 




function first(array, number){
    //check to see if the array is not an array, if its not return '[]'
   
   let newArray =[]
    if(!Array.isArray){
        return []
    //if number is not a number return the first element in array    
    
    }else if(typeof number !== 'number'){
        return array[0];
    }else if(number < 0) {
        return [];
    } else if (number > array.length-1) {
        return array;
    }else {
        for(let i= 0; i< number; i++){
            newArray.push(array[i]);
        } 
         
    } return newArray;   
}
module.exports.first = first

/**
 * 
 * last: access the last amount of elements in an array based on the number given.
 * 
 * @param {array} arrray: an array over which to iterate.
 * @param {number} number: a number which to extract elements for the end of 
 * the array
 * 
 * @returns {array}: returns a portion of the array starting at the end of the 
 * array based on the number in the parameters, 
 * if there is not an array present or not a number return an empty array
 * 
 */ 

function last(array, number){
    let newArray = [];

    if(!Array.isArray){
        return [];
    }else if (typeof number !== 'number'){
        return array[array.length-1];
    }else if (number < 0){
        return [];
    }else if (number > array.length){
        return array;
    }else {
        for (let i = array.length-1; i >= (array.length-number); i--){
         newArray.unshift(array[i]);
        }return newArray
    }
}
module.exports.last = last

/**
 * 
 * indexOf: find out where an element is in an array
 * 
 * @param {array} arrray: an array over which to iterate.
 * @param {value} element in array: element to find the first instance of in the 
 * array
 * 
 * @returns {array}: if <value> is in the array return the index of <array> 
 * that is the first occurrance of <value>. 
 * If the array doesn't have <value> as an element in the <array> return -1
 * 
 */ 
 
function indexOf(array, value){ // return the index of array
    for (var i=0; i<array.length; i++){ //loop through array
    //if the array has value return the first value
        if(array[i] === value) {
            return i;
        }
         //if no value return -1   
        }return -1
    }
module.exports.indexOf = indexOf
    
/**
 * 
 * contains: find out if an element is in an array
 * 
 * @param {array} array: an array over which to iterate.
 * @param {value} any datatype: datatype thats possibly in the array 
 * 
 * @returns {boolean}: Return true if <array> contains <value>
 *   Return false otherwise
 * 
 */ 

function contains (array, value){
    //use terenary object to return 'true' is array.includes(value), false if not
    return (array.includes(value) ? true : false);
};
module.exports.contains = contains

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} funct: The Function to be applied to each value in the 
 * collection
 */

 function each(collection, funct){
    //find if collection is an array
    if (Array.isArray(collection)){
        //if it is run funct looping the length of the array with args: elements of collection, index, and the full collection
            for( let i=0; i< collection.length;i++){
            funct(collection[i], i, collection) 
        }
        //if it is an object loop the amount of keys and run funct with args: property value, key, and full collection
        } else if(typeof collection === 'object'){
            for (let key in collection) {
                funct(collection[key], key, collection)
            }
        } //do nothing if it is not an array or object
        }

module.exports.each = each        

/**
 * 
 * unique: takes a unique values in an an array and returns them in a new array
 * 
 * @param {array} array: over which to iterate
 * 
 * @returns {array}: Return a new array of all elements from <array> with 
 * all duplicates removed
 */ 



function unique(array){
   //make new array to hold the first instance of all values in array
   let noDup = [];
   //loop through array
   for(let i=0; i < array.length; i++){
      //if the value in the original array is not yet in the new array .push it into the array 
      if (indexOf(noDup, array[i]) === -1){
           noDup.push(array[i]);
       }
   }return noDup
    
}
module.exports.unique = unique


/**
 * 
 * filter: creates a new array by taking elements from an existing array; 
 * filtering out any element that doesnt result 'true' when called through
 * a given function
 * 
 * @param {array} array: over which to iterate
 * @param {Function} isFunc: The Function to be applied to each value in the 
 * collection
 * 
 * @returns {array}: return a new array of elements for which calling 
 * <function> returned true
 */ 

 
function filter(array, isFunc) {
  let newArray = [];
   each(array, function(value, index, list) {
    if (isFunc(value, index, list)){
        newArray.push(value)};
  });
  return newArray;
}

module.exports.filter = filter

/**
 * 
 * reject: creates a new array by taking elements from an existing array; 
 * new array consists of any element that results 'false' when called through
 * a given function
 * 
 * @param {array} array: over which to iterate
 * @param {Function} isFunc: The Function to be applied to each value in the 
 * collection
 * 
 * @returns {array}: return a new array of elements for which calling 
 * <function> returned false
 */ 


function reject(bigArray, isFunc) {
  let smallArray = []
  each(bigArray, function(value, index, list){
      smallArray.push(bigArray[index])
  })
  
   let newArray = filter(smallArray, isFunc) // returns elements that are 'true'
    for (let i = 0; i<smallArray.length; i++) { //loop through array we are searching
        for (let a = 0; a <newArray.length; a++) {
            if (newArray[a] === smallArray[i]) {
                smallArray.splice(i,1)
            } 
        }
     } return smallArray

}

module.exports.reject = reject

/**
 * 
 * partition: organizes the data in a given array into data that is true and data
 * that is false, by creating two sub arrays 
 * 
 * @param {array} array: over which to iterate
 * @param {Function} func: The Function to be applied to each value in the 
 * collection and seperate based on truthiness or falsiness
 * 
 * @returns {array}: Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
 */ 



function partition(array, func){
    
    let partitionArray = [filter(array, func),reject(array, func)]
    return partitionArray;
}
module.exports.partition = partition

/**
 * 
 * map: calls a function on each part of an array/object and collects the values
 * in a new array
 * 
 * @param {Object or Array} collection: over which to iterate
 * @param {Function} func: The Function to be applied to each value in the 
 * collection 
 * 
 * @returns {array}: return an array containing the values of each 
 * <function> call 
 */ 


function map(collection, func){
  let returnArray = []
  

  if (Array.isArray(collection)){
        //if it is run funct looping the length of the array with args: elements of collection, index, and the full collection
            each(collection, function(value, index, collection){
            returnArray.push(func(collection[index], index, collection));
        })
        //if it is an object loop the amount of keys and run funct with args: property value, key, and full collection
        } else if(typeof collection === 'object'){
            each(collection, function(value, key, collection){
                returnArray.push(func(collection[key], key, collection));
            })
        } //do nothing if it is not an array or object
        return returnArray
}

module.exports.map = map

/**
 * 
 * pluck: calls a function on each part of an array/object and collects the values
 * in a new array
 * 
 * @param {Object or Array} collection: over which to iterate
 * @param {Function} func: The Function to be applied to each value in the 
 * collection 
 * 
 * @returns {array}: Return an array containing the value of <property> for 
 * every element in <array>
 */ 

function pluck(collection, property){
     let returnArray = [];
     map(collection, function(value, index, collection){
         returnArray.push(collection[index][property]);
    })
    return returnArray
}

module.exports.pluck = pluck

/**
 * 
 * every: tests if every element returns true when passing through the 
 * function
 * 
 * @param {Object or Array} collection: over which to iterate
 * @param {Function} func: The Function to be applied to each value in the 
 * collection 
 * 
 * @returns {boolean}: If all the return values of calling <function> for every 
 * element is true, return true; If even one of them returns false, return false
 *   If <function> is not provided, return true if every element is truthy, 
 * otherwise return false
 */ 


function every(collection, func) {
    if (typeof func !== 'function') {
        let result = false;
    each(collection, function(value, index, collection){
        if(value === true){
        result = true;
    };
    })
    return result;}
    

        let result = true;
     each(collection, function(value, index, collection) {
        if (!func(value, index, collection)){
            result = false;
        }
   
})
    return result
}

module.exports.every = every

/**
 * 
 * some: tests if any element returns true when passing through the 
 * function
 * 
 * @param {Object or Array} collection: over which to iterate
 * @param {Function} func: The Function to be applied to each value in the 
 * collection 
 * 
 * @returns {boolean}: If any of the return values of calling <function> on  
 * collection elements is true, return true; If all of them return false, 
 * return false; If <function> is not provided return true if at least one 
 * element is truthy, otherwise return false
 */ 


function some(collection, func) {
    let result = false;
    if (typeof func !== 'function') {
       
    each(collection, function(value, index, collection){
        if(value === true){
        result = true;
    };
    })
    return result;}
    

     each(collection, function(value, index, collection) {
        if (func(value, index, collection)){
            result = true;
        }
   
})
    return result
}
module.exports.some = some

/**
 * 
 * reduce: the single accumulated value of the given array
 * 
 * @param {Object or Array} collection: over which to iterate
 * @param {Function} func: The Function to be applied to each value in the 
 * collection 
 * @param {Seed} value:starting value 
 * 
 * @returns {value}: return single accumulated value of the given array
 */ 


function reduce(array, isFunc, seed){
  var seedUndefined = arguments.length < 3;
  each(array, function(value, index, collection){
    if(seedUndefined) {
    seedUndefined = false;
      seed = value;
    } else seed = isFunc(seed, value, index, collection);
  });
  return seed;
}
module.exports.reduce = reduce

/**
 * 
 * extend: accumulate all the objects given into the first object given
 * 
 * @param {Object} obj1: object with key/value pairs
 * @param {Object} obj2: could be multiple objects
 * 
 * @returns {object}: Return the accumulated objects into one object
 */ 


function extend(obj1, obj2){
    let args = Array.from(arguments);
    each(args, function(value, index, list) {
        Object.assign(obj1,value)
}) 
return obj1
}
module.exports.extend = extend