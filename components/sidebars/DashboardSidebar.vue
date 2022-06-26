<template>
  <aside
    id="dashboard-sidebar"
    class="flex flex-col justify-center text-gray-500 text-sm pb-4 relative"
    :class="{ collapsed: collapsed }"
  >
    <!-- Start:: header -->
    <header
      class="mb-2 grid items-center gap-2 grid-cols-[1fr,min-content] border md:border-none py-4"
    >
      <div class="flex flex-1 h-10 gap-2 items-center pl-4">
        <div
          class="bg-payazablue-500 rounded-full text-white flex w-[40px] h-[40px] justify-center items-center"
        >
          JK
        </div>
        <div class="flex flex-col hide-on-collapse">
          <span class="text-gray-800 font-medium text-sm">
            James Kesington</span
          >
          <span class="truncate text-xs text-gray-400">
            jameskesinton@gmail.com
          </span>
        </div>
      </div>
      <button
        class="md:hidden text-xl py-2 px-3 transform translate-x-3"
        @click="$emit('close')"
      >
        &times;
      </button>
    </header>
    <!-- End:: header -->
    <!-- Start main navigation body -->
    <div class="flex-1 overflow-y-auto custom-scrollbar pt-4">
      <router-link
        to="/dashboard"
        class="link-item"
        :class="{ active: $nuxt.$route.path.startsWith('/dashboard') }"
      >
        <home-icon width="14"
height="14"></home-icon>
        <span class="hide-on-collapse">Getting Started</span>
      </router-link>
      <article
        v-for="linkNav in dynamicNav"
        :key="linkNav.heading"
        class="py-6"
      >
        <span class="flex items-center gap-3 h-8 px-4 rounded uppercase mb-2"
          ><span class="hide-on-collapse">{{ linkNav.heading }}</span></span
        >
        <ul>
          <li v-if="linkNav.title !== 'user'">
            <router-link
              to="/dashboard/payments"
              @click.prevent="toggleShow"
              :class="{
                active:
                  $nuxt.$route.path.startsWith('/dashboard/payments') ||
                  $nuxt.$route.path.startsWith('/dashboard/payments/make-payments'),
              }"
            >
              <document-icon width="14" height="14"></document-icon>
              <span class="hide-on-collapse">Payments</span>
            </router-link>
            <ul v-if="showPayment" class="ml-6 hide-on-collapse">
              <li>
                <router-link
                  to="/make-payments"
                  class="nested-link__item"
                  :class="{
                    active: $nuxt.$route.path.startsWith('/dashboard/payments/make-payments'),
                  }"
                >
                  <span class="hide-on-collapse">Make Payments</span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/payments"
                  class="nested-link__item"
                  :class="{
                    active: $nuxt.$route.path.startsWith('/dashboard/payments'),
                  }"
                >
                  <span class="hide-on-collapse">All Payment</span>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </article>
    </div>
  </aside>
</template>

<script>
import HomeIcon from "../svg-icons/HomeIcon.vue"
import DocumentIcon from "../svg-icons/DocumentIcon.vue"

export default {
  components: {
    HomeIcon,
    DocumentIcon,
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showPayment: false,
      dynamicNav: [
        {
          heading: "Payments",
        },
      ],
    }
  },
  methods: {
    toggleShow() {
      this.showPayment = !this.showPayment
    },
  },
}
</script>

<style lang="postcss" scoped>
#dashboard-sidebar {
  width: max-content;
  min-width: 248px;

  & > * {
    @apply px-4;
    width: 100%;
  }
}

.link-item {
  @apply flex items-center gap-3 h-9 px-4 rounded cursor-pointer hover:bg-payazablue-500 hover:bg-opacity-5;

  &.active {
    @apply text-payazablue-500 bg-payazablue-500 bg-opacity-5;
  }
}

.nested-link__item {
   @apply flex items-center gap-3  h-9 px-4 rounded cursor-pointer hover:bg-payazablue-500 hover:bg-opacity-5;

    &.active {
    @apply text-payazablue-500;
  }
}

/* Collapse logic */
/* .hide-on-collapse {
} */
</style>

<style lang="scss" scoped>
@keyframes to-absolute {
  to {
    position: absolute;
  }
}
@media only screen and (min-width: 768px) {
  .hide-on-collapse {
    opacity: 1;
    transition: all ease-in-out 0.2s;
  }
  #dashboard-sidebar.collapsed {
    min-width: 0;
    position: relative;
    .hide-on-collapse {
      opacity: 0;
      pointer-events: none;
      animation: to-absolute;
      animation-delay: 0.2s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }
  }
}
</style>
