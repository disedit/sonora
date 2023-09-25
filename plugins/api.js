import client from './contentful'

class API {
  async getArtists ({ order }) {
    const { items } = await client.getEntries({
      content_type: 'artist',
      select: 'fields.name,fields.slug,fields.venue,fields.hover,fields.image',
      order
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

  async getAboutPage () {
    const page = await client.getEntry(process.env.NUXT_ENV_CTF_ABOUT_ENTRY_ID_2023)
    return page
  }
}

export default ({ app }, inject) => {
  const api = new API()
  inject('api', api)
}
