<template>
  <div
    id='sidebar'
    tabindex="5000"
    style="overflow: hidden; outline: none; margin-left: 0px;"
    v-if="show_sidebar"
  >
    <ul class="sidebar-menu" style="display: block">
      <p class="centered">
        <a href="#">
          <img src="@/assets/images/ui-sam.jpg" class="img-circle" width="60" />
        </a>
      </p>
      <h5 class="centered">Marcel Newman</h5>
      <li class="sub-menu nav-item">
        <a
          class="nav-link"
          v-on:click="Expand('submenu')"
          b-bind:class="{ collapsed: current_location != 'submenu' }"
          data-toggle="collapse"
          data-target="#collapeSubmenu"
          aria-expanded="true"
          aria-controls="collapeSubmenu"
        >
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
      <!-- <li class="sub-menu">
        <a href="#">
          <font-awesome-icon icon='desktop' />
          <span>Menu 1</span>
        </a>
        <ul class="sub">
          <li>
            <a href="#">Sub 1</a>
          </li>
          <li>
            <a href="#">Sub 2</a>
          </li>
          <li>
            <a href="#">Sub 3</a>
          </li>

        </ul>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'sidebar-component',
}
</script>

<style>
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
    line-height: 15px;
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
  ul.sidebar-menu li a {
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
  /*#sidebar > ul > li > ul.sub {
    display: none;
  }*/
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
  .sub-menu > a.active, .sub-menu > a:hover, .sub-menu > a:focus {
    background: #68dff0;
    color: #fff;
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
  /*ul.sidebar-menu li > a.active, ul.sidebar-menu li > a:hover, ul.sidebar-menu li > a:focus {
    background: #68dff0;
    color: #fff;
    display: block;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }*/
</style>