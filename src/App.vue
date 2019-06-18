<template>
  <div id="app">
    <!-- Header -->
    <section id="container">
       <header-component v-bind:isShowSidebar.sync='isShowSidebar'></header-component>
    </section>
    <!-- Sidebar -->
    <aside>
      <sidebar-component v-bind:isShowSidebar.sync="isShowSidebar"></sidebar-component>
    </aside>
    <!-- Main content -->
    <router-view />
    <!-- Footer -->
  </div>
</template>

<script>
import HeaderComponent from './components/layouts/HeaderComponent'
import SidebarComponent from './components/layouts/SidebarComponent'
import FooterComponent from './components/layouts/FooterComponent'

export default {
  name: 'app',
  components: {
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  },
  data() {
    return {
      isShowSidebar: true
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
