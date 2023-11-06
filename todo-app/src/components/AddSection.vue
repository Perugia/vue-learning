<template>
    <input class="form-control mb-2" type="text" id="todoText" placeholder="todo name" v-model="todo.text" @keydown.enter="addTodo(todo)">
</template>

<script>

export default {
    props: ['addTodo'],
    data() {
        return {
            todo: {
                text: null,
            }
        }
    },
}

</script>