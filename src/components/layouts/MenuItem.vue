<template>
  <ul
    class="navbar-nav sidebar sidebar-dark accordion"
    style="max-width:192px "
    id="accordionSidebar"
    v-if="show_navbar"
  >
    <a
      class="sidebar-brand d-flex align-items-center justify-content-center"
      style="background:#ff9e16; border-right: 2px solid #eee; height:22px;font-family: 'Open Sans',sans-serif; "
      href="index.html"
    >
      <!-- <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-wifi" style="color:#fff"></i>
      </div> -->
      <div class="sidebar-brand-text mx-3" style="color:#fff; "><span><b>Open Wifi</b></span></div>
    </a>
    <hr class="sidebar-divider my-0">
    <li class="nav-item">
      <router-link class="nav-link" style="width: 100%;" active-class="active"  to="/dashboard">
        <i class="fas fa-fw fa-tachometer-alt" style="color:rgb(255, 158, 22);"></i>
        <span class="textnavbar" ><b>Dashboard</b></span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" style="width: 100%;" active-class="active" to="/analytics">

        <i class="fas fa-chart-bar" style="color:rgb(255, 158, 22);"></i>
        <span class="textnavbar"><b>Analytics</b></span>
      </router-link>
    </li>
    <li class="nav-item">
      <a
        class="nav-link"
        v-on:click="Expand('devices')"
        v-bind:class="{ collapsed: current_location != 'devices' }"
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded="true"
        aria-controls="collapseTwo"
      >
        <i class="fas fa-network-wired" style="color:rgb(255, 158, 22);"></i>
        <span class="textnavbar" style="cursor: pointer;"><b>Components</b></span>
      </a>
      <transition name="slide">
        <div
          id="collapseTwo "
          class="collapse show list"
          v-if="current_location == 'devices'"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <router-link class="nav-link" style="width: 100%;" active-class="active" to="/controller">
              <span class="txtList"><b>Controller</b></span>
            </router-link>
            <router-link
              class="nav-link"
              active-class="active"
              style="width: 100%;"
              to="/detail/500cef19-b6c0-4bcc-90c5-b0f80fc4f694"
            >
              <span class="txtList"><b>Access Point</b></span>
            </router-link>
          </div>
        </div>
      </transition>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" style="width: 100%;" active-class="active" to="/topfrequency">
        <i class="fas fa-chart-line" style="color:rgb(255, 158, 22);"></i>
        <span class="textnavbar"><b>Top Frequency</b></span>
      </router-link>
    </li>
    <hr class="sidebar-divider d-none d-md-block">
  </ul>
</template>

<script>
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);

export default {
  name: "menu-item",
  props: ["show_navbar"],
  data() {
    return {
      current_location: "",
      isDropped: false,
      isActive:1
    };
  },
  methods: {
    dropIt() {
      this.isDropped = !this.isDropped;
    },
    Expand(data) {
      if (this.current_location == data) {
        this.current_location = "";
      } else {
        this.current_location = data;
      }
    }
  }
};
</script>

<style scoped>
.list {
  transform-origin: top;
  transition: transform 0.3s ease-in-out;
}
.slide-enter,
.slide-leave-to {
  transform: scaleY(0);
}
.txtList {
  color: #6e707e;
}
.textnavbar {
  color: #6a6a6a;
  }
.textnavbar b{
  font-family: 'Open Sans',sans-serif;
  font-size: 14px;
  color: #6a6a6a;
}
.sidebar {
  background-color: #eeeeee;
}
.nav-item {
  background: #fff;
  border-right: 2px solid #eee;
}
.nav-link{
  width: 100%
}
.nav-item:hover {
  background: #f2f2f2;
}
.active{
  background-color: #f2f2f2
}
</style>