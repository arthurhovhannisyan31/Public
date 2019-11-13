/**
 * localStorage handler
 * @returns {*}
 */
export const localeStorage = () => typeof(Storage) !== 'undefined'
  ? {
    setItem: (key, value) => localStorage.setItem(key, value),
    getItem: (key) => localeStorage.getItem(key),
    removeItem: (key) => localeStorage.removeItem(key),
    clear: () => localeStorage.clear(),
    key: (key) => localeStorage.key(key)
  }
  : () => {throw new Error('No web storage Support.')}


