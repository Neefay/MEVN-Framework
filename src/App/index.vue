<template>
    <div>
        <v-app>
            <HeaderLayout></HeaderLayout>
            <v-content>
                <v-container fluid>
                    <router-view></router-view>
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<script>
import HeaderLayout from "./Layout/Header"

export default {
    components: {
        HeaderLayout
    }
}
</script>

