<template>
  <div class="bodyBackground">
    <div class="temp"></div>
  </div>
</template>

<script>
export default {
  name: "helthQuenBody",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.bodyBackground {
  width: 100%;
  height: 82%;
  background-color: #e6f0ef;
}
</style>
