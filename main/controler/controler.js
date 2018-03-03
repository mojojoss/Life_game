import {canvas} from '../model/model.js'
import {ctx} from '../model/model.js'
export var sliderWidth = document.getElementById("rangeWidth");
export var sliderHeight = document.getElementById("rangeHeight");
import {mas} from '../model/model.js'
import {drawField} from '../view/view.js'
import {continueLife} from '../model/model.js'
import {goLife} from '../model/model.js'
import {pauseLife} from '../model/model.js'
import {clearField} from '../view/view.js'

window.onload = function(){
    canvas.onclick = function (event) {
        var x = event.offsetX;
        var y = event.offsetY;
        x = Math.floor(x / 10);
        y = Math.floor(y / 10);
        if (mas[y][x] == 0) {
            mas[y][x] = 1;
        } else {
            mas[y][x] = 0;
        }
        drawField();
        console.log(mas);
    }
    
}




sliderWidth.oninput = function () {
    canvas.style.width = this.value + 'px';
    canvas.width = sliderWidth.value;
    goLife();
}




sliderHeight.oninput = function () {
    canvas.style.height = this.value + 'px';
    canvas.height = sliderHeight.value;
    goLife();
}




document.getElementById('start').onclick = function () {
    canvas.style.width = sliderWidth.value;
    canvas.style.height = sliderHeight.value;
    continueLife();
    document.getElementById('start').setAttribute('hidden', 'hidden');
    sliderHeight.setAttribute('hidden', 'hidden');
    sliderWidth.setAttribute('hidden', 'hidden');
    document.getElementById('pause').removeAttribute('hidden');
    
}
document.getElementById('pause').onclick = function () {
    document.getElementById('start').removeAttribute('hidden');
    pauseLife();
    document.getElementById('pause').setAttribute('hidden', 'hidden');
}
document.getElementById('restart').onclick = function () {
    clearField();
    document.getElementById('start').removeAttribute('hidden');
    sliderHeight.removeAttribute('hidden');
    sliderWidth.removeAttribute('hidden');
}
