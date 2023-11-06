<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-4 offset-4 p-2 card">
        <h3 class="text-center">Todo App</h3>
        <hr class="my-2">
        <AddSection/> 
        <TodoList/> 
        <ResultBar/>
      </div>
    </div>
  </div>
</template>

<script>
import AddSection from '@/components/AddSection.vue';
import TodoList from '@/components/TodoList.vue';
import ResultBar from '@/components/ResultBar.vue';

export default {
  provide() {
    return {
      removeTodo : this.removeTodo,
      todoListObj : this.todoListObj,
      addTodo : this.addTodo,
    }
  },
  components : {
    AddSection,
    TodoList,
    ResultBar
  },
  data(){
    return {
      todoListObj : {
        todoList : [
          {id:1, text:'todo 1', done:false},
          {id:2, text:'todo 2', done:false},
          {id:3, text:'todo 3', done:false},
          {id:4, text:'todo 4', done:false},
          {id:5, text:'todo 5', done:false},
        ]
      },
    }
  },
  methods : {
    addTodo : function(todo){
      if(todo.text === '') return;
      this.todoListObj.todoList.push({
        id: this.todoListObj.todoList.length + 1,
        text: todo.text,
        done: false
      })
      todo.text = null;
    },
    removeTodo : function(todo){
      this.todoListObj.todoList = this.todoListObj.todoList.filter(item => item.id !== todo.id);
    },
  }
}
</script>