//2016 07 19
//taller de p5. js
//lienzo de un color solido y elipse que siga el mouse

//en javascript tenemos variables y funciones
//una variable es un lugar en la memoria del computador
//donde podemos almacenar datos
//declarar significa crear una variable
//declarar se hace solo una vez
var diametro
//luego de declarar, podemos darle valores
//asignar significa darle un valor a la variable
//se puede hacer cuantas veces quieran
//la variable siempre va a tener un valor actual
//que va a ser igual a la ultima asignacion
diametro = 100; 

//manera corta de asignar y asignar un valor inicial
var x = 100;
//asignarle otro valor
x = 50;

//funciones
//las funciones se declaran una vez
function nombreFuncion(argumento1, argumento2) {
  
}

//
//funcion setup, corre una vez y al principio
function setup() {
  //crea un lienzo donde dibujar
  //createCanvas(dimHorizontal, dimVertical);
createCanvas(800, 600);
//pinta el fondo del lienzo
//background(red, green, blue);
background(255,100, 30);

}
//funcion draw, corre despues de setup, 60 veces por segundo
function draw() {
  
//definimos el estilo de la elipse
estiloElipse();
  
  //elpise en el lienzo
  //ellipse (posHorizontal, porVertical, width, height);
  ellipse(mouseX, mouseY, 100, 100);
  
  //triangle(x1, y1, x2, x3, y3)
triangle(20, 30, 40, height, mouseX, mouseY);
}


//mousePressed() se ejecuta cuando
//el mouse es presionado
function mousePressed() {
 background(250,250, 100); 
}

function estiloElipse() {
    //configuracion de dibujo de la elipse
  
  //stroke() elige el color del borde
  //stroke(red, green, blue)
  stroke(255, 0, 255);
  
  //strokeWeight() determina el grosor del borde
  //strokeWeight(px);
  strokeWeight(5)
  
  //fill() elige el color del relleno de la figura
  //fill(red, green, blue);
  fill(250, 250, 0);
}

function dibujarCirculo(){

}
 