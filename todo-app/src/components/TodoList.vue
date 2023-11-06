<template>
<ul v-if="todoList.length > 0 " class="list-group">
    <TodoListItem v-for="(todo,index) in todoList" :key="todo.id" :item="todo" :index="index" :removeTodo="removeTodo"/> 
</ul>

</template>

<script>
import TodoListItem from '@/components/TodoListItem.vue';
export default {
    components: {
        TodoListItem
    },
    props: {
        todoList: {
            type: Array,
            required: true
        },
        removeTodo: {
            type: Function,
            required: true
        }
    },
}
</script>