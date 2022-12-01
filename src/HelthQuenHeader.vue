<template>
  <div class="headerBackgorund">
    <div class="titleBox">
      <div class="title">헬퀸</div>
    </div>
    <div class="navBox">
      <span class="navItem" v-for="navName in navArray" :key="navName">
        {{ navName }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "helthQuenHeader",
  data() {
    return {
      navArray: ["몸무게 그래프"],
    };
  },
};
</script>

<style scoped>
.headerBackgorund {
  width: 100%;
  height: 18%;
  background-color: #a9c5b9;
}

.titleBox {
  width: 100%;
  height: 60%;
  margin: auto;
  border-bottom: 1px solid wheat;
}

.title {
  width: 100%;
  height: 100%;
  display: inline-flex;
  font-size: xx-large;
  font-weight: bold;
  align-items: center;
  justify-content: center;
}

.navBox {
  width: 100%;
  height: 40%;
  display: flex;
}

.navItem {
  margin: auto;
  height: 100%;
  cursor: pointer;
  display: flex;
  padding: 0 10px;
  align-items: center;
}
.navItem:hover {
  background: #c5dcd5;
}
</style>
