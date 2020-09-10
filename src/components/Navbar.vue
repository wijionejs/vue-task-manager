<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <router-link class="navbar-brand mr-3" to="/">Navbar</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/" exact active-class="active">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/list" active-class="active">List</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/create" active-class="active">Create</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped lang="scss">
.nav-link.active {
    font-weight: bold;
}
</style>
