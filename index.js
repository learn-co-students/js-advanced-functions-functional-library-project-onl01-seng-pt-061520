const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(col, cb) {
      const dup = (col instanceof Array) ? col.slice() : Object.values(col)

      for (const elmnt of dup) { cb(elmnt) }

      return col
    },

    map: function(col, cb) {
      if (!(col instanceof Array)) {
        col = Object.values(col)
      }

      const mapped = []

      for(const elmnt of col) { mapped.push(cb(elmnt))}

      return mapped
    },

    reduce: function(col, cb, memo) {
      let dup = col.slice(0)
      
      if (!memo) {
        memo = dup[0]
        dup = dup.slice(1)
      }

      for (const elmnt of dup) {
        memo = cb(memo, elmnt)
      }
      
      return memo
    },

    find: function(col, test) {
      if (!(col instanceof Array)) {
        col = Object.values(col)
      }

      for (const elmnt of col) {
        if (test(elmnt) === true) return elmnt
      }
      
      return undefined
    },

    filter: function(col, test) {
      const passing = []
      
      for (const elmnt of col) {
        if (test(elmnt) === true) passing.push(elmnt)
      }

      return passing
    },

    size: function(col) {
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
      return end ? col.slice(0, end) : col[0]
    },

    last: function(col, start) {
      return start ? col.slice( col.length - start, col.length) : col[col.length - 1]
    },
    
    compact: function(col) {
      const bad = new Set([null, false, 0, "", undefined, NaN])
      return col.filter(elmnt => !bad.has(elmnt))
    },

    sortBy: function(col, cb) {
      const sol = [...col]
      return sol.sort(function(a,b) {
        return cb(a) - cb(b)
      })
    },

    unpack: function(reciever, arr) {
      for (const elmnt of arr)
        reciever.push(elmnt)
    },

    flatten: function(col, shallow, arr = []) {
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
      return Object.keys(obj)      
    }, 

    values: function(obj) {
      return Object.values(obj)
    }, 

    functions: function(obj) {
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
