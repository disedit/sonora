<template>
  <main class="artists">
    <h1 class="visually-hidden">
      Artistes
    </h1>
    <div class="artist-grid">
      <div v-for="(artists, i) in rows" :key="i" class="artist-row">
        <div
          v-for="{ fields: artist } in artists"
          :key="artist.slug"
          :class="['artist', `artist-${artist.slug}`, `artist-color-${artist.color2}`, { empty: !artist.name }]"
        >
          <nuxt-link :to="`/artistes/${artist.slug}`" v-if="artist.name">
            <span>{{ artist.name }}</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ $api }) {
    const artists = await $api.getArtists()

    // insert empty spaces
    const spaces = [3, 13, 14, 19, 21, 24]
    spaces.forEach((index) => {
      artists.splice(index, 0, { fields: { name: null, slug: `empty-${index}` } })
    })

    // Split into rows
    const rows = []
    for (let i = 0; i < artists.length; i += 2) {
      const chunk = artists.slice(i, i + 2)
      rows.push(chunk)
    }

    return { rows }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../sass/variables';

  .artist {
    text-align: center;

    a {
      display: block;
      text-transform: uppercase;
      text-decoration: none;
      font-size: clamp(2rem, 5vw, 4.5rem);
      font-weight: 300;
      padding: 0 $viewport-x-padding;

      span {
        position: relative;
        top: .125em;
      }

      &:active {
        background: $gray;
      }
    }

    @each $name, $color in $colors {
      &-color-#{$name} a:hover {
        background: $color;
      }
    }
  }

  @include media-breakpoint-up(md) {
    .artist-row {
      display: flex;

      &:not(:last-child) {
        border-bottom: 2px $black solid;
      }

      .artist {
        flex-grow: 1;

        &:first-child {
          text-align: left;
          border-right: 2px $black solid;
        }

        &:last-child {
          text-align: right;
        }
      }
    }

    .artist-maluks,
    .artist-sandra-monfort,
    .artist-ding-dong-system {
      flex-grow: 0 !important;

      a {
        padding-right: 4.5vw;
      }
    }

    .artist-marcel-el-marcia,
    .artist-zoo {
      flex-grow: 0 !important;

      a {
        padding-left: 4.5vw;
      }
    }

    .artist-santero-y-los-muchachos {
      border-right: 0 !important;
    }

    .artist-empty-21 {
      display: none;
    }
  }

  @include media-breakpoint-down(md) {
    .artist-row:not(:last-child) .artist {
      border-bottom: 1px $black solid;
    }

    .artist a {
      padding: .5em .25em;
    }

    .empty {
      display: none;
    }
  }
</style>
