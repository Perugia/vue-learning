<template>
    <ul v-if="todoListObj.todoList.length > 0 " class="list-group">
        <TodoListItem v-for="(todo,index) in todoListObj.todoList" :key="todo.id" :item="todo" :index="index"/> 
    </ul>
</template>

<script>
import TodoListItem from '@/components/TodoListItem.vue';
export default {
    inject: ['todoListObj'],
    components: {
        TodoListItem
    },
}
</script>