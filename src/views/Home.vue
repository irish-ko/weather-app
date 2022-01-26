<template>
  <div id="app">
    <Weather @routWaether="goPageWeather"/>
  </div>
</template>

<script>
  import Weather from '@/components/Weather.vue'

  export default {
      name : 'Home',
      // router,
      methods : {
          goPageWeather(citi){

              this.$store.commit({
                  type : 'setName',
                  name: citi
              });

              this.$router.push({ path: '/loading', query: { name: citi } })
          }
      },
      components: {
          Weather
      }
  }
</script>

<style>

</style>
