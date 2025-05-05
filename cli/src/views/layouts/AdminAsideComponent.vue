<template>


  <aside id="Nav-Box" class="flex flex-col sm:flex-row sm:w-auto h-screen top-0 left-0  z-50" :class="{
    'w-16 sm:w-auto': !isExpanded && isMobile,
    'w-48 sm:w-auto': isExpanded && isMobile,
    'sm:flex sm:flex-col': !isMobile, /* Comportamiento normal en pantallas grandes */
    'hidden': !isMobile && !isExpanded /* Ocultar en grandes si no está expandido (aunque no debería pasar) */
  }">
  <div
      class="flex items-center justify-between h-20 px-4 sm:hidden"
      style="background-color: rgb(33, 33, 33)"
    >


 

    <button @click="toggleExpanded" class="text-gray-200 hover:text-white focus:outline-none focus:shadow-outline">
      <span class="material-symbols-outlined text-2xl">menu</span>
    </button>

  </div>
    <div class="flex-grow flex flex-col justify-between text-gray-200 hover:opacity-75"
      style="background-color: rgb(33 33 33)">
      <nav class="flex flex-col mx-4 my-6 space-y-4 ">
        <router-link to="/admin/home"
          class="inline-flex items-center justify-start py-3 hover:text-gray-100 hover:bg-orange-700 focus:text-gray-400 focus:bg-orange-500 rounded-3xl">
          <span class="material-symbols-outlined" :class="{ 'mr-0': isMobile && !isExpanded, 'mr-2': !isMobile || isExpanded }">home</span>
          <p id="HTxt" :class="{ 'hidden': isMobile && !isExpanded, 'block': !isMobile || isExpanded }">Inicio</p>
        </router-link>
        <router-link to="/admin/services"
          class="inline-flex items-center justify-start py-3 hover:text-gray-100 hover:bg-orange-700 focus:text-gray-400 focus:bg-orange-500 rounded-3xl">
          <span class="material-symbols-outlined" :class="{ 'mr-0': isMobile && !isExpanded, 'mr-2': !isMobile || isExpanded }">handyman</span>
          <p id="HTxt" :class="{ 'hidden': isMobile && !isExpanded, 'block': !isMobile || isExpanded }">Servicios</p>
        </router-link>
        <router-link to="/admin/products"
          class="inline-flex items-center justify-start py-3 hover:text-gray-100 hover:bg-orange-700 focus:text-gray-400 focus:bg-orange-500 rounded-3xl">
          <span class="material-symbols-outlined" :class="{ 'mr-0': isMobile && !isExpanded, 'mr-2': !isMobile || isExpanded }">motorcycle</span>
          <p id="HTxt" :class="{ 'hidden': isMobile && !isExpanded, 'block': !isMobile || isExpanded }">Motocicletas</p>
        </router-link>
        <router-link to="/admin/products"
          class="inline-flex items-center justify-start py-3 hover:text-gray-100 hover:bg-orange-700 focus:text-gray-400 focus:bg-orange-500 rounded-3xl">
          <span class="material-symbols-outlined" :class="{ 'mr-0': isMobile && !isExpanded, 'mr-2': !isMobile || isExpanded }">motorcycle</span>
          <p id="HTxt" :class="{ 'hidden': isMobile && !isExpanded, 'block': !isMobile || isExpanded }">Motocicletas</p>
        </router-link>

            <router-link to="/admin/accesorios" class="inline-flex items-center justify-start py-3 hover:text-gray-100 hover:bg-orange-700 focus:text-gray-400 focus:bg-orange-500 rounded-3xl">
              <span class="material-symbols-outlined" :class="{ 'mr-0': isMobile && !isExpanded, 'mr-2': !isMobile || isExpanded }">sports_motorsports</span>
              <p id="HTxt" :class="{ 'hidden': isMobile && !isExpanded, 'block': !isMobile || isExpanded }">Accesorios</p>
            </router-link>
      </nav>

    </div>
  </aside>
</template>

<script>
import { debounce } from 'lodash';

export default {
  name: 'AdminAsideComponent',
  data() {
    return {
      url: process.env.VUE_APP_ROOT_ASSETS,
      isExpanded: false,
      isMobile: window.innerWidth <= 768,
    };
  },
  methods: {
    toggleExpanded() {
      this.isExpanded = !this.isExpanded;
    },
  },
  mounted() {
    const resizeObserver = new ResizeObserver(
      debounce((entries) => {
        entries.forEach((entry) => {
          if (entry.target === this.$el) {
            this.isMobile = window.innerWidth <= 768;
            if (!this.isMobile) {
              this.isExpanded = true; // Mostrar siempre en pantallas grandes
            }
          }
        });
      }, 200)
    );

    resizeObserver.observe(this.$el);

    // Ocultar el aside inicialmente en móviles
    if (this.isMobile) {
      this.isExpanded = false;
    } else {
      this.isExpanded = true; // Mostrar expandido en pantallas grandes
    }
  },
};
</script>

<style>
</style>
