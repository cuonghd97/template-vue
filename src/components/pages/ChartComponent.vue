<template>
  <section id="main-content">
    <section class="wrapper">
      <b-row>
        <b-col col lg="12">
          <div id="filter">
            <span>Từ:
              <date-picker
                format="YYYY-MM-DD"
                lang="en"
                :class_input="'form-control'"
                v-model="startDate"
                placeholder="">
              </date-picker>
            </span>
            <span>Đến:
              <date-picker
                format="YYYY-MM-DD"
                lang="en"
                :class_input="'form-control'"
                v-model="endDate"
                placeholder="">
              </date-picker>
            </span>
            <b-button v-on:click='fillData()' variant="primary" size="sm">Tìm kiếm</b-button>
          </div>
          <div id="chart">
            <line-chart
              v-bind:chart-data='datacollection'
              v-bind:options='chartOptions'
              v-bind:style='{ height: "565px" }'
            ></line-chart>
          </div>
        </b-col>
      </b-row>
    </section>
  </section>
</template>

<script>
  import LineChart from '../../chart'
  import DatePicker from 'vue2-datepicker'

  export default {
    name: 'chart-component',
    components: {
      LineChart,
      DatePicker
    },
    data: function() {
      return {
        datacollection: null,
        startDate: "2019-05-17",
        endDate: "2019-06-17",
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false
        }
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
        return Array.from({length: 100}, () => Math.floor(Math.random() * 1000));
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
  }
</script>

<style>
  #filter {
    display: flex;
    justify-content: center;
    margin: 10px 0 0 0;
  }
  #filter button, #filter span {
    margin: 0 0 5px 5px;
  }
  #chart {
    text-align: center;
  }
</style>