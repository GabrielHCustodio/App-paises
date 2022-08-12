<template>
    <h1>Paises do mundo</h1>
</template>

<script>
export default {
    name: 'Home',
    created() {
        fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
    }
}
</script>