const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const iterable = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      for (const element of iterable) {
        callback(element);
      }
      return collection;
    },

    map: function(collection, callback) {
      const iterable = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      const mapped = [];
      for (const element of iterable) {
        mapped.push(callback(element));
      }
      return mapped;
    },

    reduce: function(collection, callback, accumulator) {
      let iterable = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      if (!!accumulator) {
      } else {
        accumulator = iterable[0];
        iterable = iterable.slice(1);
      }
      for (const element of iterable) {
        accumulator = callback(accumulator, element, collection);
      }
      return accumulator;
    },

    find: function(collection, predicate) {
      const iterable = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      for (const element of iterable) {
        if (predicate(element)) {
          return element;
        }
      }
    },

    filter: function(collection, predicate) {
      const iterable = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      const filtered = [];
      for (const element of iterable) {
        if (predicate(element)) {
          filtered.push(element);
        }
      }
      return filtered;
    },

    size: function(collection) {
      const iterable = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      return iterable.length
    },

    first: function(array, n=1) {
      const first = [];
      if (n === 1) {
        return array[0];
      } else {
        for (const element of array) {
          if (first.length === n) {
            break;
          } else {
            first.push(element);
          }
        }
      }
      return first;
    },

    last: function(array, n=false) {
      return (n) ? array.slice(array.length - n, array.length) : array[array.length - 1]
    },

    compact: function(array) {
      const compacted = [];
      for (const element of array) {
        if (!!element) {
          compacted.push(element);
        }
      }
      return compacted;
    },

    sortBy: function(array, callback) {
      const newArray = [...array];
      return newArray.sort((a, b) => {
        return callback(a) - callback(b);
      });
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!(collection instanceof Array)) {
        return newArr.push(collection);
      }
      if (shallow) {
        for (let val of collection)
          if (val instanceof Array) {
            for (const inner of val) {
              newArr.push(inner);
            }
          } else {
            newArr.push(val);
          }
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr);
        }
      }
      return newArr;
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
