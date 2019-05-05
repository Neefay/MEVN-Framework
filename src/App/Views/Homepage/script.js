export default {
    data: () => ({
        firstName: "Generic",
        secondName: "Person"
    }),
    computed: {
        myFullName: function() { return `${this.firstName} ${this.secondName}` }
    },
    methods: {
        sayHello: function() {
            const msg = `Hello, ${this.myFullName}!`
            console.log(msg);
            alert(msg);
        }
    },

    route: {
        path: "/",
        name: "Homepage"
    }
}