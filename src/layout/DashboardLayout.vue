<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Brest"
      title="Brest App"
    >
      <template v-slot:links>
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'ni ni-tv-2 text-primary',
            path: '/dashboard',
          }"
        />

        <sidebar-item
          :link="{
            name: 'Companies',
            icon: 'ni ni-bullet-list-67 text-primary',
            path: '#',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Outlets',
            icon: 'ni ni-shop text-primary',
            path: '#',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Menu Items',
            icon: 'ni ni-circle-08 text-primary',
            path: '#',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Users',
            icon: 'ni ni-single-02 text-primary',
            path: '#',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Reports',
            icon: 'ni ni-single-copy-04 text-primary',
            path: '#',
          }"
        />
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <!-- your content here -->
        <router-view></router-view>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardNavbar from "./DashboardNavbar.vue";
import ContentFooter from "./ContentFooter.vue";

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
  },
  data() {
    return {
      sidebarBackground: "vue", //vue|blue|orange|green|red|primary
    };
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
<style lang="scss"></style>
