<template>
        <div class="flex h-screen justify-center items-center rounded-r-3xl">
            <el-form :label-position="'top'" style="max-width: 100%; margin-top: 25%;" :model="form1"
                :rules="rules" ref="formRef">
                <div class="flex justify-center text-gray-200 font-mono">
                    <h1 style="font-size: 60px; ">Bienvenido</h1>
                </div>
                <div class="flex justify-center items-center text-gray-200 font-mono">
                    <h2 style="font-size: 15px; ">Inicia sesion para acceder a nuestros servicios</h2>
                </div>
                <br>
                <el-form-item label="Email" prop="name">
                    <el-input v-model="form1.name" placeholder="Insenta tu Email" />
                </el-form-item>
                <el-form-item label="Contraseña" prop="password">
                    <el-input v-model="form1.password" type="password" placeholder="Insenta tu Contraseña"
                        show-password />
                </el-form-item>
                <br>
                <div class="flex justify-center items-center">
                    <el-form-item>
                        <router-link to="/admin/home">
                            <el-button
                            @click="submitForm(formRef)"
                            class="btnIniciar"
                            >
                                Iniciar Sesion
                            </el-button>
                        </router-link>
                    </el-form-item>
                </div>
            </el-form>
        </div>
</template>

<script>
import { reactive } from "vue"
import SignIn from './Sign-InComponent.vue';

export default {
    methods: {
    
    },
    name: 'Log-InComponent',
    data: () => ({
        name: 'LoginComponent',
        components: {
        SignIn,
    },
        computed: {
            loggedIn() {
                return this.$store.state.auth.status.loggedIn
            },
            currentUser() {
                return this.$store.state.auth.user
            }

        },
        dialogVisible: false,
        formRef: undefined,
        url: process.env.VUE_APP_ROOT_ASSETS,
        mostrarSignIn: false,
        form1: reactive({
            name: "Jesus Chavez",
            password: "123",
            password2: "123",
            licence: []
        }),
        rules: {
            name: [
                { required: true, message: 'El nombre es requerido', trigger: 'blur' },
                { min: 3, max: 100, message: 'La longitud deberia ser de 3 a 100', trigger: 'blur' }
            ],
            password: [
                { required: true, message: 'La contraseña es requerida', trigger: 'blur' }
            ]
        }
    })
}
</script>

<style>

.btnIniciar {
    width: 180px; 
    height: 40px; 
    font-size: 16px; 
    background-color: #c94b0e; 
    color: rgb(25 25 25); 
    font-weight: 800; 
    border: 1px #ffffff solid;

}

.btnIniciar:hover {
    background-color: #ffffff;
    font-size: 20px;
    color: #c94b0e;
    font-weight: 800;
    border: 1px #c94b0e solid;
}


</style>
