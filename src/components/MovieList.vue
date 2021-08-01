<template>
  <div>
    <div
      v-for="movie in movies"
      :key="movie.imdbID">
      {{ movie.Title }}
    </div>
  </div>
</template>

<script>
import  { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('movie', [
      'movies'
    ])
  }
}
</script>