<template>
        <small v-if="todoListLength > 0" class="mt-2 d-flex justify-content-end green">{{ todoListLength }} adet todo vardır</small>
        <div v-else class="alert alert-warning">There are no records</div>
</template>

<script>

export default {
    props: {
        todoListLength: {
            type: Number,
            required: true
        }
    },
}

</script>