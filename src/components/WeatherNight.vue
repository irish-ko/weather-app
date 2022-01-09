<template>
    <div class="container" v-bind:class="{dayStyleCont: weatherData.isDayStyle}">
        <div class="weather" v-bind:class="{dayStyleWeather: weatherData.isDayStyle}">
            <div class="weather-main">
                <div class="weather-main-info">
                    <h2 class="city"> {{weatherData.name}}</h2>
                    <p class="date">  {{weatherData.date.date}} {{weatherData.date.mounth}} </p>
                    <p class="temperature"> {{weatherData.temp}} ℃ </p>
                    <p class="weather-now"> {{weatherData.description}}</p>
                </div>
                <div class="weather-main-image">
                    <img v-show="!weatherData.isDayStyle" src="@/assets/img/night.png"
                         class="weather-main-image-item">
                    <img v-show="weatherData.isDayStyle" src="@/assets/img/day.png"
                         class="weather-main-image-item">
                </div>
            </div>
            <div class="weather-additions">
                <div class="weather-aditions-icons">
                    <img src="@/assets/img/coord.png">
                    <img src="@/assets/img/drops.png">
                    <img src="@/assets/img/ac.png">
                    <img src="@/assets/img/sun.png">
                    <img src="@/assets/img/moon.png">
                    
                </div>
                <div class="weather-aditions-titles">
                
                    <p class="weather-aditions-titles-item"> 
                    Координати </p>
                    <p class="weather-aditions-titles-item">
                    Відносна вологість </p>
                    <p class="weather-aditions-titles-item">
                    Атмосферний тиск </p>
                    <p class="weather-aditions-titles-item">
                    Час сходу сонця </p>
                    <p class="weather-aditions-titles-item">
                    Час заходу сонця</p>
                </div>
                <div class="weather-aditions-values">
                    <p class="weather-aditions-values-item">
                    Ш: {{weatherData.coord.lat}} Д: {{weatherData.coord.lon}}</p>
                    <p class="weather-aditions-values-item">
                    {{weatherData.humidity}} %</p>
                    <p class="weather-aditions-values-item">
                    {{weatherData.pressure}} гПа</p>
                    <p class="weather-aditions-values-item">
                    {{weatherData.sunrise}}</p>
                    <p class="weather-aditions-values-item">
                    {{weatherData.sunset}}</p>
                </div>
            </div>
        </div>
        <button @click="goHome" class="btn-back">НАЗАД</button>
        
    </div>
</template>
<script>
    export default {
        name: 'WeatherNight',
        data() {
            return {

            }
        },
        methods : {
            goHome(){
                this.$router.push({ path: '/'});
            }
        },
        props: {
            weatherData: {},
            },

    }
</script>
<style scoped lang="scss">
    @import "@/assets/styles/WeatherNigth";

    .btn-back {
        width: 264px;
        height: 60px;
        background: linear-gradient(161deg, #38313414 0%, #13181147 100%);
        border-radius: 4px;
        /*font-family: Open Sans;*/
        /*font-style: normal;*/
        /*font-weight: 600;*/
        font-size: 18px;
        line-height: 25px;

        /* identical to box height */
        text-align: center;
        color: #FFFFFF;
    }
    .dayStyleCont {
        background: linear-gradient(180deg, #72BEFF 0%, #B6E3FF 100%) !important;
    }
    .dayStyleWeather {
        background: linear-gradient(180deg, #74C5FF 0%, #A4DEFF 100%) !important;
    }
</style>

<!--<style  scoped lang="scss">-->
    <!--/*@import "@/assets/styles/WeatherDay";*/-->
    <!--.conteiner{-->
        <!--background: linear-gradient(180deg, #72BEFF 0%, #B6E3FF 100%);-->
        <!--.weather {-->
            <!--background: linear-gradient(180deg, #74C5FF 0%, #A4DEFF 100%);-->
        <!--}-->
    <!--}-->
<!--</style>-->
