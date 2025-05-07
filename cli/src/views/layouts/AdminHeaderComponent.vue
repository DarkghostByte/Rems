<template>
  <header class="">
    <div class="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-12 bgHeader1">
      <div class="flex items-center ">
        <div class="flex justify-center items-center w-8 h-8 ">
          <i class="fa-solid fa-phone text-white text-xs md:text-xs lg:text-lg"></i>
        </div>
        <div class="flex justify-center items-center h-8 ">
          <h1 class="text-white text-[0.70rem] md:text-[0.70rem] lg:text-lg" data-i18n="contactUs">¿Requieres consulta? Contactanos
          </h1>
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
              <li><a href="#" class="text-neutral-700 text-md block py-2" data-i18n="home">Inicio</a></li>
              <li><a href="#" class="text-neutral-700 text-md block py-2" data-i18n="aboutUs">Sobre Nosotros</a></li>
              <li><a href="#" class="text-neutral-700 text-md block py-2" data-i18n="divisions">Divisiones</a></li>
              <li><a href="#" class="text-neutral-700 text-md block py-2" data-i18n="services">Servicios</a></li>
              <li><a href="#" class="text-neutral-700 text-md block py-2" data-i18n="clients">Clientes</a></li>
              <li><a href="#" class="text-neutral-700 text-md block py-2" data-i18n="contacts">Contactos</a></li>
            </ul>
          </div>
        </nav>
        <nav class="hidden sm:block">
          <ul class="flex space-x-4 lg:space-x-10">
            <li>
              <a href="#"
                class="text-neutral-700 hover:text-amber-500 font-bold text-md md:text-sm lg:text-xl relative group">
                <span data-i18n="home">Inicio</span>
                <span
                  class="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#"
                class="text-neutral-700 hover:text-amber-500 font-bold text-md md:text-sm lg:text-xl relative group">
                <span data-i18n="aboutUs">Sobre Nosotros</span>
                <span
                  class="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li class="relative group">
              <a href="#"
                class="items-center text-neutral-700 hover:text-amber-500 font-bold text-md md:text-sm lg:text-xl relative flex">
                <span data-i18n="divisions">Divisiones</span>
                <i class="fa-solid fa-sort-down text-sm ml-1"></i>
                <span
                  class="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <ul
                class="absolute top-full left-0 bg-white shadow-md rounded-md p-2 space-y-1 hidden group-hover:block w-52">
                <li class="relative group-cg"> <a href="#"
                    class="text-neutral-700 text-lg block py-1 hover:text-amber-500 flex justify-between items-center">
                    <span data-i18n="logistics3pl">3PL Logistica</span>
                    <i class="fa-solid fa-caret-right text-sm"></i>
                  </a>
                  <ul
                    class="absolute top-0 left-full bg-white shadow-md rounded-r-md ml-2 space-y-1 hidden group-cg-hover:block w-80">
                    <li><a href="#" class="text-neutral-700 text-lg block py-1 hover:text-amber-500"
                        data-i18n="douglasPort">REMS Port of Dougla and Arizona</a></li>
                    <li><a href="#" class="text-neutral-700 text-lg block py-1 hover:text-amber-500"
                        data-i18n="pasoJuarez">Paso, TX / Juarez, Chih</a></li>
                    <li><a href="#" class="text-neutral-700 text-lg block py-1 hover:text-amber-500"
                        data-i18n="hermosillo">Hermosillo, Sonora</a></li>
                  </ul>
                </li>
                <li><a href="#" class="text-neutral-700 text-lg block py-1 hover:text-amber-500"
                    data-i18n="transport">Transporte</a></li>
                <li><a href="#" class="text-neutral-700 text-lg block py-1 hover:text-amber-500"
                    data-i18n="railwayEngineering">Ingeniería ferroviaria</a></li>
              </ul>
            </li>
            <li class="relative group">
              <a href="#"
                class="items-center text-neutral-700 hover:text-amber-500 font-bold text-md md:text-sm lg:text-xl relative flex">
                <span data-i18n="services">Servicios</span>
                <i class="fa-solid fa-sort-down text-sm ml-1"></i>
                <span
                  class="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <ul
                class="absolute top-full left-0 bg-white shadow-md rounded-md p-2 space-y-1 hidden group-hover:block w-72">
                <li><a href="#" class="text-neutral-700 text-lg block py-1 hover:text-amber-500"
                    data-i18n="warehousing">Almacenamiento</a></li>
                <li><a href="#" class="text-neutral-700 text-lg block py-1 hover:text-amber-500"
                    data-i18n="doortoDoor">Puerta-a-Puerta</a></li>
                <li><a href="#" class="text-neutral-700 text-lg block py-1 hover:text-amber-500"
                    data-i18n="crossborder">Cruzar la frontera</a></li>
                <li><a href="#" class="text-neutral-700 text-lg block py-1 hover:text-amber-500"
                    data-i18n="crossdockingandTransshipment">Muelle cruzado y Transbordo</a></li>
                <li><a href="#" class="text-neutral-700 text-lg block py-1 hover:text-amber-500"
                    data-i18n="freightTransportation">Transporte de mercancías</a></li>
                <li><a href="#" class="text-neutral-700 text-lg block py-1 hover:text-amber-500"
                    data-i18n="drayageandLastMileService">Servicio de Acarreo y Última Milla</a></li>
                <li><a href="#" class="text-neutral-700 text-lg block py-1 hover:text-amber-500"
                    data-i18n="roadTransportation">Transporte Terrestre</a></li>
              </ul>
            </li>
            <li>
              <a href="#"
                class="text-neutral-700 hover:text-amber-500 font-bold text-md md:text-sm lg:text-xl relative group">
                <span data-i18n="clients">Clientes</span>
                <span
                  class="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#"
                class="text-neutral-700 hover:text-amber-500 font-bold text-md md:text-sm lg:text-xl relative group">
                <span data-i18n="contacts">Contactos</span>
                <span
                  class="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="flex flex-shrink-0 items-center ml-4 md:ml-6">
        <div class="flex sm:flex space-x-2 mr-3">
          <button id="translate-es"
            class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-3 rounded-md focus:outline-none focus:shadow-outline"
            @click="translateToSpanish">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvLgc7kJxsAj8OlJilbLLooCOCPA6Dh8GIMQ&s"
              alt="Bandera de México" class="h-5 w-8">
          </button>
          <button id="translate-en"
            class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-3 rounded-md focus:outline-none focus:shadow-outline"
            @click="translateToEnglish">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1235px-Flag_of_the_United_States.svg.png"
              alt="Bandera de USA" class="h-5 w-8">
          </button>
        </div>
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
      translations: {
        es: {
          contactUs: '¿Requieres consulta? Contactanos',
          home: 'Inicio',
          aboutUs: 'Sobre Nosotros',
          divisions: 'Divisiones',
          services: 'Servicios',
          clients: 'Clientes',
          contacts: 'Contactos',
          logistics3pl: '3PL Logistica',
          douglasPort: 'REMS Port of Dougla and Arizona',
          pasoJuarez: 'Paso, TX / Juarez, Chih',
          hermosillo: 'Hermosillo, Sonora',
          transport: 'Transporte',
          railwayEngineering: 'Ingeniería ferroviaria',
          warehousing: 'Almacenamiento',
          doortoDoor: 'Puerta-a-Puerta',
          crossborder: 'Cruzar la frontera',
          crossdockingandTransshipment: 'Muelle cruzado y Transbordo',
          freightTransportation: 'Transporte de mercancías',
          drayageandLastMileService: 'Servicio de Acarreo y Última Milla',
          roadTransportation: 'Transporte Terrestre',
        },
        en: {
          contactUs: 'Do you require a consultation? Contact us',
          home: 'Home',
          aboutUs: 'About Us',
          divisions: 'Divisions',
          services: 'Services',
          clients: 'Clients',
          contacts: 'Contacts',
          logistics3pl: '3PL Logistics',
          douglasPort: 'REMS Port of Douglas and Arizona',
          pasoJuarez: 'El Paso, TX / Juarez, Chih',
          hermosillo: 'Hermosillo, Sonora',
          transport: 'Transportation',
          railwayEngineering: 'Railway Engineering',
          warehousing: 'Warehousing',
          doortoDoor: 'Door-to-Door',
          crossborder: 'Cross Border',
          crossdockingandTransshipment: 'Cross docking and Transshipment',
          freightTransportation: 'Freight Transportation',
          drayageandLastMileService: 'Drayage and Last Mile Service',
          roadTransportation: 'Road Transportation',
        },
      },
      currentLanguage: 'es', // Idioma por defecto
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
  methods: {
    translateToSpanish() {
      this.currentLanguage = 'es';
      this.applyTranslations();
    },
    translateToEnglish() {
      this.currentLanguage = 'en';
      this.applyTranslations();
    },
    applyTranslations() {
      const elements = document.querySelectorAll('[data-i18n]');
      elements.forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (this.translations[this.currentLanguage] && this.translations[this.currentLanguage][key]) {
          el.textContent = this.translations[this.currentLanguage][key];
        }
      });
    },
  },
  setup() {
    const store = useStore();
    const isMobile = ref(window.innerWidth < 768);

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
}

.bgHeader2 {
  background-color: rgb(0, 255, 85);
}

.bgHeader {
  background-color: white;
  border-bottom: 1px solid #e2e8f0;
}

.group-cg:hover .group-cg-hover\:block {
  display: block;
}
</style>