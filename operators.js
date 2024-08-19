// const age =  17

// if(age<=18) {
//     console.log('Too young to vote')
// } else if (age >=18 && age <=60){
//     console.log('Eligible to vote')
// } else {
//     console.log('You should retire')
// }

// switch statement
// convert the above if condition statement to a switch statement
const age = 17;

switch(true){
    
    case age <= 18:
        console.log("Too young to vote");
        break;
    case age <= 18 && age <= 60:
        console.log("Eligible to vote");
        break;
    default:
        console.log("You should retire");        

}