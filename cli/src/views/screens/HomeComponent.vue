<template>
    <div class="w-full bgHomerems relative overflow-hidden ">
        <div class="w-full h-full bg-indigo-950 opacity-75 absolute top-0 left-0 z-10">
        </div>
        <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-20">
            <h1 class="text-white font-semibold text-center text-md sm:text-md md:text-lg lg:text-5xl opacity-100"
                data-i18n="homeHeroText">
                Mejorando su Logística en Ambos Lados de la Frontera
            </h1>
        </div>
        <div class="absolute bottom-[-1px] left-0 w-full h-6 md:h-12 lg:h-24 bg-white z-30 clip-path-custom-trapezoid">
        </div>
    </div>

    <div class="flex flex-col w-full justify-start items-center p-4 bg-amber-500">
        <h1 class="text-2xl lg:text-6xl font-bold text-indigo-950" data-i18n="homeText1">Soluciones Logísticas a la Medida</h1>
        <h2 class="text-lg lg:text-xl font-semibold text-indigo-950 lg:mt-3 mb-2" data-i18n="homeText2">Que Traen Su Éxito Global</h2>
        <div class="flex w-full h-[30rem] lg:h-96 justify-center items-center space-x-0 lg:space-x-8 bg-red-500 p-8 flex-col sm:flex-row space-y-8 sm:space-y-0">
            <div class="flex flex-row w-3/4 h-3/4 lg:w-4/5 lg:h-3/4 justify-start items-center bg-blue-500 sm:w-52 rounded-lg">
                <div class="flex justify-center items-center p-4 bg-green-500 m-2 rounded-full w-14 h-14 lg:w-16 lg:h-16">
                    <i class="fa-solid fa-warehouse fa-xl"></i>
                </div>
                <div class="flex flex-col">
                   <div>0</div>
                   <div>0</div>
                </div>
            </div>
            <div class="flex flex-row w-3/4 h-3/4 lg:w-4/5 lg:h-3/4 justify-start items-center bg-blue-500 sm:w-52 rounded-lg">
                <div class="flex justify-center items-center p-4 bg-green-500 m-2 rounded-full w-14 h-14 lg:w-16 lg:h-16">
                    <i class="fa-solid fa-truck fa-xl"></i>
                  </div>
                <div class="flex flex-col">
                   <div>0</div>
                   <div>0</div>
                </div>
            </div>
            <div class="flex flex-row w-3/4 h-3/4 lg:w-4/5 lg:h-3/4 justify-start items-center bg-blue-500 sm:w-52 rounded-lg">
                <div class="flex justify-center items-center p-4 bg-green-500 m-2 rounded-full w-14 h-14 lg:w-16 lg:h-16">
                    <i class="fa-solid fa-train fa-xl"></i>
                </div>
                <div class="flex flex-col">
                   <div>0</div>
                   <div>0</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeComponent',
    data() {
        return {
            name: 'HomeComponent',
            url: process.env.VUE_APP_ROOT_ASSETS,
            translations: { // Inicializa el objeto de traducciones
                es: {
                    homeHeroText: "Mejorando su Logística en Ambos Lados de la Frontera",
                    homeText1: "Soluciones Logísticas a la Medida",
                    homeText2: "Que Traen Su Éxito Global",
                },
                en: {
                    homeHeroText: "Improving Your Logistics on Both Sides of the Border",
                    homeText1: "Tailored Logistics Solutions",
                    homeText2: "That Bring Your Global Success",
                    
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

.parent {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    }
    
    .div1 { grid-area: 1 / 1 / 3 / 2; }
    .div2 { grid-area: 1 / 2 / 2 / 3; }
    .div3 { grid-area: 2 / 2 / 3 / 3; }
</style>