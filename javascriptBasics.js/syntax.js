var globalVariable = "a global variable";
var variable = "another global variable that we would try to reassign in the function scope";
console.log(globalVariable);
console.log(variable);

function accessVariable(){
    console.log(globalVariable);
}

accessVariable();
console.log("accessing global variable: " + globalVariable);

function nestedFuction(){
    globalVariable = "the first global variable is now a local variable";
    console.log(globalVariable);
    var age = 15;
    console.log(age);
    variable = "reassigning the global variable without the 'var' keyword";
    console.log(variable);

    function changeLocalVariable(){
        age = 25;
        console.log(age);
        var variable = "a trial to reassign the global variable using the 'var' keyword";
        console.log(variable);
    }
    changeLocalVariable();
}
nestedFuction();
