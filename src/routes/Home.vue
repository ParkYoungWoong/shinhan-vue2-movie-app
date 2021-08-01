<template>
  <div>
    <Search />
    <MovieList />
  </div>
</template>

<script>
import Search from '@/components/Search'
import MovieList from '@/components/MovieList'

export default {
  components: {
    Search,
    MovieList
  }  
}
</script>