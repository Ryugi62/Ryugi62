<template>
  <div class="helthQuenBackgorund">
    <HelthQuenHeader />
    <HelthQuenBody />
  </div>
</template>

<script>
import HelthQuenBody from "./components/helthQuenBody.vue";
import HelthQuenHeader from "./components/helthQuenHeader.vue";

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
  margin: 0;
  height: 100%;
}

.helthQuenBackgorund {
  width: 100%;
  height: 100%;
}
</style>
