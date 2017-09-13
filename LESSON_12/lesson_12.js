var elems = document.getElementsByTagName('li'); // getting array of <li> elements

for (var i = 0; i <= elems.length; i++ ) {
    //debugger;
    var p = document.createElement('p'); // assigning creation of <p> to var p
    var span = document.createElement('span'); // assigning creation of <span> to var span
    var color = elems[i].style.color; // getting color of the 'i' element and assigning it to var color
    var data = elems[i].childNodes[0].data; // getting data (text) of 'i' element and assigning it to var data
    if (color !== 'green' && color !== undefined) { // checking
        elems[i].innerHTML = ""; // removing inner elements of 'i' element
        p.innerHTML = data; // adding our data into <p>
        elems[i].appendChild(p); // appending added data to 'i' element
    }
    if (color === 'green') { // another check
        elems[i].innerHTML = ""; // all the same, just <span> instead of <p>
        span.innerHTML = data;
        elems[i].appendChild(span);
    }
}
console.log(elems[0]);

/* var list = document.getElementById('list');

 var elems = document.getElementsByTagName('li'); //creating array of 'li' elements

for (var i = 0; i < elems.length; i++){
    if (elems[i].style.color === 'green'){
        elems[i].innerHTML = "<br><span>" + elems[i].childNodes[0].data + "</span><br>";
    }
    else {
        elems[i].innerHTML = "<p>" + elems[i].childNodes[0].data + "</p>";
    }
}*/
