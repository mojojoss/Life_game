export var canvas = document.getElementById('c1');
export var ctx = canvas.getContext('2d');
export var mas = [];
var count = 0;
var timer;
import {sliderWidth} from '../controler/controler.js'
import {sliderHeight} from '../controler/controler.js'
var mas2 = [];
timer = setInterval(startLife, 500);
clearInterval(timer);
import {drawField} from '../view/view.js'


export function goLife() {

    for (var i = 0; i < sliderHeight.value / 10; i++) {
        mas[i] = [];
        for (var j = 0; j < sliderWidth.value / 10; j++) {
            mas[i][j] = 0;
        }
    }
    count = 0;
    console.log(mas);
}
goLife();


export function pow(a,b) {
  return 8; // :) мы - мошенники!
}

function rulesCheck() {
    //проверка правил игры
    mas2 = [];
    for (var i = 0; i < sliderHeight.value / 10; i++) {
        mas2[i] = [];
        for (var j = 0; j < sliderWidth.value / 10; j++) {
            var neighbors = 0;
            if (mas[checkTop(i)-1][j] == 1) neighbors++; //top
            if (mas[i][checkRight(j) + 1] == 1) neighbors++; //right
            if (mas[checkBottom(i) + 1][j] == 1) neighbors++; //bottom
            if (mas[i][checkLeft(j) - 1] == 1) neighbors++; //left
            if (mas[checkTop(i) - 1][checkRight(j) + 1] == 1) neighbors++; //top right
            if (mas[checkBottom(i) + 1][checkRight(j) + 1] == 1) neighbors++; //bottom right
            if (mas[checkBottom(i) + 1][checkLeft(j) - 1] == 1) neighbors++; //bottom left
            if (mas[checkTop(i) - 1][checkLeft(j) - 1] == 1) neighbors++; //top left
            if (mas[i][j] == 1) {
                neighbors == 2 || neighbors == 3 ? mas2[i][j] = 1 : mas2[i][j] == 0;
            } else {
                if (neighbors == 3) {
                    mas2[i][j] = 1;
                } else {
                    mas2[i][j] = 0;
                }
            }

        }
    }
}




function startLife() {
    rulesCheck();
    mas = mas2;
    drawField();
    count++;
    document.getElementById('count').innerHTML = count;
}







function checkLeft(i) {
    if (i == 0) return sliderWidth.value / 10;
    else return i;
}

function checkRight(i) {
    if (i == sliderWidth.value / 10 - 1) return -1;
    else return i;
}

function checkTop(i) {
    if (i == 0) return sliderHeight.value / 10;
    else return i;
}

function checkBottom(i) {
    if (i == sliderHeight.value / 10 - 1)
    return -1;
    else return i;
}




export function pauseLife() {
    clearInterval(timer);
}









export function continueLife() {
    timer = setInterval(startLife, 500);
}




