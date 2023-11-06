<template>
        <small v-if="todoListObj.todoList.length > 0" class="mt-2 d-flex justify-content-end green">{{ todoListObj.todoList.length }} adet todo vardır</small>
        <div v-else class="alert alert-warning">There are no records</div>
</template>

<script>
export default {
    inject: ['todoListObj'],
}
</script>