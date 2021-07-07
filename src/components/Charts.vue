<template>
  <div>
    <div class="text">
      <h1>{{ msg }}</h1>
      <p>Veuillez choisir le nom de la colomn afin de gérérer les graphiques correspondant <p/>
      <select v-model="selected" @change="onChange(selected)">
        <option disabled value="">Nom de la colomn</option>
        <option v-for="(item, key) in columns" :key="key">
          {{ item }}
        </option>
      </select>
    </div>
    <br />
      <bar-chart :charts="this.dataset"></bar-chart>
      <line-chart :charts="this.dataset"></line-chart>
      <doughnut-chart :charts="this.dataset"></doughnut-chart>
  </div>
</template>

<script>
import LineChart from "../components/LineChart.vue";
import BarChart from "../components/Bar.vue";
import DoughnutChart from "../components/Doughnut.vue";

import Vuex from "vuex";

export default {
  components: {
    LineChart,
    BarChart,
    DoughnutChart,
  },
  data() {
    return {
      msg: "Charts",
      selected: "",
      columns: [],
      dataset: {},
    };
  },
  methods: {
    ...Vuex.mapActions(["getData"]),
    async onChange(value) {
      await this.getData(value);
      this.dataset = this.data;
      console.log(this.dataset);
    },
  },
  computed: {
    ...Vuex.mapGetters(["data"]),
  },

  mounted() {
    fetch("http://localhost:4000/api/columns")
      .then((response) => response.json())
      .then((data) => (this.columns = data.columns));
  },
};
</script>

<style scoped>
.text {
  color: black;
}

body,
html {
  background: #111;
}
.loader {
  border: 3px solid #d6336c;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border-left-color: transparent;
  border-right-color: transparent;
  animation: rotate 2s cubic-bezier(0.26, 1.36, 0.74, -0.29) infinite;
}
#loader2 {
  border: 3px solid #3bc9db;
  width: 220px;
  height: 220px;
  position: relative;
  top: -216px;
  border-left-color: transparent;
  border-right-color: transparent;
  animation: rotate2 2s cubic-bezier(0.26, 1.36, 0.74, -0.29) infinite;
}
#loader3 {
  border: 3px solid #d6336c;
  width: 240px;
  height: 240px;
  position: relative;
  top: -452px;
  border-left-color: transparent;
  border-right-color: transparent;
  animation: rotate 2s cubic-bezier(0.26, 1.36, 0.74, -0.29) infinite;
}
#loader4 {
  border: 3px solid #3bc9db;
  width: 260px;
  height: 260px;
  position: relative;
  top: -708px;
  border-left-color: transparent;
  border-right-color: transparent;
  animation: rotate2 2s cubic-bezier(0.26, 1.36, 0.74, -0.29) infinite;
}
@keyframes rotate {
  0% {
    transform: rotateZ(-360deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
}
@keyframes rotate2 {
  0% {
    transform: rotateZ(360deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
}
#text {
  color: white;
  font-family: Arial;
  font-size: 20px;
  position: relative;
  top: -857px;
}
</style>