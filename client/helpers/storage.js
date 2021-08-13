const storage = sessionStorage;
export default {
    get: key => {
      const value = storage.getItem(key)
      try {
        return value && value !== 'undefined' && JSON.parse(value)
      } catch {
        return undefined
      }
    },
    set: (key, value) => {
      storage.setItem(key, JSON.stringify(value))
    },
    remove: key => {
      storage.removeItem(key)
    },
  }
  