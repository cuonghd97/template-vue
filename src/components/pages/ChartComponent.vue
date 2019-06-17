<template>
  <section id="main-content">
    <section class="wrapper">
      <b-row>
        <b-col col lg="12">
          <div>
            <span>Start date:
              <date-picker
                format="YYYY-MM-DD"
                lang="en"
                :class_input="'form-control'"
                v-model="startDate"
                placeholder="">
              </date-picker>
            </span>
            <span>End date:
              <date-picker
                format="YYYY-MM-DD"
                lang="en"
                :class_input="'form-control'"
                v-model="endDate"
                placeholder="">
              </date-picker>
            </span>
            <button v-on:click='fillData()'>Filter</button>
          </div>
          <line-chart v-bind:chart-data='datacollection'></line-chart>
        </b-col>
      </b-row>
    </section>
  </section>
</template>

<script>

  import MainContentComponent from '../layouts/MainContentComponent'
  import LineChart from '../../chart'
  import DatePicker from 'vue2-datepicker'

  export default {
    name: 'chart-component',
    components: {
      MainContentComponent,
      LineChart,
      DatePicker
    },
    data: function() {
      return {
        datacollection: null,
        startDate: "2019-05-17",
        endDate: "2019-06-17",
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData: function() {
        this.datacollection = {
          labels: [...this.getRandomDay()],
          datasets: [
            {
              label: 'Số lượt xe ra vào',
              backgroundColor: '#f87979',
              data: [...this.getRandomInt()]
            }
          ]
        }
      },
      getRandomInt: function() {
        return Array.from({length: 30}, () => Math.floor(Math.random() * 1000));
      },
      getRandomDay: function() {
        let startDate = new Date(this.startDate); //YYYY-MM-DD
        let endDate = new Date(this.endDate); //YYYY-MM-DD
        let getDateArray = function(start, end) {
          let arr = new Array();
          let dt = new Date(start);
          while (dt <= end) {
            let dateObj = new Date(dt);
            let month = dateObj.getUTCMonth() + 1; //months from 1-12
            let day = dateObj.getUTCDate();
            let year = dateObj.getUTCFullYear();

            let newdate = year + "/" + month + "/" + day
            arr.push(newdate);
            dt.setDate(dt.getDate() + 1);
          }
          return arr;
        }
        return getDateArray(startDate, endDate);
      }
    },
    watch: {
      startDate: function(value) {
        console.log(value)
      },
      endDate: function(value) {
        console.log(value)
      }
    }
  }
</script>
