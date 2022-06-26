<template>
  <div id="dashboard-layout"
:class="{ collapsed: layoutCollapsed }">
    <div id="sidebar-overlay"
@click="layoutCollapsed = false"></div>
    <div
      id="sidebar-container"
      @mouseover="sidebarHovered = true"
      @mouseleave="sidebarHovered = false"
    >
      <dashboard-sidebar
        :collapsed="layoutCollapsed && !sidebarHovered"
        class="h-full"
        @close="layoutCollapsed = false"
      />
    </div>
    <div
      id="main-content"
      ref="mainContent"
      class="relative overflow-x-hidden overflow-y-auto"
    >
      <dashboard-navbar
        class="sticky top-0"
        @toggle-collapse-layout="toggleLayoutCollapse"
      />
      <router-view class="px-4 py-6 sm:px-7 sm:py-8 md:px-10 md:py-8" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import DashboardNavbar from "~/components/navbars/DashboardNavbar.vue"
import DashboardSidebar from "~/components/sidebars/DashboardSidebar.vue"
declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    mainContent: any
  }
}

export default Vue.extend({
  name: "DashboardLayout",
  components: { DashboardSidebar, DashboardNavbar },
  data() {
    return {
      layoutCollapsed: false,
      sidebarHovered: false,
      key: 0,
    }
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        (this.$refs.mainContent as HTMLElement).scrollTop = 0

        if (window.innerWidth < 768) this.layoutCollapsed = false
      }
    },
  },
  mounted() {
    window.mainContent = this.$refs.mainContent
  },
  methods: {
    toggleLayoutCollapse() {
      this.layoutCollapsed = !this.layoutCollapsed
    },
  },
})
</script>

<style lang="scss" scoped>
#dashboard-layout {
  display: grid;
  // grid-template: var(--viewport-height, 100vh) / 80px max-content 1fr;
  grid-template-rows: var(--viewport-height, 100vh);
  grid-template-columns: 80px max-content 1fr;
  overflow: hidden;
  background: white;
  position: relative;
}

#sidebar-container {
  border-right: 1px solid rgb(230 231 236 / 60%);
  background: white;
  z-index: 20;
  transition: all 0.2s ease-in-out;
  position: absolute;
  height: var(--viewport-height, 100vh);
  top: 0;
  left: 0;
  transform: translateX(-100%);
  @media only screen and (min-width: 768px) {
    position: relative;
    transform: translateX(0%);
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
}

#sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 19;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

#main-content {
  grid-row: 1 / 2;
  grid-column: 1 / -1;

  @media only screen and (min-width: 768px) {
    grid-column: 3 / -1;
  }
}

#dashboard-layout.collapsed {
  #sidebar-overlay {
    pointer-events: all;
    opacity: 1;
  }
  #sidebar-container {
    transform: translateX(0%);
  }
  @media only screen and (min-width: 768px) {
    #sidebar-overlay {
      display: none;
    }
    #sidebar-container {
      overflow: hidden;
      grid-column-end: 2;
      &:hover {
        grid-column-end: 3;
        box-shadow: 3px 0px 5px rgb(185 185 185 / 60%);
      }
    }
    #main-content {
      grid-column-start: 2;
    }
  }
}
</style>
