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
                card: "",
                edit: "non"
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
            const card1={
                name: list.card,
                status: "ok",
            }
            list.cards.push(card1)
            list.card = ""
        },
        editlist(list, index){
           //list.cards[index].status = "no"
          if(list.cards[index].status == "no"){
            list.cards[index].status = "ok"
          }
          else if(list.cards[index].status == "ok"){
            list.cards[index].status = "no"
          }
            }
        },

    }
)