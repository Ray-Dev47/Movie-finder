<template>
  <div class="w-full top-0 z-40 bg-white fixed p-2 border-b-2 shadow-md">
    <div class="flex justify-between  max-w-6xl mx-auto">
      <div>
        <router-link to="/">
          <a href="#"
            ><img
              class="sm:h-28 sm:w-28 w-16 h-16 cursor-pointer"
              src="@/assets/img/logo.png"
              alt="logo"
          /></a>
        </router-link>
      </div>
      <div class="text-center flex justify-center flex-col cursor-pointer">
        <i
          class="fas fa-lightbulb text-xl dark:text-white sm:text-2xl mx-1"
        ></i>
        <button
          @click="switchTheme"
          class="font-bold focus:outline-none focus:none sm:mt-2"
        >
         Light Mode
        </button>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      isDark: false,
    };
  },
  methods: {
    switchTheme: function () {
      this.isDark = !this.isDark;

      // store.commit("SET_IS_DARK", this.isDark);
      this.mode = "Dark Mode";
    },
  },
};
</script>
