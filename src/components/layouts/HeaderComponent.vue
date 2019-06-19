<template>
  <header class="header black-bg">
    <div class="sidebar-toggle-box" v-on:click="toggleSidebar">
        <font-awesome-icon icon='bars'/>
    </div>
  <a href="#" class="logo" id="logo"><b>DASHGUM</b></a>
  <div class="nav notify-row" id="top_menu">
  </div>
  <div class="top-menu">
    <b-nav class="pull-right top-menu">
          <li><a class="logout" href="login.html">Logout</a></li>
    </b-nav>
  </div>
</header>
</template>

<script>
  import EventBus from '../../event-bus'

  export default {
    name: 'header-component',
    props: ['isShowSidebar'],
    methods: {
      toggleSidebar: function() {
        const isShowSidebar = this.isShowSidebar
        this.$emit('update:isShowSidebar', !isShowSidebar)
        EventBus.$emit('ToggleSidebar', !isShowSidebar)
      }
    }
  }
</script>

<style>
  .black-bg {
    background: #ffd777;
    border-bottom: 1px solid #c9aa5f;
  }
  .header {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 1002;
  }
  .header, .footer {
    min-height: 60px;
    padding: 0 15px;
  }
  .sidebar-toggle-box {
    float: left;
    padding-right: 15px;
    margin-top: 20px;
    cursor: pointer;
  }
  a.logo {
    font-size: 24px;
    color: #ffffff;
    float: left;
    margin-top: 15px;
    text-transform: uppercase;
  }
  a, a:hover, a:focus {
    text-decoration: none;
    outline: none;
  }
  a {
    background: transparent;
  }
  #logo {
    text-decoration: none;
    outline: none;
  }
  .nav > li {
    position: relative;
    display: block;
  }
  .top-menu {
    margin-top: 0.5rem;
  }
  ul li {
    list-style: none;
  }
  ul.top-menu > li > .logout {
    color: #f2f2f2;
    font-size: 12px;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    border: 1px solid #64c3c2 !important;
    padding: 5px 15px;
    margin-right: 15px;
    background: #68dff0;
    margin-top: 15px;
  }
  ul.top-menu > li > a {
    color: #666666;
    font-size: 16px;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    border: 1px solid #666666 !important;
    padding: 2px 6px;
    margin-right: 15px;
  }
  .pull-right {
    float: right !important;
  }
</style>