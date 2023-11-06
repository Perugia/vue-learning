<template>
    <li class="list-group-item d-flex">
        <div class="flex-grow-1 d-flex align-items-center">
            <input class="form-check-input" v-model="todo.completed" type="checkbox" :id="index" />
            <label class="form-check-label ms-2 flex-grow-1" :for="index">{{ todo.text }}</label>
        </div>
        <button class="btn btn-danger btn-sm" @click="removeTodo(todo)">Delete</button>
    </li>
</template>

<script>
export default {
    props: ['item', 'index', 'removeTodo'],
    data() {
        return {
            todo: this.item
        }
    },
}

</script>