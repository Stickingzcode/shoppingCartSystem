//  Objects: properties and methods
 
 const user = {
    name: "Persona",
    age: 36,
    isMarried: false,
    updateAge: function(newAge){
        this.age = newAge;
    }
 }

 console.log(user);
 user.updateAge(25);
 console.log(user);