<template>
  <div class="home">
    
    <MapComponent msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MapComponent from '@/components/MapView.vue'

export default {
  name: 'HomeView',
  components: {
    MapComponent
  }
}
</script>
