<template>
  <div class="w-full top-0 z-40 bg-white dark:bg-gray-900 fixed p-2 border-b-2 shadow-md">
    <div class="flex justify-between max-w-6xl mx-auto">
      <div>
        <router-link to="/">
          <a href="#"
            ><img 
              v-if="isDark"
              class="sm:h-28 sm:w-28 w-16 h-16 cursor-pointer"
              src="@/assets/img/logo.png"
              alt="logo"    
          />
          <img
              v-else
              class="sm:h-28 sm:w-28 w-16 h-16 cursor-pointer"
              src="@/assets/img/logo-white.png"
              alt="logo"/>
          </a>
        </router-link>
      </div>
      <div class="text-center text-gray-800 dark:text-white flex justify-center flex-col cursor-pointer" @click="switchTheme">
        <i
          class="fas fa-lightbulb text-xl sm:text-2xl mx-1"
        ></i>
        <button v-if="!isDark"
          class="font-bold focus:outline-none focus:none sm:mt-2"
        >
         Light Mode
        </button>
        <button v-else
          class="font-bold focus:outline-none focus:none sm:mt-2"
        >
         Dark Mode
        </button>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      isDark: JSON.parse(localStorage.getItem('is-dark')),
    };
  },
  methods: {
    switchTheme() {
      if(!this.isDark){
        document.documentElement.classList.remove('dark')
        localStorage.setItem('is-dark', false);
        this.isDark = true;

      }else{
        document.documentElement.classList.add('dark')
        localStorage.setItem('is-dark', true);
        this.isDark = false;
      }

      // store.commit("SET_IS_DARK", this.isDark);
      this.mode = "Dark Mode";
    },
  },
  mounted(){
    this.switchTheme();
  }
};
</script>
