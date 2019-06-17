<template>
  <section id="main-content">
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

  export default {
    name: 'main-content-component',
    components: {
      NotificationComponent
    }
  }
</script>

<style>
  #main-content {
    margin-left: 210px;
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