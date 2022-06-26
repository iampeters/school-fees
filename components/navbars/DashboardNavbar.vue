<template>
  <nav
    class="dashboard-navbar px-4 md:px-10 h-[48px] md:h-[60px] bg-[#F9F9FA] md:bg-white flex items-center justify-between gap-6 z-10 shadow md:shadow-none md:border-b"
  >
    <button
      class="cursor-pointer text-gray-500 py-2 px-3 transform -translate-x-3"
      @click="$emit(`toggle-collapse-layout`)"
    >
      <hamburger-icon height="16" width="16" />
    </button>
     <div class="flex items-center gap-2 text-gray-600 text-sm">
        <el-dropdown trigger="click" @command="handleRowCommand($event)">
          <div class="flex items-center flex-gap-1 md:flex-gap-2.5">
            <div
              class="circle circle-16 md:circle-17 border-2 md:border-none"
            >
              <user-avatar-icon class="h-full"></user-avatar-icon>
            </div>
            <div class="cursor-pointer pl-3">
              <span class="capitalize pr-1 hidden md:inline">
               Kehinde
              </span>
              <span class="capitalize hidden md:inline">
                Ojeola
              </span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </div>
          </div>
          <el-dropdown-menu slot="dropdown" style="width: 10rem">
            <el-dropdown-item command="profile">
              <span class="flex gap-2 items-center">
                <profile-icon width="12" height="13"></profile-icon>
                <span>Profile</span>
              </span>
            </el-dropdown-item>
            <el-dropdown-item command="logout">
              <span class="flex gap-2 items-center text-red-600">
                <logout-icon width="12" height="13"></logout-icon>
                <span>Logout</span>
              </span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!-- <div
          class="navigation-bell-container hidden md:flex items-center h-full px-3"
        >
          <notification-bell-icon :active="true" />
        </div> -->
      </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import HamburgerIcon from "~/components/svg-icons/HamburgerIcon.vue"
import UserAvatarIcon from "~/components/svg-icons/UserAvatarIcon.vue"
import LogoutIcon from "~/components/svg-icons/LogoutIcon.vue"
import ProfileIcon from "~/components/svg-icons/ProfileIcon.vue"

export default Vue.extend({
  components: {
    HamburgerIcon,
    UserAvatarIcon,
    LogoutIcon,
    ProfileIcon
  },
  methods: {
    handleRowCommand(command: any) {
      console.log(command)
    },
  },
})
</script>

<style lang="postcss" scoped>
.navigation-bell-container {
  border-left: 1px solid rgb(230 231 236 / 60%);
}
</style>
