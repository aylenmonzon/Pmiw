//Aylen Monzon comision 3

let ilusion;
let estado = "princ";

function preload() {
  ilusion = loadImage('https://as1.ftcdn.net/v2/jpg/02/94/33/20/1000_F_294332047_Vbvu844bLk7LMNEcPuIZOvCD9eLS6vmR.jpg'); // Asegúrate de tener la imagen "ilusion.jpeg" en el directorio del sketch
}

function setup() {
  createCanvas(800, 400);  
  background(255);
  image(ilusion, 0, 0, 400, 400);
}

function draw() {
  grilla(400);
  let mensaje = funcionamiento();
  textSize(20);
  fill(23, 11, 100);
  text(mensaje, 10, height - 60);
  fill(250);
}

function keyPressed() { // Esta función maneja los estados a través de las teclas
  if (key === 'a' || key === 'A') {  // Si tocas la A el color blanco se vuelve azul
    estado = "azul";
  } else if (key === 'v' || key === 'V') {  // Si tocas la V el color blanco se vuelve verde
    estado = "verde";
  } else if (key === 'r' || key === 'R') {  // Si tocas la R el color blanco se vuelve rojo
    estado = "rojo";
  } else if (key === 'i' || key === 'I') {  // Si tocas la I se reinicia
    estado = "princ";
  }
}

function grilla(x) { // Función de la grilla
  let l = 180;
  for (let c = 0; c < 2; c++) { // Bucle anidado para hacer la grilla
    for (let f = 0; f < 2; f++) {
      rect(x + f * l, c * l, l, l);
      // Se delimitan las posiciones de los dibujos, con los últimos 2 valores se indica hacia dónde va el centro
      dibujo(415, 11, 13, 6);
      dibujo(610, 11, 6, 13);
      dibujo(415, 200, 13, 6);
      dibujo(610, 200, 6, 13);
    }
  }
}

function dibujo(posX, posY, vx, vy) {
  let l = 180;
  for (let vari = 0; vari < 10; vari++) {  // Cuadrados de afuera hacia adentro
    noStroke();
    if (vari % 2 === 0) {  // Color blanco o negro
      fill(0);
    } else if (mouseIsPressed) { // Con el mousePressed el color es aleatorio
      fill(random(255));
    } else if (estado === "azul") {
      fill(0, 0, 255);
    } else if (estado === "verde") {
      fill(0, 255, 0);
    } else if (estado === "rojo") {
      fill(255, 0, 0);
    } else {
      fill(255);
    }
    rect(posX, posY, l, l); // Tamaño de los cuadrados
    posX += vx;
    posY += vy;
    l -= 18;
  }
}

function funcionamiento() {
  return "Bienvenido al programa. \nCambia el color con R, V, A. Reinicia con I \nEl mouse altera los colores en escalas de grises";
}
