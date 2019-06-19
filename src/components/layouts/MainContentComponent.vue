<template>
  <section id="main-content" v-bind:class="{ 'ml-0': !isShowSidebar }">
    <section class="wrapper">
      <b-row>
        <b-col col lg="9">
          <!-- Content page -->
          <slot></slot>
        </b-col>
        <notification-component />
      </b-row>
    </section>
  </section>
</template>

<script>
  import NotificationComponent from './NotificationComponent'
  import EventBus from '../../event-bus'

  export default {
    name: 'main-content-component',
    data: function() {
      return {
        isShowSidebar: true
      }
    },
    components: {
      NotificationComponent
    },
    created: function() {
      EventBus.$on('ToggleSidebar', isShowSidebar => {
        this.isShowSidebar = isShowSidebar
      })
    }
  }
</script>

<style>
  #main-content {
    margin-left: 210px;
  }
  .ml-0 {
    margin-left: 0px;
  }
  .wrapper {
    display: inline-block;
    margin-top: 60px;
    padding: 0 15px 15px 15px;
    width: 100%;
  }
  .ds {
    background: #ffffff;
    padding-top: 20px;
  }
  .ds h3 {
    color: #ffffff;
    font-size: 16px;
    padding: 0 10px;
    line-height: 60px;
    height: 60px;
    margin: 0;
    background: #ff865c;
    text-align: center;
  }
  .ds .desc {
    border-bottom: 1px solid #eaeaea;
    display: inline-block;
    padding: 15px 0;
    width: 100%;
  }
  .ds .thumb {
    width: 30px;
    margin: 0 10px 0 20px;
    display: block;
    float: left;
  }
  .ds .details {
    width: 170px;
    float: left;
  }
  .ds > .desc p {
    font-size: 11px;
  }
  .ds p > span {
    font-size: 9px;
    text-transform: uppercase;
    font-style: italic;
    color: #666666;
  }
  .ds a {
    color: #68dff0;
  }
</style>