<template>
  <nav
    class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white"
    id="sidenav-main"
  >
    <div class="container-fluid">
      <!--Toggler-->
      <navbar-toggle-button @click="showSidebar">
        <span class="navbar-toggler-icon"></span>
      </navbar-toggle-button>
      <router-link class="navbar-brand" to="/">
        <img :src="logo" class="navbar-brand-img" alt="..." />
      </router-link>

      <slot name="mobile-right">
        <ul class="nav align-items-center d-md-none">
          <base-dropdown class="nav-item" position="right">
            <template v-slot:title>
              <a
                class="nav-link nav-link-icon"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="ni ni-bell-55"></i>
              </a>
            </template>

            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </base-dropdown>
          <base-dropdown class="nav-item" position="right">
            <template v-slot:title>
              <a class="nav-link" href="#" role="button">
                <div class="media align-items-center">
                  <span class="avatar avatar-sm rounded-circle">
                    <img
                      alt="Image placeholder"
                      src="img/theme/team-1-800x800.jpg"
                    />
                  </span>
                </div>
              </a>
            </template>

            <div class="dropdown-header noti-title">
              <h6 class="text-overflow m-0">Welcome!</h6>
            </div>
            <router-link to="/profile" class="dropdown-item">
              <i class="ni ni-single-02"></i>
              <span>My profile</span>
            </router-link>
            <router-link to="/profile" class="dropdown-item">
              <i class="ni ni-settings-gear-65"></i>
              <span>Settings</span>
            </router-link>
            <router-link to="/profile" class="dropdown-item">
              <i class="ni ni-calendar-grid-58"></i>
              <span>Activity</span>
            </router-link>
            <router-link to="/profile" class="dropdown-item">
              <i class="ni ni-support-16"></i>
              <span>Support</span>
            </router-link>
            <div class="dropdown-divider"></div>
            <a href="#!" class="dropdown-item">
              <i class="ni ni-user-run"></i>
              <span>Logout</span>
            </a>
          </base-dropdown>
        </ul>
      </slot>
      <slot></slot>
      <div
        v-show="$sidebar.showSidebar"
        class="navbar-collapse collapse show"
        id="sidenav-collapse-main"
      >
        <div class="navbar-collapse-header d-md-none">
          <div class="row">
            <div class="col-6 collapse-brand">
              <router-link to="/">
                <img :src="logo" />
              </router-link>
            </div>
            <div class="col-6 collapse-close">
              <navbar-toggle-button
                @click="closeSidebar"
              ></navbar-toggle-button>
            </div>
          </div>
        </div>

        <ul class="navbar-nav">
          <slot name="links"> </slot>
        </ul>
        <!--Divider-->
        <hr class="my-3" />
        <!--Heading-->
<!--        <h6 class="navbar-heading text-muted">Documentation</h6>-->
<!--        &lt;!&ndash;Navigation&ndash;&gt;-->
<!--        <ul class="navbar-nav mb-md-3">-->
<!--          <li class="nav-item">-->
<!--            <a-->
<!--              class="nav-link"-->
<!--              href="https://brest.app/documentation"-->
<!--            >-->
<!--              <i class="ni ni-spaceship"></i> Getting started-->
<!--            </a>-->
<!--          </li>-->
<!--        </ul>-->

        <ul v-if="$store.state.auth" class="account navbar-nav align-items-start d-none d-md-flex">
          <li class="nav-item dropdown">
            <base-dropdown class="nav-link pr-0" direction="up">
              <template v-slot:title>
                <div class="media align-items-center">
              <span class="avatar avatar-sm rounded-circle">
                <img
                    alt="Image placeholder"
                    src="img/theme/team-4-800x800.jpg"
                />
              </span>
                  <div class="media-body ml-2 d-none d-lg-block">
                    <span class="mb-0 text-sm font-weight-bold">Miranda Frost</span>
                  </div>
                </div>
              </template>
              <div class="dropdown-header noti-title">
                <h6 class="text-overflow m-0">Welcome!</h6>
              </div>
              <router-link to="/profile" class="dropdown-item">
                <i class="ni ni-single-02"></i>
                <span>My profile</span>
              </router-link>
              <router-link to="/profile" class="dropdown-item">
                <i class="ni ni-settings-gear-65"></i>
                <span>Settings</span>
              </router-link>
              <router-link to="/profile" class="dropdown-item">
                <i class="ni ni-calendar-grid-58"></i>
                <span>Activity</span>
              </router-link>
              <router-link to="/profile" class="dropdown-item">
                <i class="ni ni-support-16"></i>
                <span>Support</span>
              </router-link>
              <div class="dropdown-divider"></div>
              <router-link @click="logOut" to="/login" class="dropdown-item">
                <i class="ni ni-user-run"></i>
                <span>Logout</span>
              </router-link>
            </base-dropdown>
          </li>
        </ul>
        <ul  v-else  class="account navbar-nav mb-md-3">
          <a  href="/login" class=" active router-link-exact-active nav-link">
            <i class="ni ni-single-02 text-primary"></i>
            <span class="nav-link-text">Account</span>
          </a>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import NavbarToggleButton from "@/components/NavbarToggleButton";

export default {
  name: "sidebar",
  components: {
    NavbarToggleButton,
  },
  props: {
    logo: {
      type: String,
      default: "img/brand/BrestAppLogo.png",
      description: "Sidebar app logo",
    },
    autoClose: {
      type: Boolean,
      default: true,
      description:
        "Whether sidebar should autoclose on mobile when clicking an item",
    },
  },
  provide() {
    return {
      autoClose: this.autoClose,
    };
  },
  methods: {
    closeSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    showSidebar() {
      this.$sidebar.displaySidebar(true);
    },
    logOut(){
      console.log('aa');
      this.$store.commit("logOut");
    }
  },
  beforeUnmount() {
    if (this.$sidebar.showSidebar) {
      this.$sidebar.showSidebar = false;
    }
  },
};
</script>
<style>
  .account{
    position: absolute;
    bottom: 0;
  }
</style>
