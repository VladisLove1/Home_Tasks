function Components() {

    var active_or_not;

    this.active = function () {
        active_or_not = true;
    };
    this.disabled = function () {
        active_or_not = false;
    };
    this.getActive_Or_Not = function () {
        return active_or_not;
    }
}

function Form() {
    Components.call(this);

    var status = 0;

    //setter function
    this.setStatus = function (value) {
        status = value;
        };
    //getter function
    this.getStatus = function () {
        return console.log(status);
        };

    this.validate = function () {
        console.log("validated");
        };
    this.send = function () {
        console.log("sent");
        };
    }

var newForm = new Form, newComp = new Components;

//newComp.active();
newComp.disabled();
console.log(newComp.getActive_Or_Not() + " // here we check if our Component is active (true) or disabled (false)");

var is_active = newComp.getActive_Or_Not();

if (is_active !== false && is_active !== undefined) {
    console.log("//and if it is TRUE, then we have our 'validation' and 'send' methods ran, like you see below");
    newForm.validate();
    newForm.send();
}
else {
    console.log("And if it is FALSE, we'll see this message" + " 'Can not be sent or validated until class Components is disabled'");
}

/*newForm.setStatus(11);
newForm.getStatus();*/
