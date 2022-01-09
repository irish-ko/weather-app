<template>
    <div id="app">
        <h1>Привіт!</h1>
        <h3>Вкажи місто щоб отримати дані про погоду</h3>
        <input class="inpCity" name="city" type="text" v-model="userCity"
               title="Наприклад, Копенгаген"
               placeholder="Наприклад, Копенгаген">
        <button :disabled="userCity.length === 0" @click="viewWeather" class="butt">ПРОДОВЖИТИ
        </button>
    </div>
</template>

<script>
    export default {
        name: "Weather",
        data : () => {
            return {
                userCity: '',
            }
        },
        methods : {
            viewWeather(){
                this.$emit('routWaether', this.userCity);
            }
        }
    }
</script>

<style scoped lang="scss">
    #app {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        font-size: 18px;
    }
    input.inpCity{
        width: 710px;
        height: 65px;
        background: #F1F1F1;
        border-radius: 8px;
        /*font-family: Open Sans;*/
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        margin: 50px 0 50px 0;
        outline: none;
        border: none;
        border-bottom: 1px solid #7D7D7D;
        /* identical to box height */
        overflow:hidden;
        color: #7D7D7D;
    }
    /*input.inpCity::after{*/
    /*content:'';*/
    /*display:inline-block;*/
    /*box-sizing:border-box;*/
    /*width:100%;*/
    /*height:2px;*/
    /*background:rgb(230,235,235);*/
    /*border:10px solid red;*/

    /*}*/
    .butt{
        width: 264px;
        height: 60px;
        background: #000AFF;
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
</style>