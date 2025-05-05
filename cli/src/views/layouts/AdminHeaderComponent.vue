<template>
  <header class="">
    <div class="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-12 bgHeader1">
      <div class="flex items-center ">
        <div class="flex justify-center items-center w-8 h-8 ">
          <i class="fa-solid fa-phone text-white text-xs md:text-xs lg:text-lg"></i>
        </div>
        <div class="flex justify-center items-center h-8 ">
          <h1 class="text-white text-xs md:text-xs lg:text-lg">¿Requieres consulta? Contactanos</h1>
        </div>
      </div>
      <div class="flex items-center space-x-2">
        <div class="flex justify-center items-center h-6 w-6 md:h-6 md:w-6 lg:h-8 lg:w-8 bg-neutral-700 rounded-md">
          <i class="fa-brands fa-linkedin text-xs md:text-xs lg:text-lg text-white"></i>
        </div>
        <div class="flex justify-center items-center h-6 w-6 md:h-6 md:w-6 lg:h-8 lg:w-8 bg-neutral-700 rounded-md">
          <i class="fa-brands fa-facebook text-xs md:text-xs lg:text-lg text-white"></i>
        </div>
        <div class="flex justify-center items-center h-6 w-6 md:h-6 md:w-6 lg:h-8 lg:w-8 bg-neutral-700 rounded-md">
          <i class="fa-brands fa-instagram text-xs md:text-xs lg:text-lg text-white"></i>
        </div>
        <div class="flex justify-center items-center h-6 w-6 md:h-6 md:w-6 lg:h-8 lg:w-8 bg-neutral-700 rounded-md">
          <i class="fa-brands fa-youtube text-xs md:text-xs lg:text-lg text-white"></i>
        </div>
        <div class="flex justify-center items-center h-6 w-6 md:h-6 md:w-6 lg:h-8 lg:w-8 bg-neutral-700 rounded-md">
          <i class="fa-brands fa-google-plus-g text-xs md:text-xs lg:text-lg text-white"></i>
        </div>
      </div>
    </div>
    <!--
    <button
      v-if="isMobile"
      @click="toggleAside"
      class="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 mr-4"
    >
      <span class="sr-only">Abrir menú</span>
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
    -->

    <div class="flex items-center h-20 px-4 sm:px-6 lg:px-8 bgHeader">
      <router-link to="/auth/index" class="inline-flex items-center justify-center h-20 mr-4 sm:mr-6">
        <img src="https://remslogistics.com/wp-content/uploads/2024/06/logo-ingles-espanol-300x108.png"
          class="flex items-center justify-center h-10 sm:h-10 md:h-16 w-36 sm:w-36 md:w-44" />
      </router-link>

      <div class="flex justify-center flex-grow h-12 sm:h-8 items-center">
        <nav class="sm:hidden relative w-full flex justify-center">
          <button id="menuBtn" class="text-white focus:outline-none">
            <i class="fa-solid fa-bars text-2xl text-neutral-700"></i>
          </button>
          <div id="menuDropdown" class="absolute top-10 bg-white shadow-md hidden w-52 rounded-md">
            <ul class="flex flex-col items-center py-4">
              <li><a href="#" class="text-neutral-700 text-md block py-2">Inicio</a></li>
              <li><a href="#" class="text-neutral-700 text-md block py-2">Sobre Nosotros</a></li>
              <li><a href="#" class="text-neutral-700 text-md block py-2">Divisiones</a></li>
              <li><a href="#" class="text-neutral-700 text-md block py-2">Servicios</a></li>
              <li><a href="#" class="text-neutral-700 text-md block py-2">Clientes</a></li>
              <li><a href="#" class="text-neutral-700 text-md block py-2">Contactos</a></li>
            </ul>
          </div>
        </nav>
        <nav class="hidden sm:block">
          <ul class="flex space-x-4 lg:space-x-10">
            <li>
              <a href="#" class="text-neutral-700 hover:text-amber-500 font-bold text-md md:text-sm lg:text-xl relative group">
                Inicio
                <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#" class="text-neutral-700 hover:text-amber-500 font-bold text-md md:text-sm lg:text-xl relative group">
                Sobre Nosotros
                <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li class="relative group">
              <a href="#" class="text-neutral-700 hover:text-amber-500 font-bold text-md md:text-sm lg:text-xl relative">
                Divisiones
                <i class="fa-solid fa-sort-down text-sm"></i>
                <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <ul class="absolute top-full left-0 bg-white shadow-md rounded-md p-2 space-y-1 hidden group-hover:block w-52">
                <li><a href="#" class="text-neutral-700 text-lg block py-1 hover:text-amber-500">CG</a></li>
                <li><a href="#" class="text-neutral-700 text-lg block py-1 hover:text-amber-500">NCG</a></li>
                <li><a href="#" class="text-neutral-700 text-lg block py-1 hover:text-amber-500">CHIH</a></li>
              </ul>
            </li>
            <li>
              <a href="#" class="text-neutral-700 hover:text-amber-500 font-bold text-md md:text-sm lg:text-xl relative group">
                Servicios
                <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#" class="text-neutral-700 hover:text-amber-500 font-bold text-md md:text-sm lg:text-xl relative group">
                Clientes
                <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#" class="text-neutral-700 hover:text-amber-500 font-bold text-md md:text-sm lg:text-xl relative group">
                Contactos
                <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="flex flex-shrink-0 items-center ml-4 sm:ml-6">
        <router-link to="/auth/index" class="border-l border-gray-300 pl-3 ml-3 space-x-1">
          <button to="admin/loj"
            class="relative p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 rounded-full">
            <span class="sr-only">Cerrar sesión</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </router-link>
      </div>
    </div>

  </header>
</template>

<script>
import { useStore } from 'vuex';
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'AdminHeaderComponent',
  data() {
    return {
      url: process.env.VUE_APP_ROOT_ASSETS,
    };
  },
  mounted() {
    const menuBtn = document.getElementById('menuBtn');
    const menuDropdown = document.getElementById('menuDropdown');
    const divisionsBtn = document.getElementById('divisionsBtn');
    const divisionsSubMenu = document.getElementById('divisionsSubMenu');

    if (menuBtn && menuDropdown) {
      menuBtn.addEventListener('click', () => {
        menuDropdown.classList.toggle('hidden');
      });
    }

    if (divisionsBtn && divisionsSubMenu) {
      divisionsBtn.addEventListener('click', () => {
        divisionsSubMenu.classList.toggle('hidden');
      });
    }
  },
  setup() {
    const store = useStore();
    const isMobile = ref(window.innerWidth < 768); // Define el breakpoint para móvil

    const handleResize = () => {
      isMobile.value = window.innerWidth < 768;
    };

    onMounted(() => {
      window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
    });

    const toggleAside = () => {
      store.commit('setAsideOpen', !store.state.isAsideOpen);
    };

    return {
      isMobile,
      toggleAside,
    };
  },
};
</script>

<style>
.bgHeader1 {
  background-color: rgb(254 152 0);
  border-bottom: 1px solid #e2e8f0;
  /* Añade una línea sutil en la parte inferior */
}

.bgHeader2 {
  background-color: rgb(0, 255, 85);
}

.bgHeader {
  background-color: white;
  border-bottom: 1px solid #e2e8f0;
  /* Añade una línea sutil en la parte inferior */
}
</style>