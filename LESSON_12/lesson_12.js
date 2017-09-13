/*Домашнее задание № 12
На странице есть список, такого вида:
    <ul id="list">
    <li>Element 1</li>
<li>Element 2</li>
<li style="color: green">Element 3</li>
<li style="color: green">Element 4</li>
<li>Element 5</li>
<li style="color: green">Element 6</li>
<li style="color: green">Element 7</li>
<li style="color: green">Element 8</li>
<li>Element 9</li>
<li style="color: green">Element 10</li>
</ul>

Задача:
В каждый элемент списка зеленого цвета добавить тег SPAN, а если элемент черного цвета, добавить тег Р. Внутренний текст должен сохранится.
    Пример,
<li style="color: green"><span>Element 10</span></li>
или
<li><p>Element 1</p></li>*/
var list = document.getElementById('list');

var elems = document.getElementsByTagName('li'); //creating array of 'li' elements

// adding <p> or <span> when needed with saving default HTML
for (var i = 0; i < elems.length; i++){
    if (elems[i].style.color === 'green'){
        elems[i].innerHTML += "<br><span> SPAN tag added </span><br>";
    }
    else {
        elems[i].innerHTML += "<p> P tag added</p>";
    }
}

console.log(list);
