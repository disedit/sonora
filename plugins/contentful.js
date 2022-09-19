const contentful = require('contentful')

module.exports = contentful.createClient({
  space: process.env.NUXT_ENV_CTF_SPACE_ID_2022,
  accessToken: process.env.NUXT_ENV_CTF_ACCESS_TOKEN_2022
})
