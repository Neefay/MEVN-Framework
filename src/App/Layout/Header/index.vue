<template>
    <nav id="header-component">
        <v-toolbar prominent dense dark color="primary" app>
            <v-toolbar-title class="text-uppercase mr-2">
                <v-icon class="mr-2">mdi-vuetify</v-icon>
                <span>MEVN Framework</span>
            </v-toolbar-title>
            <ButtonsList :list=navigationBarButtons></ButtonsList>
        </v-toolbar>
    </nav>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./index.scss" scoped></style>
