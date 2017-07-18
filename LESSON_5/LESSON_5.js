var progression = prompt("Choose progression: ENTER 'G' for geometrical or 'A' for ariphmetical", "ONLY A or G");
switch (progression) {
    case 'G':
        var g1 = parseInt(prompt("Enter the first member of progression (nums)", "3"));
        var ng = parseInt(prompt("Enter desired amount of nums to be progressed", "5"));
        var q = parseInt(prompt("Enter denominator of progression", "2"));
        alert(geometrical(g1, ng, q));
        break;
    case 'A':
        var a1 = parseInt(prompt("Enter the first member of progression (nums)", "1"));
        var na = parseInt(prompt("Enter desired amount of nums to be progressed", "5"));
        var d = parseInt(prompt("Enter diff of progression", "2"));
        alert(ariphmetical(na, a1, d));
        break;
    default:
        alert("Choose correct type of progression (A or G)");
}

function geometrical () {
    return ((g1*(Math.pow(q, ng)-1))/(q-1));
}

function ariphmetical (na, a1, d) {
     return (((2 * a1 + (na-1)*d)/2)*na);
}



