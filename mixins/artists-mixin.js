import concerts from '@/pages/artists/concerts'
import artists from '@/pages/artists/artists'

export default {
  data () {
    return {
      concerts,
      fullConcerts: null
    }
  },

  methods: {
    setFullConcerts (filter) {
      const filteredConcerts = filter
        ? this.concerts.filter((concert) => {
          return concert.artists.includes(filter)
        })
        : this.concerts

      const fullConcerts = filteredConcerts.map((concert) => {
        const fullArtists = []

        concert.artists.forEach((artist) => {
          const artistInfo = artists.find((elem) => {
            return elem.id === artist
          })
          if (artistInfo) {
            fullArtists.push(artistInfo)
          } else {
            fullArtists.push({ id: artist, name: artist, image: '', noLink: true })
          }
        })

        return {
          ...concert,
          fullArtists
        }
      })

      this.fullConcerts = fullConcerts
    }
  }
}
