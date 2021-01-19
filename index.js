const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(col, callBack) {
      //Iterates over a collection of elements, passing each element in turn to a callback function. Each invocation of callback is called with three arguments: (element, index, collection). If collection is a JavaScript object, callback's arguments will be (value, key, collection). Returns the original collection for chaining.

      const dup = (col instanceof Array) ? col.slice() : Object.values(col)
      for (const elmnt of dup) { callBack(elmnt) }
      return col
    },

    map: function(col, callBack) {
      //Produces a new array of values by mapping each value in collection through a transformation function (callback). The callback is passed three arguments: the value, then the index (or key) of the iteration, and finally a reference to the entire collection. Returns a new collection for chaining without modifying the original.
      if (!(col instanceof Array)) {
        col = Object.values(col)
      }
      const mapped = []
      for(const elmnt of col) { mapped.push(callBack(elmnt))}
      return mapped
    },

    reduce: function(col, callBack, memo) {
      //Reduce boils down a collection of values into a single value. Acc (short for accumulator) starts as the initial state of the reduction, and with each successive step it should be accumulate the return value of callback. The callback is passed three arguments: the acc, the current value in our iteration (the element in the array), and finally a reference to the entire collection.
      let dup = col.slice(0)
      
      if (!memo) {
        memo = dup[0]
        dup = dup.slice(1)
      }
      for (const elmnt of dup) {
        memo = callBack(memo, elmnt)
      }
      return memo
    },

    find: function(col, test) {
      //Looks through each value in the collection, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire collection.
      if (!(col instanceof Array)) {
        col = Object.values(col)
      }
      for (const elmnt of col) {
        if (test(elmnt) === true) return elmnt
      }
      return undefined
    },

    filter: function(col, test) {
      //Looks through each value in the collection, returning an array of all the values that pass a truth test (predicate).
      const passing = []     
      for (const elmnt of col) {
        if (test(elmnt) === true) passing.push(elmnt)
      }
      return passing
    },

    size: function(col) {
      //Return the number of values in the collection.
      if (!(col instanceof Array)) {
        col = Object.keys(col)
      }
      let count = 0
      for (const elmnt of col) {
        count++
      }
      return count
    },

    first: function(col, end) {
      //Returns the first element of an array. Passing n will return the first n elements of the array.
      return end ? col.slice(0, end) : col[0]
    },

    last: function(col, start) {
      //Returns the last element of an array. Passing n will return the last n elements of the array.
      return start ? col.slice( col.length - start, col.length) : col[col.length - 1]
    },
    
    compact: function(col) {
      //Returns a copy of the array with all falsy values removed. In JavaScript, false, null, 0, "", undefined and NaN are all falsy.
      const bad = new Set([null, false, 0, "", undefined, NaN])
      return col.filter(elmnt => !bad.has(elmnt))
    },

    sortBy: function(col, callBack) {
      //Returns a sorted copy of array, ranked in ascending order by the results of running each value through callback. The values from the original array should be retained within the sorted copy, just in ascending order.
      const sol = [...col]
      return sol.sort(function(a,b) {
        return callBack(a) - callBack(b)
      })
    },

    unpack: function(reciever, arr) {
      for (const elmnt of arr)
        reciever.push(elmnt)
    },

    flatten: function(col, shallow, arr = []) {
      //fi.flatten(array, [shallow]) Flattens a nested array (the nesting can be to any depth).
      //If you pass true for the second argument, the array will only be flattened a single level.
      if (!Array.isArray(col)) return arr.push(col)
      if (shallow) {
        for (const elmnt of col) {
          Array.isArray(elmnt) ? this.unpack(arr, elmnt) : arr.push(elmnt)
        }
      } else {
        for (const elmnt of col) {
          this.flatten(elmnt, false, arr)
        }
      }
      return arr
    },

    uniqSorted: function(col, iterate) {
      const sorted = [col[0]]
      for (let i = 1; i < col.length; i++) {
        if (sorted[i-1] !== col[i]) {
          sorted.push(col[i])
        }
      }
      return sorted
    },

    uniq: function(col, sorted = false, iterate = false) {
      //Produces a duplicate-free version of the array, using === to test object equality. In particular only the first occurrence of each value is kept.
      if (sorted) {
        return fi.uniqueSorted(col, iterate)
      } else if (!iterate) {
        return Array.from(new Set(col))
      } else {
        const mods = new Set()
        const uniqs = new Set()
        
        for (const val of col) {
          const mod = iterate(val)
          if (!mods.has(mod)) {
            mods.add(mod)
            uniqs.add(val)
          }
        }

        return Array.from(uniqs)
      }
    },

    keys: function(obj) {
      //Retrieve all the names of the object's own enumerable properties.
      return Object.keys(obj)      
    }, 

    values: function(obj) {
      //Return all of the values of the object's own properties.
      return Object.values(obj)
    }, 

    functions: function(obj) {
      //Returns a sorted collection of the names of every function in an object — that is to say, the name of every property whose value is a function.
      const names = []
      for (const key in obj) {
        if (typeof obj[key] === "function") {
          names.push(key)
        }
      }
      return names.sort()
    }
  }
})()

fi.libraryMethod()
