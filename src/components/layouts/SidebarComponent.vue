<template>
  <div
    id='sidebar'
    tabindex="5000"
    style="overflow: hidden; outline: none; margin-left: 0px;"
    v-show="isShowSidebar"
  >
    <ul class="sidebar-menu" style="display: block">
      <p class="centered">
        <a href="#">
          <img src="@/assets/images/ui-sam.jpg" class="img-circle" width="60" />
        </a>
      </p>
      <h5 class="centered">Marcel Newman</h5>
      <!-- UI Element -->
      <li class="sub-menu">
        <a
          id="is-active-link"
          v-on:click="Expand('uielement')"
          v-bind:class="{ collapsed: current_location != 'uielement', active: current_location == 'uielement' }"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <span style="cursor: pointer;">
            <font-awesome-icon icon='desktop'></font-awesome-icon>
            UI Element
          </span>
        </a>
        <transition name="slide">
          <ul
            id="collapseTwo "
            class="show list sub"
            v-if="current_location == 'uielement'"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <li>
              <router-link
                class="nav-link"
                style="width: 100%;"
                active-class="active"
                v-bind:to="{ name: 'ui-element' }"
              >
                General
              </router-link>
            </li>
            <li>
              <router-link
                class="nav-link"
                active-class="active"
                style="width: 100%;"
                to="/button"
              >
                Button
              </router-link>
            </li>
          </ul>
        </transition>
      </li>
      <!-- Component -->
      <li class="sub-menu">
        <a
          id="is-active-link"
          v-on:click="Expand('component')"
          v-bind:class="{ collapsed: current_location != 'component', active: current_location == 'component' }"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <span style="cursor: pointer;">
            <font-awesome-icon icon='icons'></font-awesome-icon>
            Component
          </span>
        </a>
        <transition name="slide">
          <ul
            id="collapseTwo "
            class="show list sub"
            v-if="current_location == 'component'"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <li>
              <router-link
                class="nav-link"
                style="width: 100%;"
                active-class="active"
                to="/general"
              >
                General
              </router-link>
            </li>
            <li>
              <router-link
                class="nav-link"
                active-class="active"
                style="width: 100%;"
                to="/todo-list"
              >
                Todo list
              </router-link>
            </li>
          </ul>
        </transition>
      </li>
      <!-- Chart -->
      <li class="sub-menu">
        <router-link
          id="is-active-link"
          to='/chart'
        >
          <span style="cursor: pointer;">
            <font-awesome-icon icon='icons'></font-awesome-icon>
            Chart
          </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'sidebar-component',
  props: ['isShowSidebar'],
  data: function() {
    return {
      current_location: "",
      isDropped: false,
      isActive: 1
    }
  },
  methods: {
    dropIt: function() {
      this.isDropped = !this.isDropped
    },
    Expand: function(data) {
      if (this.current_location == data) {
        this.current_location = ""
      } else {
        this.current_location = data
      }
    }
  }
}
</script>

<style>
  .list {
    transform-origin: top;
    transition: 0.3s;
  }
  .slide-enter,
  .slide-leave-to {
    transform: scaleY(0);
  }
  .active{
    background: transparent;
  }
  #sidebar {
    overflow: hidden !important;
    outline: none !important;
    margin-left: 0px !important;
    width: 210px;
    height: 100%;
    position: fixed;
    background: #424a5d;
  }
  ul.sidebar-menu {
    margin-top: 75px !important;
  }
  ul.sidebar-menu, ul.sidebar-menu li ul.sub {
    margin: -2px 0 0;
    padding: 0;
  }
  .centered {
    text-align: center;
  }
  p {
    margin: 0 0 10px;
  }
  .img-circle {
    border-radius: 50%;
  }
  img {
    vertical-align: middle;
    border: 0;
  }
  #sidebar h5 {
    color: #f2f2f2;
    font-weight: 700;
  }
  #sidebar ul li {
    position: relative;
  }
  ul.sidebar-menu li.sub-menu {
    line-height: 15px !important;
  }
  ul.sidebar-menu li {
    line-height: 20px !important;
    margin-bottom: 5px;
    margin-left: 10px;
    margin-right: 10px;
  }
  ul li {
    list-style: none;
  }
  ul.sidebar-menu li #is-active-link {
    color: #aeb2b7;
    text-decoration: none;
    display: block;
    padding: 15px 0 15px 10px;
    font-size: 12px;
    outline: none;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  ul.sidebar-menu li a svg {
    font-size: 15px;
    padding-right: 1px;
  }
  ul.sidebar-menu li a span {
    display: inline-block;
    margin: 0 0 0 5px;
  }
  ul.sidebar-menu, ul.sidebar-menu li ul.sub {
    margin: -2px 0 0;
    padding: 0;
  }
  #sidebar .sub-menu > .sub li {
    padding-left: 32px;
  }
  #sidebar ul li {
    position: relative;
  }
  ul.sidebar-menu li ul.sub li {
    background: #424a5d;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
  }
  #sidebar > ul > li.active > ul.sub, #sidebar > ul > li > ul.sub > li > a {
    display: block;
  }
  ul.sidebar-menu li ul.sub li a {
    font-size: 12px;
    padding: 6px 0;
    line-height: 35px;
    height: 35px;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
    color: #aeb2b7;
  }
  .sub-menu {
    cursor: pointer;
  }
  .sub-menu > a:hover {
    color: #000 !important;
  }
  #is-active-link.active, #is-active-link:hover, #is-active-link:focus {
    background: #68dff0 !important;
    color: #000 !important;;
    display: block;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  ul.sidebar-menu li ul.sub li a:hover {
    color: white;
    background: transparent;
  }
</style>