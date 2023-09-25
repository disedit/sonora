<template>
  <article :class="['concert', `venue-${concert.venue}`, { dimmed: inThePast }]">
    <h3 class="concert-artists">
      <div v-for="({ sys: { id }, fields: artist }) in concert.artists" :key="id" class="concert-artist">
        <nuxt-link :to="`/artistes/${artist.slug}`" class="artist-name">
          <img v-if="artist.image && artist.image.fields" :src="`${artist.image.fields.file.url}?w=200&h=200`" alt="">
          <div v-else class="placeholder" />
          {{ artist.name }}
        </nuxt-link>
      </div>
    </h3>

    <div class="concert-date-time">
      <div class="reckless concert-date">
        {{ concert.date | niceDate }}
      </div>
      <div class="concert-time">
        {{ concert.date | niceTime }}
      </div>
    </div>

    <div class="concert-location">
      <div class="concert-municipality">
        {{ municipality }}
      </div>
      <div class="concert-venue">
        {{ concert.venue }}
      </div>
    </div>

    <div class="concert-book">
      <span v-if="inThePast" class="text reckless">
        Concert realitzat
      </span>
      <a
        v-else-if="concert.tickets_url"
        :href="concert.tickets_url"
        class="concert-link"
        target="_blank"
        rel="noopener noreferer"
      >
        Entrades
      </a>
      <span v-else class="text reckless">
        {{ concert.text || 'Entrades properament' }}
      </span>
    </div>
  </article>
</template>

<script>
import { niceDate, niceTime } from '@/plugins/nicedate'

export default {
  name: 'Concert',

  filters: {
    niceDate (datetime) {
      return niceDate(datetime)
    },

    niceTime (datetime) {
      return niceTime(datetime)
    }
  },

  props: {
    concert: {
      type: Object,
      required: true
    }
  },

  computed: {
    inThePast () {
      const now = new Date()
      const concert = new Date(this.concert.date)

      return now > concert
    },

    municipality () {
      return this.$store.state.venues[this.concert.municipality]
    }
  }
}
</script>

<style lang="scss" scoped>
.concert {
  display: grid;
  grid-template-columns: 1fr 100px 350px 200px;
  font-size: $text-md;
  gap: 1rem;
  align-items: center;

  &-artists {
    display: flex;
    margin: 0;
    column-gap: 1.5rem;

    .artist-name {
      display: flex;
      align-items: center;
      gap: .75rem;
      font-size: 2.3rem;
      text-decoration: none;
      line-height: .9;

      img {
        display: block;
        height: 75px;
        width: 100px;
        object-fit: cover;
        flex-shrink: 0;
      }

      .placeholder {
        height: 75px;
        width: 100px;
        background: gray;
      }
    }
  }

  &-date-time {
    line-height: 1.1;
  }

  &-location {
    line-height: 1.1;
  }

  &-municipality {
    text-transform: uppercase;
  }

  &-book {
    line-height: 1.1;
    text-align: center;
  }

  &-link {
    display: block;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

@include media-breakpoint-up(lg) {
  .concert {
    &:hover {
      background: var(--venue-color);
    }
  }
}

@include media-breakpoint-down(lg) {
  .concert {
    grid-template-columns: 1fr;
    padding: $mobile-padding;
    font-size: 1.25rem;

    &-artists {
      flex-direction: column;

      .artist-name {
        img {
          display: none;
        }
      }
    }

    &-book {
      text-align: left;

      .text {
        display: block;
        margin-top: 1rem;
      }
    }

    &-link {
      text-align: center;
      padding: .75rem 1rem;
      border: 1px $black solid;
      border-radius: 2rem;
    }
  }
}
</style>
