
var app = new Vue({
    el: '#app',
    data: {
        message: 'hello vue!'
    }

})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: "page load at" + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'learn js' },
            { text: 'learn vue' },
            { text: 'learn all' },
        ]
    }
})
app4.todos.push({ text: 'new item' })

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'hello vue.js'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text + " " + todo.id }}</li>'
})

var app7 = new Vue({
    el: "#app-7",
    data: {
        groceryList: [
            { id: 0, text: 'vegetbl' },
            { id: 1, text: 'cheese' },
            { id: 2, text: 'houka' },
        ]
    }
})

// you can think of vue as a view model