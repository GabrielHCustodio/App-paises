<template>
    <div class="center">
        <div class="header">
            <div class="header-left">
                <h1 id="logo">
                    Países do Mundo
                </h1>
            </div><!--header-left-->
            <div class="header-rigth">
                <div class="order">
                    <select name="order" v-model="ordenation">
                        <option value="" disabled>Ordenar paises...</option>
                        <option value="1">ID crescente</option>
                        <option value="2">ID decrescente</option>
                        <option value="3">A - Z</option>
                        <option value="4">Z - A</option>
                    </select>
                </div>
                <div class="search">
                    <input type="text" v-model="name" placeholder="Nome do país...">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data: () => ({
        name: '',
        ordenation: ''
    }),
    created() {
        fetch('https://restcountries.com/v2/all')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
    },
    updated() {
        console.log(this.name)
        console.log(this.ordenation)
    }
}
</script>

<style scoped>
.center {
    width: 100%;
    background: #68b2f8;
    padding: 20px;
}

.header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.header-left {
    width: 40%;
}

.header-rigth {
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    padding-right: 20px;
}

.order {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
}

.order select,
.search input {
    width: 150px;
    height: 30px;
    border: none;
    border-radius: 30px;
    font-size: .9rem;
    padding-left: 8px;
    outline: none;
    display: flex;
    align-items: center;
}

.search input {
    padding-left: 15px;
}

@media screen and (max-width: 684px) {
    .header {
        flex-direction: column;
    }

    .header-left,
    .header-rigth {
        width: 100%;
    }

    .header-left {
        text-align: center;
    }

    .header-rigth {
        margin-top: 20px;
        justify-content: center;
        padding: 0;
    }
}

</style>