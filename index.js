const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const value = (Array.isArray(collection)) ? collection : Object.values(collection)
      for (const element of value) { callback(element) }
      return collection
    },

    map: function(collection, callback) {
      const value = (Array.isArray(collection)) ? collection : Object.values(collection)
     let newCollection = []
      for (const element of value) { newCollection.push(callback(element)) }
      return newCollection

    },

    reduce: function(collection, callback, acc) {
      let newCollection = [...collection]
      if (!acc){
        acc = newCollection[0]
       newCollection = newCollection.splice(1)
      }
      
      for (const element of newCollection) {
       acc = callback(acc, element, newCollection)
      }
      return acc

    },

    find: function(collection, predicate) {
      const value = (Array.isArray(collection)) ? collection : Object.values(collection)
       for (const element of value) { if (predicate(element) === true) return element
      }
    },

    filter: function(collection, predicate) {
      const value = (Array.isArray(collection)) ? collection : Object.values(collection)
      let newCollection = []
       for (const element of value) { if (predicate(element) === true) newCollection.push(element)}
       return newCollection
    },

    size: function(collection){
      const value = (Array.isArray(collection)) ? collection : Object.values(collection)
    return value.length
    },

    first: function(array, n){
      return n ? array.slice(0,n) : array[0]
    },

    last: function(array, n){
      return n ? array.slice(n * -1) : array[array.length-1]
    },

    compact: function(array){
      let newCollection = []
      for (const element of array) { if ((element)) newCollection.push(element)}
      return newCollection
    },

    sortBy: function(array, callback){
      const newCollection = [...array]
      return newCollection.sort(function(a,b) {
        return callback(a) - callback(b)
      })
    },

    sortByUniq: function(array, isSorted, callback){
      let unique = [];

  for (let i = 0; i < array.length; i++) {
    let element = array[i];

    if (unique.indexOf(element) === -1) {
      unique.push(element);
    }
  }
  return unique
      
    },

  sortByUniqIterator: function(array, callback){
      let unique = [];

  for (let i = 0; i < array.length; i++) {
    let element = array[i];

    if (unique.indexOf(element) === -1) {
      unique.push(element);
    }
  }
  return unique
      
    },

    uniq: function(array, isSorted, callback){
     if (isSorted || !callback){
      return fi.sortByUniq(array, callback)
     }
     else{
      const iterated = []
      const uniqueOnes = []
      
      for (const value of array) {
        const iterates = callback(value)
        if (!iterated.includes(iterates)) {
          iterated.push(iterates)
          uniqueOnes.push(value)
        }
      }
      return uniqueOnes
    }

      
    },



    keys: function(object){
      return Object.keys(object)
    },

    values: function(object){
      return Object.values(object)
    },


    functions: function(object) {
     let functionNames = []
     for (const key in object) { if (typeof object[key] === "function") {
      functionNames.push(key)
    }  }

  
     return functionNames.sort()
    },



  }
})()

fi.libraryMethod()
