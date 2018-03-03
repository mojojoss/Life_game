import {ctx} from '../model/model.js'
import {mas} from '../model/model.js'
import {pauseLife} from '../model/model.js'
import {goLife} from '../model/model.js'
import {sliderHeight} from '../controler/controler.js'
import {sliderWidth} from '../controler/controler.js'
import {count} from '../model/model.js'

export function drawField() {
    ctx.clearRect(0, 0, sliderWidth.value, sliderHeight.value);
    for (var i = 0; i < sliderHeight.value / 10; i++) {
        for (var j = 0; j < sliderWidth.value / 10; j++) {
            if (mas[i][j] == 1) {
                ctx.fillRect(j * 10, i * 10, 10, 10);
            }
        }
    }
}



export function clearField() {
    pauseLife();
    goLife();
    drawField();

    document.getElementById('count').firstChild.nodeValue = count;
}