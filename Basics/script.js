const app = Vue.createApp({
    // template: '<h2> {{title}} This is from template</h2>',
    data() {
        return {
            title: "Atomic Habit",
            author: "James Clear",
            age: 40,

            showBooks: true,
            x: 0,
            y: 0,

            books:[
                {title:"book 1", author:"aysuh", image:"assets/book1.png", isFave:true},
                {title:"book 2", author:"ram", image:"assets/book2.png", isFave:false},
                {title:"book 3", author:"sham", image:"assets/book3.png", isFave:false}
            ],

            url: "http://127.0.0.1:5501/3-for.html"


        }

    },
    methods:{
        changeTitle(title){
            console.log("title will be change by this method")
            this.title = title
        },

        toggleHideBooks(){
            this.showBooks = !this.showBooks
        },

        handelEvent(e, data){
            console.log(e, e.type)
            if(data){
                console.log(data)
            }
        },

        handleMouseMove(e){
            this.x = e.offsetX,
            this.y = e.offsetY

            console.log(this.x, this.y)
        },

        changeColour(book){
            book.isFave = true
        },

        resetColour(book){
            book.isFave = false
        }
    },

    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFave)
        }
    }





})


app.mount("#app")