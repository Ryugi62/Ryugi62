<template>
  <div class="helthQuenBackground">
    <helth-quen-header />
    <helth-quen-body />
  </div>
</template>

<script>
import HelthQuenHeader from "@/HelthQuenHeader.vue";
import HelthQuenBody from "@/HelthQuenBody.vue";

export default {
  name: "App",
  components: {
    HelthQuenHeader,
    HelthQuenBody,
  },
};
</script>

<style>
* {
  border: 1px solid red;
}

html,
body,
#app {
  width: 100%;
  margin: 0;
  height: 100%;
}

.helthQuenBackground {
  width: 100%;
  height: 100%;
  background-color: #e6f0ef;
}
</style>
