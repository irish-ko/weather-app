<template>
    <div class="center">
        <h1>{{errorFetch.cod}} ERROR!</h1>
        <img src="../assets/img/catError.png" alt="sad cat">
        <p>{{errorFetch.message}}</p>
        <button @click="goHome" class="btn-back">НАЗАД</button>
    </div>
</template>

<script>
    export default {
        name: "PageError",
        props: {
            errorFetch: null,
        },
        methods: {
            goHome(){
                this.$router.push({ path: '/'});
            }
        }
    }
</script>

<style scoped>
    .center {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #ffffff;
    }
    .btn-back {
        width: 264px;
        height: 60px;
        background: linear-gradient(161deg, rgba(74, 87, 132, 0.34) 0%, rgba(163, 159, 93, 0.67) 100%);
        border-radius: 4px;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        color: #000000;
    }
</style>