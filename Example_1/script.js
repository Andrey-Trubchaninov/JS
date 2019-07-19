/*Есть входные данные:

размеры коробки (10 * 20 * 40);

диаметр круга (15).

Посчитать объем коробки и записать результат в переменную.

Посчитать площадь одной из сторон коробки и записать в переменную.

Посчитать площадь круга и записать в переменную.

Результирующие переменные записать в строку и строку поместить в переменную.

Строка должна быть следующего содержания:

"Объем коробки: N; Площадь стенки: N; Площадь круга: N;".

Использовать строки с косыми кавычками, но можно и обычные строки.*/

const PI = 3.1415;
var diameter_circle = 15;
var radius_circle = diameter_circle / 2;
var length_box = 40;
var width_box = 20;
var height_box = 10;

//

var volume_box = (height_box * width_box) * length_box;
var square_side = length_box * width_box;
var square_circle = PI * (radius_circle * radius_circle);

//

var result = `"Объем коробки: ${volume_box} ; Площадь стенки: ${square_side}; Площадь круга: ${square_circle};"`;
alert(result);
