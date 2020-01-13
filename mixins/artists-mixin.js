import concerts from '@/content/concerts'
import artists from '@/content/artists'

export default {
  data () {
    return {
      concerts,
      fullConcerts: null,
      fullUpcomingConcerts: null,
      fullPastConcerts: null
    }
  },

  methods: {
    setFullConcerts (filter, upcoming) {
      const today = new Date()
      const filteredConcerts = filter
        ? this.concerts.filter((concert) => {
          return concert.artists.includes(filter)
        }) : upcoming ? this.concerts.filter((concert) => {
          return today <= concert.utc
        }) : this.concerts.filter((concert) => {
          return today > concert.utc
        })

      console.log(filteredConcerts)

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

      if (filter) {
        this.fullConcerts = fullConcerts
      } else if (upcoming) {
        this.fullUpcomingConcerts = fullConcerts
      } else {
        this.fullPastConcerts = fullConcerts
      }
    }
  }
}
