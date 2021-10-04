import client from './contentful'

class API {
  async getArtists () {
    const { items } = await client.getEntries({
      content_type: 'artist',
      select: 'fields.name,fields.slug,fields.image',
      // order: 'fields.order'
      order: 'fields.name'
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

  async getArtistConcerts (id) {
    const { items } = await client.getEntries({
      'content_type': 'concert',
      'fields.artists.sys.id': id,
      order: 'fields.date'
    })

    return items
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
      order: 'fields.date',
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
