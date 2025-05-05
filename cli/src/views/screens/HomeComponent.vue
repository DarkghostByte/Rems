<template>
    <div>
        <h1>HELLO WORLD!!!</h1>
    </div>
</template>

<script>
export default {
    name: 'HomeComponent',
    data: () => ({
        name: 'HomeComponent',
        url: process.env.VUE_APP_ROOT_ASSETS,
    }),
};
</script>

<style>

</style>