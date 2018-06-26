Vue.component('book-item',{
    props:['book'],
    template:'<li>{{book.title}}</li>'
    // Vue component is made up of three parts
    // 0. name of the component
    // 1. props
    // 2. Template
})

var app9=new Vue({
    el:'#app-9',
    data:{
        bookList:[
            {id:0,title:'War and Peace'},
            {id:1,title:'David Copperfield'},
            {id:2,title:'Middlemarch'}
        ]
    }
    // This has three components
    // 0. el
    // 1. data
    // 2. methods
})