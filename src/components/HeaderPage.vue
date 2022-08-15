<template>
  <div class="center">
    <div class="header">
      <!--header-left-->
      <div class="header-left">
        <h1 id="logo">Países do Mundo</h1>
      </div>
      <!--header-right-->
      <div class="header-right">
        <div class="order">
          <select name="order" v-model="ordenation">
            <option value="" disabled>Ordenar paises...</option>
            <option value="1">A - Z</option>
            <option value="2">Z - A</option>
          </select>
        </div>
        <div class="search">
          <input type="text" v-model="name" placeholder="Nome do país..." />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    name: "",
    ordenation: "",
  }),
};
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

.header-right {
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
  font-size: 0.9rem;
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
  .header-right {
    width: 100%;
  }

  .header-left {
    text-align: center;
  }

  .header-right {
    margin-top: 20px;
    justify-content: center;
    padding: 0;
  }
}
</style>
