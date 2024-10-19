let pantallas = new Array(22);
let img = [];
let textoAli;
let minumero;
let numeroactual = 0;

function preload() {
  texto = loadStrings('data/textoAli.txt');
  for (let i = 0; i < pantallas.length; i++) {
    img[i] = loadImage("data/imgs" + i + ".png");
  }
}

function setup() {
  createCanvas(640, 600);
}

function draw() {
  if (numeroactual < pantallas.length) {
    planillabase(numeroactual);
  }
  if (numeroactual === pantallas.length + 1) {
    numeroactual = 0;
  }
  fill(0);
  //BOTONES A Y B forma,color, etc
  if (numeroactual === 5 || numeroactual === 7 || numeroactual === 9 || numeroactual === 11) {
    let d = dist(width / 2, height / 2, mouseX, mouseY);
    let maxDist = dist(0, 0, 2 / width, height / 2);
    let miColor = map(d, 0, maxDist, 10, 50);
    fill(miColor);
    rect(100, 350, 50, 50);
    rect(450, 350, 50, 50);
    fill(255);
    textSize(35);
    text('A', 112, 390);
    text('B', 465, 390);
  }
  //BOTON REINICIAR diseño y pantallas
  if (numeroactual === 16 || numeroactual === 17 || numeroactual === 19 || numeroactual === 14 || numeroactual === 20) {
    let d = dist(width / 2, height / 2, mouseX, mouseY);
    let maxDist = dist(0, 0, 2 / width, height / 2);
    let miColor = map(d, 0, maxDist, 10, 50);
    fill(miColor);
    rect(240, 360, 150, 50);
    fill(255);
    textSize(35);
    text('Reiniciar', 250, 400);
  }
}

function planillabase(pantalla) { //es la portada del juego (titulo, empezar, creditos)
  image(img[pantalla], 0, 0);

  fill(255, 150);
  if (numeroactual !== 0 && numeroactual !== 21) {
    rect(10, 10, 570, 80);
    fill(0);
    textSize(20);
    text(texto[pantalla], 20, 20, 500, 200);
  } else if (numeroactual === 0) {
    textSize(40);
    fill(255);
    text('Alicia en el país de', 120, 150);
    text('las maravillas', 170, 190);
    rect(225, 225, 150, 50);
    rect(225, 300, 150, 50);
    fill(0);
    textSize(30);
    text('Empezar', 245, 260);
    text('Créditos', 250, 335);
  } else if (numeroactual === 21) {
    textSize(30);
    fill(255);
    text('Codigo por: ', 60, 150);
    rect(390, 390, 90, 50);
    fill(0);
    text('Volver', 392, 425);
  }
}

function mousePressed() {
  // Créditos
  if (numeroactual === 21) {
    if (chequebotoncuadrado(450, 500, 450, 500, 1)) {
      numeroactual++;
    }
  }
  
  // Inicio
  else if (numeroactual === 0) {
    if (chequebotoncuadrado(245, 395, 240, 290, 1)) {
      numeroactual++;
    }
    if (chequebotoncuadrado(225, 375, 300, 350, 1)) {
      numeroactual = 21;
    }
  }
  
  // Pantallas de reinicio
  else if (numeroactual === 16 || numeroactual === 17 || numeroactual === 19 || numeroactual === 14 || numeroactual === 20) {
    if (chequebotoncuadrado(240, 380, 240, 420, 1)) {
      numeroactual = 0;
    }
  }
  
  // Saltos para el número actual 7
  else if (numeroactual === 7) {
    if (chequebotoncuadrado(100, 150, 350, 400, 1)) { // Botón A
      numeroactual = 17;
    } else if (chequebotoncuadrado(450, 500, 350, 400, 1)) { // Botón B
      numeroactual++;
    }
  }
  
  // Otros saltos temporales
  else if (numeroactual === 5) {
    if (chequebotoncuadrado(450, 500, 350, 400, 1)) { // Botón B
      numeroactual = 15;
    } else if (chequebotoncuadrado(100, 150, 350, 400, 1)) { // Botón A
      numeroactual++;
    }
  }
  
  else if (numeroactual === 9) {
    if (chequebotoncuadrado(450, 500, 350, 400, 1)) { // Botón B
      numeroactual = 18;
    } else if (chequebotoncuadrado(100, 150, 350, 400, 1)) { // Botón A
      numeroactual++;
    }
  }
  
  else if (numeroactual === 11) {
    if (chequebotoncuadrado(100, 150, 350, 400, 1)) { // Botón A
      numeroactual = 20;
    } else if (chequebotoncuadrado(450, 500, 350, 400, 1)) { // Botón B
      numeroactual++;
    }
  }
  
  // Botón reiniciar
  else if (chequebotoncuadrado(0, 640, 0, 480)) {
    numeroactual++;
  }
}

function chequebotoncuadrado(posicionx1, posicionx2, posiciony1, posiciony2) {
  return (mouseX > posicionx1 && mouseX < posicionx2 && mouseY > posiciony1 && mouseY < posiciony2);
}
