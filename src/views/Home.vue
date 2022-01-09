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
    // fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/cities?types=CITY%20&namePrefix=pari&limit=5", {
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
    //         "x-rapidapi-key": ""
    //     }
    // })
    //     .then(response => {
    //         console.log(response.json());
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });
</script>

<style>

</style>
