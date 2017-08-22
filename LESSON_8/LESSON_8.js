var header = "{margin:25px;height:900px;width:100%}";
var main = "{padding:0 0 10px;margin:25px;width:100%}";
var wrap = "{margin:0 auto;width:960px}";
var footer = "{float:left;padding:0 0 10px;background:#eeaaa3}";

var out = {};
var new_obj = [header, main, wrap, footer];
for (var i = 0; i < new_obj.length; i++) {
    out[i] = {};
    var z = new_obj[i].slice(1,-1).split(";");
    for (var j = 0; j < z.length; j++){
        var v = z[j].split(":");
        out[i][v[0]] = v[1];
    }
}

console.log(out);

var tmp = {};
var double = {};
for (i = 0; i < out.length; i++){
    for (var value in out[i]){
        if (value in tmp){
            if (out[i][value] === tmp[value]){
                double[value] === tmp[value];
            }
        }else {
            tmp[value] = out[i][value];
        }
    }

}
console.log(double);



//var a = new Date();
// *** ПОЛУЧЕНИЕ ДАТЫ ***
/*console.log(a);
console.log(a.getMilliseconds());
console.log(a.getSeconds());
console.log(a.getMinutes());
console.log(a.getHours());
console.log(a.getDate());
console.log(a.getMonth());
console.log(a.getFullYear());*/
/*
console.log(a.getDay());
console.log(a.getTime());
console.log(a.getTimezoneOffset());
 */
/*
var b = new Date (2017, 8, 19, 15, 22, 54, 12);
console.log(b);
*** МЕТОДЫ ДЛЯ ИЗМЕНЕНИЯ ДАТЫ ***
b.setSeconds(1);
b.setMinutes(2);
b.setHours(3);
b.setDate(4);
b.setMonth(5);
b.setFullYear(6);
console.log(b);*/

