import client from '@/plugins/contentful'

export const state = () => ({
  venues: {
    peniscola: 'Peníscola',
    bocairent: 'Bocairent',
    castello: 'Castelló',
    alcoi: 'Alcoi',
    'castello-jazz': 'Castelló Jazz',
    alacant: 'Alacant'
  },
  artists: []
})

export const mutations = {
  setArtists (state, artists) {
    state.artists = artists
  }
}

export const actions = {
  async getArtists ({ commit }) {
    const artists = {}

    const { items: artistsList } = await client.getEntries({
      content_type: 'artist',
      select: 'fields.name,fields.slug',
      order: 'fields.order'
    })

    artistsList.forEach(({ fields: artist }) => {
      artists[artist.slug] = artist
    })

    commit('setArtists', artists)
  }
}
