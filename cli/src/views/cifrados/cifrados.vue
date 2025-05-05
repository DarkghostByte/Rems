<template>
    <div>
        <div>
          <label for="plainText">Texto sin cifrar:</label>
          <input type="text" id="plainText" v-model="plainText">
        </div>
        <button @click="encryptData">Cifrar</button>
        <div>
          <label for="encryptedText">Texto cifrado:</label>
          <textarea id="encryptedText" v-model="encryptedText" readonly></textarea>
        </div>
        <button @click="decryptData">Descifrar</button>
        <div>
          <label for="decryptedText">Texto descifrado:</label>
          <textarea id="decryptedText" v-model="decryptedText" readonly></textarea>
        </div>
      </div>
</template>

<script>
import CryptoJS from 'crypto-js';

export default {
    name: 'cifrados',
    data: () => ({
        name: 'cifrados',
        plainText: 'Información secreta',
        encryptedText: '',
        decryptedText: '',
        secretKey: 'MiClaveSecretaSuperSegura',
    }),
    methods: {
    encryptData() {
      this.encryptedText = CryptoJS.AES.encrypt(this.plainText, this.secretKey).toString();
    },
    decryptData() {
      try {
        const bytes = CryptoJS.AES.decrypt(this.encryptedText, this.secretKey);
        this.decryptedText = bytes.toString(CryptoJS.enc.Utf8);
        if (!this.decryptedText) {
          this.decryptedText = 'La clave de descifrado es incorrecta';
        }
      } catch (error) {
        this.decryptedText = 'Error al descifrar';
      }
    },
  },
};
</script>

<style>

</style>
