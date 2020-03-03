<template>
  <div class="hello container">
    <h3 class="text-center mb-5 text-white">{{ msg }}</h3>
    <div class="content border rounded px-4 py-3">
      <div class="form-group">
        <label for="city">縣市</label>
        <select
          class="form-control"
          @change="change()"
          v-model="cityValue"
          id="city"
        >
          <option v-for="city in citiesDatas" :key="city.name">{{
            city.name
          }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="countries">鄉鎮區</label>
        <select class="form-control" id="countries" v-model="countryValue">
          <option v-for="country in countriesArr" :key="country.name">{{
            country.name
          }}</option>
        </select>
      </div>

      <p>您選擇的縣市：{{ cityValue }} - 鄉鎮區是：{{ countryValue }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'City',
  props: {
    msg: String
  },
  data() {
    return {
      api: 'http://www.mocky.io/v2/5da8849a1200001100edafa2',
      citiesDatas: '',
      countriesDatas: '',
      cityValue: '臺北市',
      countryValue: '中正區',
      countriesArr: ''
    };
  },
  mounted() {
    this.axios
      .get(this.api)
      .then(res => {
        this.citiesDatas = res.data;
        console.log(this.citiesDatas);
        //init
        this.countriesDatas = this.citiesDatas.filter(item => {
          return item.name === this.cityValue;
        });
        this.countriesArr = this.countriesDatas[0].districts;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    change() {
      this.countriesDatas = this.citiesDatas.filter(item => {
        return item.name === this.cityValue;
      });
      console.log(this.countriesDatas[0].districts);
      this.countriesArr = this.countriesDatas[0].districts;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content {
  width: 500px;
  height: auto;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 5px 8px 20px rgba(35, 24, 21, 0.4);
  transition: all 0.3s;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
