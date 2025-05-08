<template>
  <div class="flex min-h-screen bgHome">
    <div class="flex-grow text-black " @scroll="handleScroll">
      <AdminHeaderComponent :scrollPosition="scrollPosition" @apply-translations="applyTranslationsToRoute"
        class="fixed top-0 left-0 w-full z-50" />
      <main class="p-3 sm:p-3 md:p-4 lg:p-0 space-y-6">
        <router-view :apply-translations="applyTranslationsToRoute" />
      </main>
      <AdminFooterComponent />
    </div>
  </div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
</template>

<script>
import AdminHeaderComponent from "@/views/layouts/AdminHeaderComponent.vue";
import AdminFooterComponent from "@/views/layouts/AdminFooterComponent.vue";
import { ref, getCurrentInstance } from "vue"; // Importa getCurrentInstance
import { useRoute } from 'vue-router';

export default {
  name: "AdminLayoutComponent",
  components: {
    AdminHeaderComponent,
    AdminFooterComponent,
  },
  setup() {
    const scrollPosition = ref(0);
    const route = useRoute();

    const handleScroll = (event) => {
      scrollPosition.value = event.target.scrollTop;
    };

    const applyTranslationsToRoute = (translations) => {
      if (route.component && route.component.setup) {
        const instance = getCurrentInstance();
        const routeComponentRef = instance.refs.routeComponent; // Intenta acceder a la ref del componente de la ruta

        if (routeComponentRef) {
          routeComponentRef.currentLanguage = translations.currentLanguage;
          routeComponentRef.translations = translations.translations;
          routeComponentRef.applyTranslations();
        } else if (route.component.__file.includes('HomeComponent')) { // Solución temporal para HomeComponent
          // Accede directamente a la instancia de HomeComponent si es la ruta actual
          const homeInstance = getCurrentInstance().refs.homeComponent;
          if (homeInstance) {
            homeInstance.currentLanguage = translations.currentLanguage;
            homeInstance.translations = translations.translations;
            homeInstance.applyTranslations();
          }
        }
      } else if (route.components && route.components.default) {
        // Para componentes definidos directamente en la ruta
        const instance = getCurrentInstance();
        const routeComponentRef = instance.refs.routeComponent;

        if (routeComponentRef) {
          routeComponentRef.currentLanguage = translations.currentLanguage;
          routeComponentRef.translations = translations.translations;
          routeComponentRef.applyTranslations();
        }
      }
    };

    return {
      scrollPosition,
      handleScroll,
      applyTranslationsToRoute,
    };
  },
};
</script>

<style>
.bgHome {
  height: 100vh;
  /* Asegura que el layout tenga altura para hacer scroll */
  overflow-y: auto;
  /* Permite el scroll dentro del layout */
}
</style>