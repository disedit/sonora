<template>
  <section :class="['venue', `venue-${venue.key}`]">
    <h2 class="venue-name reckless">
      {{ venue.name }}
    </h2>
    <ul class="venue-artists">
      <li
        v-for="artist in venue.artists"
        :key="artist.name"
      >
        {{ artist.name }}
      </li>
    </ul>
    <img
      :src="flowers[venue.key]"
      alt=""
      class="venue-flower"
    >
  </section>
</template>

<script>
import GuardamarFlower from '@/assets/images/illustrations/guardamar.png'
import GeldoFlower from '@/assets/images/illustrations/geldo.png'
import CastelloFlower from '@/assets/images/illustrations/castello.png'
import AlacantFlower from '@/assets/images/illustrations/alacant.png'

export default {
  props: {
    venue: {
      type: Object,
      required: true
    }
  },

  computed: {
    flowers () {
      return {
        guardamar: GuardamarFlower,
        geldo: GeldoFlower,
        castello: CastelloFlower,
        alacant: AlacantFlower
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.venue {
  display: flex;
  flex-direction: column;
  background-size: 100% 100%;
  font-size: $text-xl;
  flex-shrink: 0;
  overflow: hidden;
  user-select: none;

  &-name {
    font-size: inherit;
    line-height: .9;
    opacity: 0;
    transition: .25s ease-in-out;
    padding: 2.5rem $viewport-x-padding;
    padding-bottom: 0;
    margin-bottom: 1.25rem;
  }

  &-artists {
    list-style: none;
    padding: 0;
    margin: 0;
    line-height: 1;
    opacity: 0;
    transition: .35s ease-in-out;
    padding: 0 $viewport-x-padding;

    li {
      margin-bottom: .15em;
    }

    a {
      display: block;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }

      &:focus-visible {
        outline: 4px $blue solid;
      }
    }
  }

  &-flower {
    width: 100%;
    margin-top: auto;
    opacity: 0;
    transition: .5s ease-in-out;
  }

  &:hover,
  &:focus-within {
    .venue-artists,
    .venue-name,
    .venue-flower {
      opacity: 1;
    }
  }
}

.venue-guardamar {
  background-image: url(../assets/images/gradients/guardamar.jpg);

  .venue-flower {
    transform: translateX(-30%);
    width: 120%;
  }
}

.venue-geldo {
  background-image: url(../assets/images/gradients/geldo.jpg);

  .venue-flower {
    transform: translateX(2%);
    width: 120%;
  }
}

.venue-castello {
  background-image: url(../assets/images/gradients/castello.jpg);

  .venue-flower {
    transform: translateX(-5%);
    width: 135%;
  }
}

.venue-alacant {
  background-image: url(../assets/images/gradients/alacant.jpg);

  .venue-flower {
    width: 145%;
  }
}
</style>
