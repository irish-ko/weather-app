<template>
    <WeatherCity v-bind:weatherData="weather"></WeatherCity>
</template>

<script>
    import WeatherCity from '@/components/WeatherNight.vue'


    export default {
        name: "WeatherView",
        data(){
            return {
                weather: null,
            }

        },
        components: {
            WeatherCity
        },
        methods: {
            getParam(){
                let tmp = this.$store.getters.getWeatherCity.weather;
                if (tmp === undefined)
                    console.log("ERROR!!!");
                console.log(tmp);

                return tmp;
            }
        },
        created(){
            if (!this.$store.getters.getShow){
                this.$router.push({ path: '/'});
                return;
            }
            this.weather = this.$store.getters.getWeatherCity.weather;
        },
    }
</script>

<style scoped>

</style>