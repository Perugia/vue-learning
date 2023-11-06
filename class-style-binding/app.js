const app = Vue.createApp({
    data() {
        return {
            showBorder: false,
            changeBG: false,
            bgColor: ""
        }
    },
    methods: {
        changeBGColor() {
            this.changeBG = !this.changeBG;
            this.bgColor = "";
        }
    },
    computed: {
        boxClasses() {
            return {
                border: this.showBorder,
                green: this.changeBG
            };
        }
    }
}).mount('#app');