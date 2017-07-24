var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
alert (str);

//разбиваю исходную строку из двух предложения на массив из двух элементов
var arr = str.split(".");
//alert (arr);

//разбиваю массивы предложений на массивы их слов
var newArr1 = arr[0].split(" ");
var newArr2 = arr[1].split(" ");

//описываю функцию сортировки
function sort(newArr1) {
    for (var i = 0; i < newArr1.length - 1; i++) {
        for (var j = 0; j < newArr1.length -1; j++) {
            if (newArr1[j+1].length > newArr1[j].length) {
                var replacedValue = newArr1[j+1];
                newArr1[j+1] = newArr1[j];
                newArr1[j] = replacedValue; }
    }
    }
    return newArr1;
}

//alert(sort(newArr1));
//alert(sort(newArr2));

//переопределяю массивы слов каждого предложения на отсортированные по длине слов массивы
newArr1 = sort(newArr1);
newArr2 = sort(newArr2);

//alert(sort(newArr1));
//alert(sort(newArr2));

//склеиваю отсортированные массивы слов в один массив
var sortedArr = newArr1.concat(newArr2);
//alert (sortedArr);

//привожу массив к строковому типу
var sortedStr = sortedArr.join();

//заменяю запятые в выходящей строке на пробелы посредством regexp
sortedStr = sortedStr.replace(/,/g," ");
alert(sortedStr);

