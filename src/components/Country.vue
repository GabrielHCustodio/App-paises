<template>
  <div class="center">
    <div class="header">
      <h1>Mais detalhes do país</h1>
      <router-link to="/">Fechar</router-link>
    </div>
    <div class="info" v-for="d in data" :key="d.id">
      <div class="info-left">
        <img :src="d.flags.svg" alt="" />
      </div>
      <div class="info-right">
        <p>Name of the country: <span>{{ d.name }}</span></p>
        <p v-if="d.capital">Name of the capital: <span>{{ d.capital }}</span></p>
        <p>Sub region: <span>{{ d.subregion }}</span></p>
        <p>Continent: <span>{{ d.region }}</span></p>
        <p>Total population: <span>{{ d.population }}</span></p>
        <p>Timezone: <span>{{ d.timezones.reduce(s => s) }}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixins";

export default {
  name: "Country",
  props: ["name"],
  mixins: [ApiMixin],
  created() {
    const url = `https://restcountries.com/v2/name/${this.name}`;
    this.getDataApi(url);
  },
};
</script>

<style scoped>
.center {
    width: 100%;
    height: 100vh;
}

.header {
  width: 100%;
  height: 15%;
  background: #68b2f8;
  padding: 10px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.header a {
    text-decoration: none;
    font-size: 1.3rem;
    opacity: .5;
    transition: .5s;
}

.header a:hover {
    opacity: 1;
}

.info {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 85%;
    background: #f1f1f1;
}

.info-left {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.info-left img {
    max-width: 600px;
    min-width: 500px;
    padding: 50px;
}

.info-right {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    flex-direction: column;
}

.info-right p{
    margin-bottom: 10px;
    font-size: 1.3rem;
    font-style: italic;
    color: #68b2f8;
}

.info-right p span {
    font-weight: bold;
    color: #506ee5;
}

@media screen and (max-width: 720px) {
    .info {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 730px;
        overflow: hidden;
    }

    .info-left,
    .info-right {
        width: 100%;
    }
}
</style>
