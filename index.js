const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (typeof collection === 'object') {
        for (let element in collection) {
          callback(collection[element], element, collection)
        }
      } else {
        collection.forEach((element, index) => {
          callback(element, index, collection)
        })
      }
      return collection
    },

    map: function(collection, callback) {
      let newArray = []
      if (typeof collection === 'object') {
        for (let element in collection) {
          newArray.push(callback(collection[element], element, collection))
        }
      } else {
        collection.forEach((element, index) => {
          newArray.push(callback(element, index, collection))
        })
      }
      return newArray
    },

    reduce: function(collection, callback, acc) {
    console.log("acc= " + acc + "collection=" + collection)
    console.log("callback= " + callback);
    let val = 0
    let currentValue = collection.reduce(callback)
    return currentValue

    },

    find: function (collection, predicate) {
    const found = collection.find(element => predicate(element))
    return found
    },

    filter: function (collection, predicate) {
      const found = collection.filter(element => predicate(element))
      return found
    },

    size: function (collection) {
      let length = Object.keys(collection).length
      return length
    },

    first: function (array, n) {
      if (!!n) {
        return array.slice(0,n)
      } else {
        return array[0]
      }
    },

    last: function (array, n) {
      if (!!n) {
        return array.slice(array.length - n)
      } else {
        return array[array.length - 1]
      }
    },

    compact: function (array) {
      let truthy = array.filter(element => !!element)
      return truthy
    },

    sortBy: function (array, callback) {
      let sorted = array.map(element => element)
      sorted.sort((a,b) => callback(a) - callback(b))
      return sorted
    },

    flatten: function (array, shallow=false) {
      if (shallow === true) {
        array.flat(2)
      } else {
        array.flat(1)
      }
      return array
    },

    uniq: function (array, isSorted, callback) {
    let arrayUnique = function(array) {
      return array.filter(function(item, index) {
        return array.indexOf(item) === index
      }, callback)
    }
    let unique = arrayUnique(array)
    return unique
    },

    keys: function (object) {
      return Object.keys(object)
    },

    values: function (object) {
      return Object.values(object)
    },

    functions(object) {
      return Object.getOwnPropertyNames(object).filter(item => typeof object[item] === 'function')
    }
  }
})()

fi.libraryMethod()
