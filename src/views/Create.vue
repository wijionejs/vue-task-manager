<template>
    <div class="container">
        <div class="col-md-6 mx-auto">
            <h1>Create new task</h1>
            <form @submit.prevent="createTask">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" v-model="title">
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea id="description" rows="3" class="form-control" v-model="description"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Create</button>
            </form>
        </div>
    </div>
</template>


<script>
    export default {
        name: "Create",
        data() {
            return {
                title: '',
                description: ''
            }
        },
        methods: {
            createTask() {
                const task = {
                    id: Date.now(),
                    title: this.title,
                    description: this.description
                }

                this.$store.dispatch('createNewTask', task)
                this.$router.push('/list')
            }
        }
    }
</script>

<style scoped>

</style>
