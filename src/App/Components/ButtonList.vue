<template>
    <div>
        <v-btn
            class="py-4 px-3 mx-0"
            v-for="(button, index) in list"
            :key=index
            :to=button.route
            small flat exact
        >
            <span>{{ button.text }}</span>
            <v-icon right>{{ `mdi-${button.icon}` }}</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
    props: ["list"]
}
</script>
