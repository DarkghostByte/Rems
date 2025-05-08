<template>
    <div class="w-full bgHomerems relative overflow-hidden ">
      <div class="w-full h-full bg-indigo-950 opacity-75 absolute top-0 left-0 z-10">
      </div>
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-20">
        <h1 class="text-white font-semibold text-center text-md sm:text-md md:text-lg lg:text-5xl opacity-100"
          data-i18n="divisionsHeroText">
          Nuevo texto
        </h1>
      </div>
      <div class="absolute bottom-[-1px] left-0 w-full h-6 md:h-12 lg:h-24 bg-white z-30 clip-path-custom-trapezoid">
  
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DivisionsComponent',
    data() {
      return {
        name: 'DivisionsComponent',
        url: process.env.VUE_APP_ROOT_ASSETS,
        translations: { // Inicializa el objeto de traducciones
          es: {
            divisionsHeroText: "Nuevo texto",
          },
          en: {
            divisionsHeroText: "New text",
          },
        },
        currentLanguage: 'es', // Idioma por defecto
      };
    },
    mounted() {
      this.applyTranslations(); // Aplica las traducciones al montar el componente
    },
    methods: {
      applyTranslations() {
        const elements = document.querySelectorAll("[data-i18n]");
        elements.forEach((el) => {
          const key = el.getAttribute("data-i18n");
          if (
            this.translations[this.currentLanguage] &&
            this.translations[this.currentLanguage][key]
          ) {
            el.textContent = this.translations[this.currentLanguage][key];
          }
        });
      },
    },
  };
  </script>
  
  <style>
  .bgHomerems {
    background-image: url(https://remslogistics.com/wp-content/uploads/2024/10/REMS_header_home_collage-768x384.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* Ajustado para enfocar la parte superior */
    position: relative;
    padding-bottom: 25%;
    /* Ajusta este valor según la altura deseada */
  }
  
  .clip-path-custom-trapezoid {
    clip-path: polygon(0% 100%, 50% 15%, 100% 100%, 100% 100%);
  }
  </style>