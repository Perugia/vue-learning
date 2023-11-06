const app = Vue.createApp();

app.component('todo-item', {
    data() {
        return {
            todoText: "",
            todoList: [{
                    text: "Todo 1",
                    completed: false
                },
                {
                    text: "Todo 2",
                    completed: false
                },
                {
                    text: "Todo 3",
                    completed: false
                },
                {
                    text: "Todo 4",
                    completed: false
                },
                {
                    text: "Todo 5",
                    completed: false
                },
                {
                    text: "Todo 6",
                    completed: false
                },
            ],
        }
    },
    methods: {
        addTodo(event) {
            this.todoList.push({
                text: this.todoText,
                completed: false
            });
            this.todoText = "";
        },
        removeTodo(todoItem) {
            this.todoList = this.todoList.filter((item) => {
                return item !== todoItem;
            });
        }
    },
    template: `
    <div class="row mt-5">
    <div class="col-8 p-2">
      <h3>Todo List</h3>
      <input type="text" class="form-control" v-model="todoText" @keydown.enter="addTodo" />
      <button class="btn btn-primary w-100 mb-3 mt-3" @click="addTodo">Add</button>
      <ul v-if="todoList.length > 0 " class="list-group">
        <li v-for="(todo, index) in todoList" class="list-group-item d-flex">
          <div class="flex-grow-1 d-flex align-items-center">
            <input class="form-check-input" v-model="todo.completed" type="checkbox" :id="index" />
            <label class="form-check-label ms-2" :for="index">{{ todo.text }}</label>
          </div>
          <button class="btn btn-danger btn-sm" @click="removeTodo(todo)">Delete</button>
        </li>
      </ul>
      <div v-else class="alert alert-warning">There are no records</div>
    </div>
    <div class="col-4">
      <pre>{{ todoList }}</pre>
    </div>
    </div>
    `
})

app.mount('#app')