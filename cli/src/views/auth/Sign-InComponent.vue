<template>

    <div class="flex h-screen justify-center items-center rounded-r-3xl">
                
        <el-form 
        :label-position="'top'" 
        style="max-width: 100%; ; margin-top: 55%;"
        :model="form1"
        :rules="rules"
        ref="formRef"
        

        
        > 

        <div class="flex justify-center text-gray-200 font-mono">
            <h1 style="font-size: 60px; ">Bienvenido</h1>
        </div>
        <div class="flex justify-center items-center text-gray-200 font-mono">
            <h2 style="font-size: 15px; ">Registrate para acceder a nuestros servicios</h2>
        </div>

        <br>

        <el-form-item label="Name" prop="name">
            <el-input v-model="form1.name" 
            placeholder="Insenta tu nombre"
            />
        </el-form-item>

        <el-form-item label="Email" prop="email" >
            <el-input v-model="form1.email" 
            type="Email"
            placeholder="Insenta tu correo"
            />
        </el-form-item>

        <el-form-item label="Password" prop="password" >
            <el-input v-model="form1.password" 
            type="password"
            placeholder="Insenta tu contraseña"
            show-password
            />
        </el-form-item>
        
        <el-form-item>
            <el-form-group v-model="form1.licence">
                <el-checkbox value="true" name="licence">
                    <label @click="dialogVisible = true">Aceptar terminos y condiciones</label>
                </el-checkbox>
            </el-form-group>
        </el-form-item>

        <div class="flex justify-center items-center">

            <el-form-item>
                <router-link to="/admin/home">
                    <el-button class="btnIniciar2" type="info" @click="submitForm(formRef)">Registrarme</el-button>
                </router-link>
                
            </el-form-item>

        </div>
        

        </el-form>
    </div>

        <!-- MODAL -->

        <el-dialog
        v-model="dialogVisible"
        title="Términos y Condiciones"
        width="800">

        <div class="h-72 overflow-scroll">
            1. Aceptación de los términos y condiciones
            <br>
            Al usar este sitio web, usted acepta los siguientes términos y condiciones. Si no está de acuerdo con estos términos y condiciones, no use este sitio web.
            <br><br>
            2. Modificaciones a los términos y condiciones
            <br>
            Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. La versión más reciente de los términos y condiciones estará disponible en este sitio web. Al continuar utilizando este sitio web después de que se hayan publicado cambios en los términos y condiciones, usted acepta dichos cambios.
            <br><br>
            3. Uso del sitio web
            <br>
            Este sitio web es solo para uso personal y no comercial. No puede usar este sitio web para ningún propósito ilegal o no autorizado.
            <br><br>
            4. Contenido del sitio web
            <br>
            El contenido de este sitio web, incluidos los textos, imágenes, videos y software, es propiedad nuestra o de nuestros licenciantes. No puede copiar, distribuir, modificar, transmitir, crear trabajos derivados o de otro modo utilizar el contenido del sitio web sin nuestro consentimiento previo por escrito.
            <br><br>
            5. Pedidos y pagos
            <br>
            Cuando realiza un pedido en este sitio web, acepta pagar el precio de compra del producto o servicio que ha pedido. Aceptamos las siguientes formas de pago:
            <br>
            * Tarjetas de crédito.
            <br>
            * Débito.
            <br>
            * Paypal.
            <br>
            * Transferencia bancaria.
            <br>
            Nos reservamos el derecho de cancelar cualquier pedido por cualquier motivo.
            <br><br>
            6. Envíos y devoluciones
            <br>
            Los productos se enviarán a la dirección que haya proporcionado al realizar el pedido. Los plazos de entrega pueden variar.
            <br>
            Tiene derecho a devolver cualquier producto que haya comprado en este sitio web dentro de los 14 días posteriores a la recepción del producto. Para obtener más información sobre cómo devolver un producto, consulte nuestra política de devoluciones.
            <br><br>
            7. Garantías
            <br>
            Todos los productos vendidos en este sitio web están cubiertos por una garantía del fabricante. Para obtener más información sobre la garantía de un producto específico, consulte la descripción del producto.
            <br><br>
            8. Limitación de responsabilidad
            <br>
            En ningún caso seremos responsables de ningún daño directo, indirecto, incidental, especial, consecuencial o punitivo que resulte del uso de este sitio web o de cualquier producto o servicio comprado en este sitio web.
            <br><br>
            9. Indemnización
            <br>
            Usted acepta indemnizarnos y mantenernos indemnes de cualquier daño, pérdida, costo o gasto, incluidos los honorarios razonables de abogados, que surjan de o estén relacionados con su uso de este sitio web o cualquier producto o servicio comprado en este sitio web.
            <br><br>
            10. Ley aplicable y jurisdicción
            <br>
            Estos términos y condiciones se regirán e interpretarán de conformidad con las leyes de México. Cualquier disputa que surja de o esté relacionada con estos términos y condiciones se someterá a la jurisdicción exclusiva de los tribunales de México.
            <br><br>
            11. Disposiciones generales
            <br>
            Estos términos y condiciones constituyen el acuerdo completo entre usted y nosotros con respecto al uso de este sitio web. Si alguna disposición de estos términos y condiciones se considera inválida o inaplicable, dicha disposición se eliminará de estos términos y condiciones y las disposiciones restantes permanecerán en pleno vigor y efecto.
            <br><br>
            12. Contacto
            <br>
            Si tiene alguna pregunta sobre estos términos y condiciones, puede contactarnos a través de nuestro sitio web.
            <br><br>

        </div>
        
        <template #footer>
            <div class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancelar</el-button>
            <el-button type="primary" @click="dialogVisible = false">
                Confirmar
            </el-button>
            </div>
        </template>
        </el-dialog>

        <!-- END MODAL -->

