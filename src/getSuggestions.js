import { memoize } from 'cerebro-tools'

/**
 * Get DuckDuckGo suggestions for entered query
 * TODO: change DDG suggestions to Brave suggestions
 * @param  {String} query
 * @return {Promise}
 */
const getSuggestions = (query) => {
  const url = `https://duckduckgo.com/ac/?q=${query}`
  return fetch(url)
    .then(response => response.json())
    .then(items => items.map(i => i.phrase))
}


export default memoize(getSuggestions, {
  length: false,
  promise: 'then',
  // Expire translation cache in 30 minutes
  maxAge: 30 * 60 * 1000,
  preFetch: true
})
