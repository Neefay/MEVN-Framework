import axios from "axios"

export default {

    data: () => ({
        myPage: ""
    }),

    computed: {
    },

    mounted() {
        axios.get("/api/group/hi").then(r => {
            console.log("API CALLED:", r.data);
            this.myPage = r.data;
        });
    },

    methods: {
        updateStatus: function() {
            axios.get("/api/group/hi").then(r => {
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