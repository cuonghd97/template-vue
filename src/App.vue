<template>
  <div id="app">
    <!-- Header -->
    <section id="container">
       <header-component></header-component>
    </section>
    <!-- Sidebar -->
    <aside>
      <sidebar-component show_sidebar="true"></sidebar-component>
      <router-view ></router-view>
      <!-- <MenuItem show_navbar='true'></MenuItem> -->
    </aside>
  </div>
</template>

<script>
import HeaderComponent from './components/layouts/HeaderComponent.vue'
import SidebarComponent from './components/layouts/SidebarComponent'
// import MenuItem from './components/layouts/MenuItem'

export default {
  name: 'app',
  components: {
    HeaderComponent,
    SidebarComponent,
  },
  data() {
    return {
    }
  },
}
</script>

<style>
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;;
  }
  body {
    color: #797979;
    background: #f2f2f2;
    padding: 0px !important;
    margin: 0px !important;
    font-size: 13px;
}
</style>
