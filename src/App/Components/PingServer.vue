<template>
    <v-card>
        <v-card-title>
            <v-icon large left>
                mdi-message-processing
            </v-icon>
            <span class="subheading font-weight-light">Inspirational Quotes</span>
        </v-card-title>
        <v-spacer></v-spacer>
        <div class="text-holder">
            <v-card-text>
                <span class="title font-weight-light">"{{ (cardText.quote || '-') }}"</span>
            </v-card-text>
            <v-card-title>
                <h3 class="headline font-italic">- {{ cardText.author }}</h3>
            </v-card-title>
        </div>

        <v-card-actions>
            <v-btn
                @click="getQuote"
                :loading="loadingRequest"
                :disabled="loadingRequest"
                fab
                color="primary"
                absolute
                right
            >
                <v-icon>mdi-refresh</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import axios from 'axios'

const getQuote = function() {
    this.loadingRequest = true;
    axios.get("/api/quotes/get").then(r => {
        this.cardText = r.data;
        this.loadingRequest = false;
    });
}

export default {
    data() {
        return {
            cardText: "",
            loadingRequest: false
        }
    },
    props: [],
    methods: {
        getQuote
    },
    created() {
        this.getQuote()
    }
}
</script>

<style lang="scss" scoped>
    .text-holder {
        min-height: 80px;
    }
</style>
