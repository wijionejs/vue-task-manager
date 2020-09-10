<template>
    <div class="container">
        <div class="col-md-6 mx-auto" v-if="task">
            <h1>Edit task: {{task.title}}</h1>
            <form @submit.prevent="editTask">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" v-model="title">
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea id="description" rows="3" class="form-control" v-model="description"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Edit</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Task",
        data() {
            return {
                title: '',
                description: ''
            }
        },
        computed: {
            task() {
                return this.$store.getters.getTask(+this.$route.params.id)
            }
        },
        methods: {
            editTask() {
                this.$store.dispatch('editTask', {
                    id: this.task.id,
                    title: this.title,
                    description: this.description
                });
                this.$router.push('/list')
            }
        },
        mounted() {
            if(this.task) {
                this.description = this.task.description
                this.title = this.task.title
            } else {
                this.$router.push('/list')
            }
        }
    }
</script>

<style scoped>

</style>
