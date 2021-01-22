const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let array = (Array.isArray(collection)) ? collection : Object.values(collection)

      for (let ind = 0; ind < array.length; ind++) {
        callback(array[ind]);
      }  
      return collection
    },

    map: function(collection, callback) {
      let array = (Array.isArray(collection)) ? collection : Object.values(collection)
      let newArr = []
      for (let index = 0; index < array.length; index++) {
        newArr.push(callback(array[index])) 
      }
      return newArr
    },

    reduce: function(collection, callback, acc) {
      let array = (Array.isArray(collection)) ? collection : Object.values(collection)
      let total;
      if (acc === undefined){
        acc = array[0]
        array = array.slice(1)
      }
      for (let index = 0; index <array.length; index++) {

        acc = callback(acc, array[index], array); 

      }
      return acc
    },

    find: function(collection, predicate) {
      let array = (Array.isArray(collection)) ? collection : Object.values(collection)
      let result;
      for (let index = 0; index < array.length; index++) {
        if (predicate(array[index])){
          result = array[index]
          break
        }
      }
      return result
    },

    filter: function (collection, predicate) {
      if (!Array.isArray(collection)) {
        collection = Object.values(collection)
      }
      let matches = []
      for (let ind = 0; ind < collection.length; ind++) {
        if (predicate(collection[ind])) {
          matches.push(collection[ind])
        } 
      }
      return matches
    },


    size: function(collection) {
      return  Array.isArray(collection) ? collection.length : Object.values(collection).length
    },

    first: function (array, n=false) {
      return (n) ? array.slice(0, n) : array[0]
    },

    last: function (array, n=false) {
      return (n) ? array.slice(n-2) : array[array.length -1]
    },

    compact: function (array) {
      let compacted = [];
      for (let i = 0; i < array.length; i++) {
        if (!!array[i]) {
          compacted.push(array[i])
        }  
      }
      return compacted
    },

    sortBy: function (array, callback) {
      let sorted = [array[0]]
      for (let i = 1; i < array.length; i++) { 
        for (let j = 0; j < sorted.length; j++) {
          if (callback(array[i]) < callback(sorted[j])) {
            sorted.splice(j, 0, array[i])
            break
          } else if (j === sorted.length - 1){
            sorted.push(array[i])
            break
          }
        }
      }
      return sorted
    },

    flatten: function (array, shallow = false) {
      let flatArr = []
      if (shallow) {
        flatArr = array.flat(1)
      }else{
        flatArr = array.flat(5)
      }
      return flatArr 
    },


    uniq: function (array, sorted, callback) {
      let unique = [array[0]];
      if (callback){
        let results = [callback(array[0])]
        for (let i = 1; i < array.length; i++) {
          if (!results.includes(callback(array[i]))){
            results.push(callback(array[i]));
            unique.push(array[i])
          }
        }
      } else {
        for (let i = 1; i < array.length; i++) {
          if (!unique.includes(array[i])){
            unique.push(array[i])
          }
        }
      }
      return unique
    },

    keys: function (object) {
      let keys = [];
      for (let key in object) {
        keys.push(key)
      }
      return keys
    },

    values: function (object) {
      let values = [];
      for (let value in object) {
        values.push(object[`${value}`])
      }
      return values
    },
    functions: function(obj) {
      let funcs = []
      for (let key in obj) {
        if (typeof obj[key] === "function") {
          funcs.push(key)
        }
      }


      let sortedFuncs = funcs.sort() 
      return sortedFuncs
    }
  }
})()

fi.libraryMethod()
