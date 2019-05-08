<template>
    <div>
        <v-app>
            <Header></Header>
            <router-view></router-view>
        </v-app>
    </div>
</template>

<script>
import Header from "./Layout/Header"

export default {
    components: {
        Header
    }
}
</script>

