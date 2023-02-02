<template>
  <div>
    <h1>Generador de QR</h1>
    <form>
      <label>Ingresa el texto que quieres convertir en QR:</label>
      <textarea v-model="text"></textarea>
      <button @click.prevent="generateQR">Generar QR</button>
    </form>
    <div v-if="qrImage">
      <img :src="qrImage" />
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode'

export default {
  data() {
    return {
      text: '',
      qrImage: ''
    }
  },
  methods: {
    async generateQR() {
      const qr = await QRCode.toDataURL(this.text)
      this.qrImage = qr
    }
  }
}
</script>
