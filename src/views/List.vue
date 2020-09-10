<template>
    <div class="container">
        <h1>List</h1>
        <div v-if="tasks.length">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(task, index) in tasks" :key="task.id">
                    <th scope="row">{{index+1}}</th>
                    <td>{{task.title}}</td>
                    <td><div class="description">{{task.description}}</div></td>
                    <td>
                        <router-link :to="`/task/${task.id}`" class="btn btn-primary mr-2">Show</router-link>
                        <button class="btn btn-danger" @click="removeTask(task.id)">Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <p v-else>
            You dont have any tasks.
        </p>
    </div>
</template>

<script>
export default {
    name: "List",
    computed: {
        tasks() {
            return this.$store.getters.getTasks;
        }
    },
    methods: {
        removeTask(id) {
            this.$store.dispatch('deleteTask', id);
        }
    }
}
</script>

<style lang="scss" scoped>
.description {
    max-width: 300px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>
