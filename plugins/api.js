import client from './contentful'

class API {
  async getArtists () {
    const { items } = await client.getEntries({
      content_type: 'artist',
      select: 'fields.name,fields.slug,fields.image',
      order: 'fields.order'
    })

    return items
  }

  async getArtist (slug) {
    const { items } = await client.getEntries({
      content_type: 'artist',
      'fields.slug': slug
    })

    return items
  }

  async getArtistConcerts (slug) {
    const { items } = await client.getEntries({
      'content_type': 'concert',
      'fields.artists[exists]': slug,
      order: '-fields.date'
    })

    return items
  }

  async getArtistNames () {
    const artists = {}

    const { items } = await client.getEntries({
      content_type: 'artist',
      select: 'fields.name,fields.slug',
      order: 'fields.order'
    })

    items.forEach(({ fields: artist }) => {
      artists[artist.slug] = artist
    })

    return artists
  }

  async getConcerts (municipality) {
    const query = {
      'content_type': 'concert',
      order: 'fields.date'
    }

    if (municipality) {
      query['fields.municipality'] = municipality
    }

    const { items } = await client.getEntries(query)
    return items
  }

  async nextGig () {
    const today = new Date()
    const { items } = await client.getEntries({
      'content_type': 'concert',
      order: '-fields.date',
      'fields.date[gte]': today,
      limit: 1
    })

    return items
  }
}

export default ({ app }, inject) => {
  const api = new API()
  inject('api', api)
}
