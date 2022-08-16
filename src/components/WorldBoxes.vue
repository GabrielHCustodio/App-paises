<template>
  <div class="center">
    <div class="container-boxes">
      <div class="container-box" v-for="(d, index) in data" :key="index">
        <!--box-left-->
        <div class="box-left">
          <img :src="d.flags.svg" alt="" />
        </div>
        <!--box-right-->
        <div class="box-right">
          <p>Country: {{ d.name }}</p>
          <p v-if="d.capital">Capital: {{ d.capital }}</p>
        </div>
        <div class="plus">
          <router-link :to="{ name: 'country', params: { name: d.name } }">
            +
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixins";

export default {
  name: "WorldBoxes",
  mixins: [ApiMixin],
  data: () => ({
    newData: ''
  }),
  created() {
    const url = "https://restcountries.com/v2/all";
    this.getDataApi(url);
  },
  updated() {
    this.$emitter.on('ordenation', (value) => {
      if(value == 1) {
        this.data.sort((a,b) => {
          if(b.name < a.name) {
            return 1
          }else if(b.name > a.name) {
            return -1
          }
          return 0
        })
      }
      if(value == 2) {
        this.data.sort((a,b) => {
          return b.name.localeCompare(a.name) 
        })
      }
    }),
    this.$emitter.on('nameCountry', (value) => {
      if(value !== '') {
        const url = `https://restcountries.com/v2/name/${value}`;
        this.getDataApi(url);
      }else {
        const url = "https://restcountries.com/v2/all";
        this.getDataApi(url);
      }
    })
  }
};
</script>

<style scoped>
.center {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-boxes {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px;
}

.container-box {
  width: 350px;
  height: 100px;
  border: 1px solid #1d0c20;
  background: #f1f1f1;
  border-radius: 50px;
  margin: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 2s;
}

.box-left {
  width: 35%;
  padding-left: 20px;
}

.box-left img {
  width: 70px;
}

.box-right {
  width: 55%;
}

.plus {
  width: 10%;
}

.plus a {
  text-decoration: none;
  font-size: 2.5rem;
}
</style>
