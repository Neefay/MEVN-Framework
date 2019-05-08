import Vue from 'vue';
import VueRouter from 'vue-router';
import Routes from "./routes"

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: Routes.map(v => ({
        ...v.route, "component": v,
        "name": `app.${(v.route.public ? "public" : "private")}.${(v.route.name.toLowerCase())}`
    }))
});