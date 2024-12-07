class Sonido {
  constructor(sonido) {
    this.sonido = sonido;
  }

  comienza() {
    // Revisa si la tecla 'S' o 's' fue presionada
    if (key === 's' || key === 'S') {
      if (this.sonido.isPlaying()) {
        this.sonido.stop(); // Detiene el sonido si ya está reproduciéndose
      } else {
        this.sonido.play(); // Reproduce el sonido si no está reproduciéndose
      }
    }
  }
}
let sonidoControl;
