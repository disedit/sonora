import artists from '@/content/artists'

export const state = () => ({
  artist: null,
  artists
})

export const mutations = {
  updateArtist (state, payload) {
    state.artist = payload
  }
}

export const actions = {
  setArtist ({ commit }, routeName) {
    const artist = artists.find(artist => `artists-${artist.id}` === routeName)
    commit('updateArtist', artist)
  }
}
