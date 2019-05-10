
const processRoutes = v => ({
    ...v.route,
    "component": v,
    "name": `app.${(v.route.public ? "public" : "private")}.${(v.route.name.toLowerCase())}`
})

const dev = () => (process.env.NODE_ENV === "development")

export {
    processRoutes,
    dev
}