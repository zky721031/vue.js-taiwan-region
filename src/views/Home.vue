<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png" />-->
    <City msg="縣市 - 鄉鎮區" />
  </div>
</template>

<script>
// @ is an alias to /src
import City from "@/components/City.vue";

export default {
  name: "Home",
  components: {
    City
  }
};
</script>
