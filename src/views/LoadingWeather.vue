<template>
    <div>
        <Spinner v-show="isLoad"></Spinner>
        <PError v-show="isErrorQuery" v-bind:errorFetch="errorFetch"></PError>
    </div>
</template>

<script>
    import Spinner from '@/components/Spinner.vue'
    import PError from '@/components/PageError.vue'

    export default {
        name: "LoadingWeather",
        data: () => {
            return {
                apiKey: '431b469cd0a90c784cac337d317cf2b5',
                isLoad: true,
                isErrorQuery: false,
                isFinish: false,
                resultWeather: null,
                weatherInfo: null,
                errorFetch: {
                    cod: null,
                    message: '',
                },
            }
        },
        computed : {
        },
        methods: {
            strMounth(numbr) {
                const mounth = [
                    "Січня",
                    "Лютого",
                    "Березня",
                    "Квітня",
                    "Травня",
                    "Червня",
                    "Липня",
                    "Серпня",
                    "Вересня",
                    "Жовтня",
                    "Листопада",
                    "Грудня"
                ];
                return mounth[numbr];
            },
            parseTime(msec){
                const date = new Date(msec * 1000);

                return `${date.getHours()}:${date.getMinutes()}`
            },
            parseDate(msec) {
                const date = new Date(msec * 1000);



                return {
                    mounth : this.strMounth(date.getMonth()),
                    date : date.getDate(),
                    curTime : this.parseTime(msec)
                }
            },
            parseWeather(fromApi) {
                return {
                    sunrise : this.parseTime(fromApi.sys.sunrise),
                    sunset : this.parseTime(fromApi.sys.sunset),
                    date : this.parseDate(fromApi.dt),
                    isDayStyle : (fromApi.dt > fromApi.sys.sunrise) && (fromApi.dt <
                        fromApi.sys.sunset),
                    temp : fromApi.main.temp,
                    humidity : fromApi.main.humidity,
                    pressure : fromApi.main.pressure,
                    coord : fromApi.coord,
                    name : fromApi.name,
                    description : fromApi.weather[0].description,
                }
            }
        },
        components : {
            Spinner,
            PError
        },
        async mounted(){

            try {

                let nameCity = this.$store.getters.getCityName.name;
                let response = await
                    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(nameCity)}&lang=uk&units=metric&appid=${this.apiKey}`);

                if (response.status !== 200) {
                    this.errorFetch = await response.json();

                    this.isLoad = false;
                    this.isErrorQuery = true;
                    throw new Error(this.errorFetch.message);
                }

                const data = await response.json();

                this.weatherInfo = this.parseWeather(data);

                this.$store.commit({
                    type : 'setWeatherCity',
                    weather: this.weatherInfo,
                });

                this.isLoad = false;
                this.isFinish = true;
                this.$router.push({ path: '/weather'})
            }
            catch (e) {
                console.error(e);
            }
        }

    }
</script>

<style scoped>

</style>