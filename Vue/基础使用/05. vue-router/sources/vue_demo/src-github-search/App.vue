<template>
    <div class="container">
        <Search/>
        <UserMain/>
    </div>
</template>

<script>
    import Main from './components/Main.vue'
    import Search from './components/Search.vue'
    export default{
        components: {
            'UserMain': Main,
            Search
        }
    }
</script>

<style>
</style>
