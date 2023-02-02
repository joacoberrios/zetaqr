import Vue from 'vue'
import GeneradorQR from './components/GeneradorQR.vue'
import ValidadorQR from './components/ValidadorQR.vue'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  el: '#generador',
  render: h => h(GeneradorQR)
})

new Vue({
  el: '#validador',
  render: h => h(ValidadorQR),
  data() {
    return {
      sheetData: []
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      const spreadsheetId = '1NaK9CUtJVVR8ieUDhQPrS_tFL9E-rsezNIpxb1Ci368'
      const sheetName = 'Respuestas de formulario 1'
      const API_KEY = 'AIzaSyDUYKFa6-eCufwlHy_2Bq-QqmUWK76V6Kc'
      axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${API_KEY}`)
        .then(response => {
          this.sheetData = response.data.values
          console.log(this.sheetData)
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
})
