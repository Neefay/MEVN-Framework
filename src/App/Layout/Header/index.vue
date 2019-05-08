<template>
    <nav id="header-component">
        <v-toolbar prominent dense dark color="primary" app>
            <v-toolbar-title class="text-uppercase mr-2">
                <span>Aitagiku</span>
            </v-toolbar-title>

            <v-btn
                class="py-4 px-3 mx-0"
                v-for="(button, index) in navigationBarButtons"
                :key=index :to=button.route
                small flat exact
            >
                <span>{{ button.text }}</span>
                <v-icon right>{{ `mdi-${button.icon}` }}</v-icon>
            </v-btn>
        </v-toolbar>
    </nav>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./index.scss" scoped></style>
