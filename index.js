const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.split() : Object.values(collection);

      for (let i = 0; i < newCollection.length; i++ ) {
        callback(newCollection[i]);
      }
      return collection;
    },

    map: function(collection, callback) {

      if (!(collection instanceof Array)) {
         collection = Object.values(collection)
      }

      const newCollection = []
      
      for (let i = 0; i < collection.length; i++) {
        newCollection.push(callback(collection[i]));
      }
      
      return newCollection;
    },

    reduce: function(collection, callback, acc = 0) {
      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }
      for (let i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }

      return acc

    },

    find: function(collection, callback) {
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i])) {
          return collection[i];
        }
      }
      return undefined;
    },

    filter: function(collection, callback) {
      let results = []
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i])) {
          results.push(collection[i]);
        }
      }
      return results
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.split() : Object.values(collection).length;
    },
    
    first: function(array, n) {
      let newArray = (n > 1) ? array.slice(0, n) : array[0]
      return newArray
    },

    last: function(array, n) {
      let newArray = (n > 1) ? array.slice(-n) : array[array.length - 1]
      return newArray
    },

    compact: function(array) {
      let newArray = []
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          newArray.push(array[i])
        }
      }
      return newArray
    },

    sortBy: function(array, callback) {
      let newArray = [...array]
      return newArray.sort((a, b) => callback(a) - callback(b))
    },

    flatten: function(array, shallow = false) {
      let newArray = []
      for (let i = 0; i < array.length; i++) {
        let value;
        if (typeof array[i] !== "number" && !shallow) {
          value = this.flatten(array[i])
        } else {
          value = array[i]
        }
        newArray = newArray.concat(value);
      }
      return newArray
    },

    uniqSorted: function(array, callback) {
      const sorted = [array[0]]

      for (let i = 1; i < array.length; i++) {
        if (sorted[i - 1] !== array[i]) {
          sorted.push(array[i])
        }
      }
      return sorted
    },

    uniq: function(array, sorted = false, callback = false) {
      if (sorted) {
        return this.uniqSorted(array, callback)
      } else if (!callback) {
        return Array.from(new Set(array))
      } else {
        const modifiedValues = new Set()
        const uniqValues = new Set()

        for (let value of array) {
          const moddedValues = callback(value)
          if (!modifiedValues.has(moddedValues)) {
            modifiedValues.add(moddedValues)
            uniqValues.add(value)
          }
        }
        return Array.from(uniqValues)
      }
    },

    keys: function(object) {
      const keys = []
      for (const key in object) {
        keys.push(key)
      }
      return keys
    },

    values: function(object) {
      const values = []
      for (const key in object) {
        values.push(object[key])
      }
      return values
    },

    functions: function(object) {
      let newArray = []
      for (const key in object) {
        if (typeof object[key] === "function") {
          newArray.push(key)
        }
      }
      return newArray.sort()
    }
  }
})()

fi.libraryMethod()
