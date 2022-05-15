<template>
  <div style="height:90vh;">
    <iframe src="http://127.0.0.1:5500/map/mapComponent.html" frameborder="0" style="overflow:hidden;height:100%;width:100%" height="100%" width="100%"/>
  </div>
</template>

<script>
export default {
    name: "MapComponent",
    data() {
        return {
            loading: false,
        };
    },

    mounted() {},

    methods: {
        getData() { },
    }
}
</script>

