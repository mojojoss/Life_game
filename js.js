var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var mas = [];
var count = 0;
var timer;
var sliderWidth = document.getElementById("rangeWidth");
var sliderHeight = document.getElementById("rangeHeight");
canvas.width = sliderWidth.value;
canvas.height = sliderHeight.value;
var mas2 = [];
timer = setInterval(startLife, 500);
clearInterval(timer);



function goLife() {
    var n = sliderWidth.value / 10,
        m = sliderHeight.value / 10;
    for (var i = 0; i < m; i++) {
        mas[i] = [];
        for (var j = 0; j < n; j++) {
            mas[i][j] = 0;
        }
    }
}
goLife();





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
    drawField(sliderWidth.value, sliderHeight.value);
}



function drawField(wdt, hgt) {
    ctx.clearRect(0, 0, wdt, hgt);
    for (var i = 0; i < wdt / 10; i++) {
        for (var j = 0; j < hgt / 10; j++) {
            if (mas[i][j] == 1) {
                ctx.fillRect(j * 10, i * 10, 10, 10);
            }
        }
    }
}

function rulesCheck() {
    //проверка правил игры
    mas2 = [];
    for (var i = 0; i < sliderWidth.value / 10; i++) {
        mas2[i] = [];
        for (var j = 0; j < sliderHeight.value / 10; j++) {
            var neighbors = 0;
            if (mas[i][checkTop(j) - 1] == 1) neighbors++; //top
            if (mas[checkRight(i) + 1][j] == 1) neighbors++; //right
            if (mas[i][checkBottom(j) + 1] == 1) neighbors++; //bottom
            if (mas[checkLeft(i)-1][j] == 1) neighbors++; //left
            if (mas[checkRight(i) + 1][checkTop(j) - 1] == 1) neighbors++; //top right
            if (mas[checkRight(i) + 1][checkBottom(j) + 1] == 1) neighbors++; //bottom right
            if (mas[checkLeft(i) - 1][checkBottom(j) + 1] == 1) neighbors++; //bottom left
            if (mas[checkLeft(i) - 1][checkTop(j) - 1] == 1) neighbors++; //top left
            if (mas[i][j] == 1) {
                (neighbors == 2 || neighbors == 3) ? mas2[i][j] = 1: mas2[i][j] == 0;
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
    drawField(sliderWidth.value, sliderHeight.value);
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

function pauseLife() {
    clearInterval(timer);
}

function clearField() {
    pauseLife();
    goLife();
    drawField(sliderWidth.value, sliderHeight.value);
    count = 0;
    document.getElementById('count').firstChild.nodeValue = count;
}

function continueLife() {
    timer = setInterval(startLife, 500);
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
    continueLife();
    document.getElementById('start').setAttribute('hidden', 'hidden');
    sliderHeight.setAttribute('hidden', 'hidden');
    sliderWidth.setAttribute('hidden', 'hidden');
}
document.getElementById('pause').onclick = function () {
    document.getElementById('start').removeAttribute('hidden');
    pauseLife();
}
document.getElementById('restart').onclick = function () {
    clearField();
    document.getElementById('start').removeAttribute('hidden');
    sliderHeight.removeAttribute('hidden');
    sliderWidth.removeAttribute('hidden');
}
