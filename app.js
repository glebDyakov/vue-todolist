const App = {
    data(){
        return {
            placeholderString: 'Введите название заметки',
            title: 'Список заметок',
            inputValue:'',
            notes:['Заметка 1', 'Заметка 2', 'Заметка 3',]
        }
    },
    methods:{
        inputChangeHandler(event){
            this.inputValue = event.target.value
        },
        addNewNote(){
            if(this.inputValue !== ''){
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item){
            return item.toUpperCase()
        },
        doubleCount(){
            return this.notes.length * 2
        },
        inputKeyPress(event){
            //console.log(event.key)
            if(event.key == 'Enter'){
                this.addNewNote()
            }
        },
        removeNote(idx, event){
            this.notes.splice(idx, 1)
        }
    }
}

const app = Vue.createApp(App).mount("#app")