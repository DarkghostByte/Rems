<template>
    <div>
        <div class="flex justify-center items-center h-screen" style="background-color: rgb(49, 49, 49);">
            <div class="flex" style="width: 65%; height: 85%;">
                <div class="contenedor1 flex justify-center items-center rounded-l-3xl">
                    <img  class="" style="width: 100%; height: 27.5%;" />
                </div>
                <div class="contenedor2 flex justify-center">
                    <div class="flex flex-col justify-end items-center font-mono mb-5" style="text-align: center;">

                        <div class="flex">
                            <LogIn v-if="mostrarLogIn" />
                            <SignIn v-if="mostrarSignIn" />
                        </div>

                        <div class="flex flex-col items-center">
                            <div class="flex justify-center items-center text-gray-200 font-mono">
                                <h2 style="font-size: 20px;">Inicia sesion o registrate para iniciar</h2>
                            </div>
                            <div class="flex justify-center items-center">
                                <el-button class="btnLogIn" :disabled="logInDisabled" @click="toggleLogIn">
                                    <p class="m-1">Log-In</p>
                                </el-button>
                                <span style="color: white; margin: 0 10px;">O</span>
                                <el-button class="btnSignIn rounded-md" :disabled="signInDisabled"
                                    @click="toggleSignIn">
                                    <p class="m-1">Sign-In</p>
                                </el-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LogIn from './Log-InComponent.vue';
import SignIn from './Sign-InComponent.vue';

export default {
    name: 'LoginComponent',
    components: {
        LogIn,
        SignIn,
    },
    data() {
        return {
            mostrarLogIn: false,
            mostrarSignIn: false,
            logInDisabled: false,
            signInDisabled: false,
            url: process.env.VUE_APP_ROOT_ASSETS,
        };
    },
    methods: {
        toggleLogIn() {
            this.mostrarLogIn = true;
            this.mostrarSignIn = false;
            this.logInDisabled = true;
            this.signInDisabled = false;
        },
        toggleSignIn() {
            this.mostrarSignIn = true;
            this.mostrarLogIn = false;
            this.signInDisabled = true;
            this.logInDisabled = false;
        },
    },
};
</script>

<style>
.contenedor1 {
    background-color: rgb(33 33 33);
    width: 45%;
    height: 100%;
    border-radius: 10px 0% 0% 10px;
}

.contenedor2 {
    background-color: rgb(25 25 25);
    width: 55%;
    height: 100%;
    border-radius: 0% 10px 10px 0%;
}

.btnLogIn,
.btnSignIn {
    width: 100px;
    height: 30px;
    font-size: 20px;
    background-color: transparent;
    color: White;
    font-weight: 800;
    border: 1px transparent solid;
}

.btnLogIn:hover,
.btnSignIn:hover {
    background-color: transparent;
    font-size: 25px;
    color: #c94b0e;
    font-weight: 800;
    border: 1px transparent solid;
}

.btnLogIn:disabled,
.btnSignIn:disabled {
    background-color: transparent;
    color: #c94b0e;
    border: 1px transparent solid;
    cursor: not-allowed;
}

.btnLogIn:disabled:hover,
.btnSignIn:disabled:hover {
    background-color: transparent;
    color: #c94b0e;
    font-size: 20px;
    border: 1px transparent solid;
}
</style>