const app = new Vue({
el: '#app',
    data: {
        lists : []
    },
    methods: {
        addList(){
            const newList = {
                name:'',
                status: 'creating',
                cards: [],
                card: ""
            }
            this.lists.push(newList)
        },
        SaveList(list) {
            list.status ='saved'
        },
        removeList(index) {
            this.lists.splice(index, 1)
        },
        saveCard(list){
            const card1 = list.card;
            list.cards.push(card1)
            list.card = ""
        },

    }
})