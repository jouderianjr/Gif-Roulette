import axios from 'axios'

const API_KEY = '76792192255c42c3a11c58ea1acfbe27'
const BASE_URL = 'https://api.giphy.com/v1/gifs/'

export const searchGif = (term) => {
  const offset = Math.floor(Math.random() * 1000)
  const url = `${BASE_URL}search?api_key=${API_KEY}&limit=25&offset=${offset}&q=${term}`

  return axios.get(url)
    .then( response => response.data.data )
}
