for (let i = 0; i < 3; i++){
    setTimeout(function(){
        console.log(i);
    }, 1000);
}
//  let uses block scope(cares about code in the {}) and not lexical scope
//  same function as above but using var
for (var i = 0; i < 3; i++){
    setTimeout(function(){
        console.log(i);
    }, 1000);
}
//  const is used to fix a value, the value of the variable is unchangeable.
const fellowName = "brave";
console.log(fellowName);

