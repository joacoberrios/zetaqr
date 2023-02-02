<template>
  <div>
    <h1>Validador de QR</h1>
    <p>Coloca la imagen del QR en la siguiente zona para leer su contenido:</p>
    <input type="file" @change="validateQR"/>
    <p v-if="validatedText">El contenido del QR es: {{ validatedText }}</p>
  </div>
</template>

<script>
import QRCodeReader from 'qrcode-reader'

export default {
  data() {
    return {
      validatedText: ''
    }
  },
  methods: {
    validateQR(event) {
      const reader = new QRCodeReader()
      const file = event.target.files[0]
      const image = new Image()
      image.src = URL.createObjectURL(file)
      reader.decodeFromImage(image, (error, result) => {
        if (error) {
          console.error(error)
        } else {
          this.validatedText = result.result
        }
      })
    }
  }
}
</script>
