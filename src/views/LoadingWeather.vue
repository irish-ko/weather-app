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
            getWeather() {
                // return console.log("123123123");
            },

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
                        // .catch(error => {
                        //     console.log('|||||||');
                        //     throw new Error("хуй его знает")
                        // });
                //         .then(async response => {
                //     try {
                //         const data = await response.json()
                //         console.log('response data?', data)
                //     } catch(error) {
                //         console.log('Error happened here!')
                //         console.error(error)
                //     }
                // });
                // console.log('qweqweqw' + response);
                // this.resultWeather = response;

                if (response.status !== 200) {
                    // this.errorFetch.number = response.status;
                    // this.errorFetch.description = response.statusText;
                    this.errorFetch = await response.json();

                    this.isLoad = false;
                    this.isErrorQuery = true;
                    throw new Error(this.errorFetch.message);
                }


                const data = await response.json();
                // console.log('123123123' + data);

                // this.weatherInfo = data;

                this.weatherInfo = this.parseWeather(data);

                this.$store.commit({
                    type : 'setWeatherCity',
                    weather: this.weatherInfo,
                });

                // console.log(this.$store.getters.getCityName.name);
                // console.log(this.$store.getters.getWeatherCity.weather);

                this.isLoad = false;
                this.isFinish = true;
                this.$router.push({ path: '/weather'})
            }
            catch (e) {
                console.error(e);
            }
            // this.weatherInfo.sunrise = this.parseTime(data.sys.sunrise);
            // this.weatherInfo.sunset = this.parseTime(data.sys.sunset);
            // this.weatherInfo.date = this.parseDate(data.dt);
            // this.weatherInfo.isDayStyle = (data.dt > data.sys.sunrise) && (data.dt < data.sys.sunset);
            // this.weatherInfo.temp = data.main.temp;
            // this.weatherInfo.humidity = data.main.humidity;
            // this.weatherInfo.pressure = data.main.pressure;
            // this.weatherInfo.coord = data.coord;
            // this.weatherInfo.name = data.name;
            // this.weatherInfo.description = data.weather[0].description;


            //this.isDay(data);

            // console.log(this.weatherInfo);


        }

    }
    // getWeather();
    // export

    // API key = 431b469cd0a90c784cac337d317cf2b5
    // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
</script>

<style scoped>

</style>