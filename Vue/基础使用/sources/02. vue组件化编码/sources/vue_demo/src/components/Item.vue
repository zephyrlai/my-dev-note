<template>
    <li>
        <label>
        <input type="checkbox" v-model="Item.flag"/>
        <span>{{Item.title}}</span>
        </label>
        <button class="btn btn-danger" style="display:none">删除</button>
    </li>
</template>

<script>

export default {
    props: {
        'Item': Object,
        'index': Number
    }
}
</script>

<style>
</style>
