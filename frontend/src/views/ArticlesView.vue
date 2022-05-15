<template>
<h1>Artíuclos Destacados</h1>
  <FishCarousel />
</template>

<script>
// @ is an alias to /src
import FishCarousel from "@/components/FishCarousel.vue";

export default {
  name: "HomeView",
  components: {
    FishCarousel,
  },
};
</script>

<style scoped>

h1 {
	text-transform: uppercase;
	font-family: "Fjalla One", sans-serif;
	font-size: 32px;
    text-align:center;
    margin:20px auto 0 auto;
    color: #011638;
}
</style>

