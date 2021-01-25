const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let j = 0;
      if (Array.isArray(collection)) {
        for (const i of collection) {
          callback(i, j, collection);
          j ++;
        }
        
      }
      else {
        for (const i of Object.keys(collection)) {
          callback(i, collection[i], collection);
        }
        
      }
      return collection
    },

    map: function(collection, callback) {
      let j = 0;
      let newArray = [];
      if (Array.isArray(collection)) {
        for (const i of collection) {
          newArray.push(callback(i, j, collection));
          j ++;
        }
        
        
      }
      else {
      for (const i of Object.keys(collection)) {
          newArray.push(callback(collection[i], i, collection))
      }
    }
    return newArray
    },

    reduce: function(collection, callback, acc) {
      let endValue = 0;
      if (acc) {
        endValue = acc;
      }
      else {
        endValue = collection[0]
        collection = collection.slice(1)
      }
      for (const i of collection) {
        endValue = callback(endValue, i, collection);
      }
      
      return endValue;
    },

    find: function(collection, predicate) {
      for (const i of collection) {
        if (predicate(i)) {
          return i;
        }
      }
      return undefined;
    },

    filter: function(collection, predicate){
      let trueArray = [];
      for (const i of collection) {
        if (predicate(i)) {
          trueArray.push(i);
        }
      }
      return trueArray;
    },

    size: function(collection) {
      let j = 0;
      if (Array.isArray(collection)) {
        for (const i of collection) {
          j ++
        }
      }
      else {
        for(const i in collection) {
          j++;
        }
      }
    return j;
    },

    first: function(array = [], n=1){
      if (n === 1){
        return array[0];
      }
      else {
        let i = 0;
        let endArray = [];
        while(i < n) {
          endArray.push(array[i]);
          i ++;
        }
        return endArray
      }
      
    },

    last: function(array = [], n=1){
      if (n === 1){
        return array[fi.size(array) - 1];
      }
      else {
        let i = 0;
        let endArray = [];
        while(i < n) {
          endArray.unshift(array[fi.size(array) - i - 1]);
          i ++;
        }
        return endArray;
      }
      
    },

    compact: function(array) {
      let newArray = [];
      for (const i of array) {
        if (i) {
          newArray.push(i);
        }

      }
      return newArray;
    },

    // sorter: function(array) {
    //   let midVal = array[Math.floor(fi.size(array)/2)-1]
    //   let leftArray = [];
    //   let rightArray = [];
    //   if (fi.size(array) <= 1){
    //     return array;
    //   }
    //   else if (fi.size(array) === 2) {
    //     if (array[0] > array[1]) {
    //       return [array[1], array[0]]
    //     }
    //     else {
    //       return [array[0], array[1]]
    //     }
    //   }
    //   else {
    //     for (const i of array) {
    //       if (i <= midVal) {
    //         leftArray.push(i)
    //       }
    //       else {
    //         rightArray.push(i)
    //       }
    //     }
      
     
    //   return fi.sorter(leftArray).concat(fi.sorter(rightArray));
    //   }
    // }, 

    sortBy: function(array, callback){
      let newArray = [];
      
      
      if (typeof array[0] !== "number") {
        for (const i of array) { 
          newArray.push(callback(i));
        }
        return newArray.sort();
      }
      else {
        for (const i of array) {
          newArray.push([i, callback(i)])}
          let newerArray = newArray.sort(function(a,b){return a[1]-b[1]});
          let newestArray = [];
          for (const j of newerArray) {
            newestArray.push(j[0])
          }
          return newestArray;
      }
    
    },

    flatten: function(array, shallow = false) {
      let newArray = [];
      if (shallow === true) {
        for (const i of array) {
          if (Array.isArray(i)) {
            for (const j of i) {
              newArray.push(j);
            }
          }
          else {
            newArray.push(i);
          }
        }
      }
      else {
        for (const i of array) {
          if (Array.isArray(i)) {
            newArray = newArray.concat(fi.flatten(i))
          }
          else {
            newArray.push(i)
          }
        }
      }
      return newArray;
    },

    uniq: function(array, isSorted = false, callback = function(val) {return val}) {
      let newArray = array;
      let i = 0; 
      let j = 0;
      while (i < fi.size(newArray)) {
        j = i + 1;
        while (j < fi.size(newArray)) {
          if (callback(newArray[i]) === callback(newArray[j])) {
            newArray.splice(j, 1);
            if (callback(newArray[i]) === callback(newArray[j])) {
              newArray.splice(j, 1);
            }
          }
          j++;
        }
        i++;
      }
      
      return newArray;
    },

    keys: function(objec){
      let newArray = [];
      for (const i in objec) {
        newArray.push(i);
      }
      return newArray;
    },

    values: function(objec){
      let newArray = [];
      for (const i in objec) {
        newArray.push(objec[i]);
      }
      return newArray;
    },

    functions: function(obbo) {
      let newArray = [];
      for (const i in obbo) {
        if (typeof obbo[i] === "function") {
          newArray.push(i);
        }
      }
      return newArray;
    },

  }
})()

fi.libraryMethod()
