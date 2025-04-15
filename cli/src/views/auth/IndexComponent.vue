<template>
    <div class="fondoIndex min-h-screen flex justify-center items-center p-6">
        <div
            class="bg-[#ffffff] flex flex-col justify-center items-center md:flex-row w-full max-w-md lg:max-w-max h-auto rounded-xl overflow-hidden shadow-lg">
            <div class="contenedor1 relative md:w-1/2 flex-grow p-2">
                <img src="https://remslogistics.com/wp-content/uploads/2024/06/logo-ingles-espanol-300x108.png"
                    class="top-0 left-0 w-full h-full object-cover" alt="Logo" />
            </div>

            <div class="contenedor2 w-screen md:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 flex-grow">
                <el-form :label-position="'top'" class="w-full">
                    <div class="flex justify-center text-gray-800 font-sans font-bold mb-4">
                        <h1 class="text-3xl md:text-4xl lg:text-5xl">Bienvenido</h1>
                    </div>
                    <div class="text-gray-800 font-sans font-bold mb-6">
                        <h2 class="text-sm md:text-base text-center">Para continuar, da clic en iniciar</h2>
                    </div>
                    <div class="flex justify-center items-center">
                        <el-form-item class="w-36">
                            <router-link to="/admin/home" class="w-full">
                                <el-button class="btnIniciar font-sans font-bold w-full" type="info">
                                    <p>Acceder</p>
                                </el-button>
                            </router-link>
                        </el-form-item>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginComponent',
    data: () => ({
        name: 'LoginComponent',
        dialogVisible: false,
        formRef: undefined,
        url: process.env.VUE_APP_ROOT_ASSETS,
    }),
};
</script>

<style scoped>
.fondoIndex {
    background-image: url('https://images.unsplash.com/photo-1587293852726-70cdb56c2866?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bG9naXN0aWNzfGVufDB8fDB8fHww');
    background-size: cover;    
    background-position: center;
    background-repeat: no-repeat;
}

.contenedor1 {
    background-color: transparent;
    border-radius: 10px 0 0 10px;
}
.contenedor2 {
    background-color: rgb(234 135 17);
    border-radius: 0 10px 10px 0;
    height: 468px;
}
.btnIniciar {
    width: 100%;
    height: 40px;
    font-size: 16px;
    background-color: rgb(31 41 55);
    color: rgb(255, 255, 255);
    font-weight: 800;
    border: 1px #ffffff solid;
}
.btnIniciar:hover {
    background-color: #ffffff;
    font-size: 20px;
    color: rgb(31 41 55);
    font-weight: 800;
    border: 1px rgb(31 41 55) solid;
}

@media (max-width: 768px) {
    .flex {
        flex-direction: column;
        height: auto;
        align-items: center;
    }

    .contenedor1 {
        width: 100%;
        border-radius: 10px 10px 0 0;
        flex-grow: 1;
    }

    .contenedor2 {
        width: 100%;
        border-radius: 0 0 10px 10px;
        flex-grow: 1;
    }

}

@media (max-width: 480px) {
    .text-3xl {
        font-size: 2rem;
    }

    .text-sm {
        font-size: 0.8rem;
    }

    .p-6 {
        padding: 1.5rem;
    }
}
</style>