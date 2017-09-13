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