</template>

<script>
import axios from  'axios';
import { ElNotification } from "element-plus";
import { reactive } from "vue"

    export default{
        methods: {
                    submitForm(){
                        console.log(this.form1)
                        this.$refs.formRef.validate((valid,fields)=>{
                            if(valid){
                                console.log(fields)
                                axios.post(process.env.VUE_APP_ROOT_API+'users',this.form1).then(response=>{
                                    console.log(response)
                                    if(response.data.status == 'success'){
                                        ElNotification({
                                            title:"Exito",
                                            message:'Usuario creado',
                                            type: 'success'
                                        })
                                    }else{
                                        ElNotification({
                                            title:'ERROR',
                                            message: 'Ha ocurrido un error',
                                            type: 'success'
                                        })
                                    }
                                }).catch(error=>{
                            console.log(error)
                            ElNotification({
                                title: 'Exito',
                                message: 'Te has regristado a EzBiker',
                                type:  'success'
                            })
                        })
                    }else{
                        ElNotification({
                            title:'ERROR',
                            message:'Favor de llenar los campos',
                            type:'error'
                        })
                    }
                })
            }
        },
        name:'RegisterComponent',
        data:()=>({
            dialogVisible: false,
            formRef: undefined,
            url:process.env.VUE_APP_ROOT_ASSETS,
                form1:reactive({
                    name:"Liadeo Chavez",
                    email:"liadeo@gmail.com",
                    password:"123",
                    password2:"123",
                    licence:[]
                
                }),
                rules:{
                    name:[
                        {required:true, message:'El nombre es requerido', trigger:'blur'},
                        { min:3, max:100, message:'La longitud deberia ser de 3 a 100', trigger:'blur' }
                    ],
                    email:[
                        {required:true, message:'El correo es requerido', trigger:'blur'},
                        { type:'email', message:'El correo no es valido', trigger:'blur' }
                    ],
                    password:[
                        {required:true, message:'La contraseña es requerida', trigger:'blur'}
                    ]
                }
                    
                    
            })
        }
</script>

<style>

.btnIniciar2 {
    width: 150px; 
    height: 40px; 
    font-size: 16px; 
    background-color: #c94b0e; 
    color: rgb(25 25 25); 
    font-weight: 800; 
    border: 1px #ffffff solid;

}

.btnIniciar2:hover {
    background-color: #ffffff;
    font-size: 20px;
    color: #c94b0e;
    font-weight: 800;
    border: 1px #c94b0e solid;
}


</style>
