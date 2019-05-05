<template>
    <div id="example-component">
        <form id="name-form">
            <input type="text" v-model="firstName" placeholder="First Name">
            <input type="text" v-model="secondName" placeholder="Second Name">
        </form>
        <h1>Welcome, {{ myFullName }}.</h1>
        <div id="button-container">
            <button @click=sayHello>Greet</button>
        </div>
    </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./index.scss" scoped></style>
