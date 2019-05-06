import axios from "axios"

export default {

    data: () => ({
        myPage: ""
    }),

    computed: {
    },

    mounted() {
        axios.get("/api/about").then(r => {
            console.log("API CALLED:", r.data);
            this.myPage = r.data;
        });
    },

    methods: {
        updateStatus: function() {
            axios.get("/api/about").then(r => {
                console.log("API CALLED:", r.data);
                this.myPage = r.data;
            });
        }
    },

    route: {
        path: "/about",
        name: "About"
    }
}