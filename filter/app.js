const app = Vue.createApp({
    data() {
        return {
            count: 0,
            search: '',
            itemList: ["apple", "banana", "orange", "grape", "strawberry"]
        }
    },
    computed: {
        filteredList() {
            return this.itemList.filter(item => {
                return item.toLowerCase().includes(this.search.toLowerCase());
            })
        }
    }
}).mount('#app')