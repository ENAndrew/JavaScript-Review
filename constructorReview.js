//Create a Animal Constructor that has the following parameters. species, name, legs, color, 
//food (which is an array of foods they can eat).

function Animal(species, name, legs, color, food) {
    this.species = species;
    this.name = name;
    this.legs = legs;
    this.color = color;
    this.food = food;
};

//Now create a person function that creates an object and returns it (not in constructor form) 
//that has the following parameters. name, age, height, gender

function person(name, age, height, gender) {
    return {
        name: name,
        age: age,
        height: height,
        gender: gender
    };
}


//Create a animal array and a person array.

var animals = [];

var people = [];


//Create two instances of Animal and push those into your animal array

animals.push(
        new Animal('feline', 'cat', 4, 'tabby', ['fish', 'meat', 'birds']),
        new Animal('ursis', 'bear', 4, 'brown', ['fish', 'meat', 'fruit'])
    );




//Create two instances of person and push those into your person array.

people.push(
        person('Erica', 35, '5\'5\"', 'female'),
        person('Sarah', 16, 'tiny', 'female')
    );




//Now we want every instance of Animal to have a eat method. This method will choose a 
//random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

Animal.prototype.eat = function() {
    var i = Math.floor(Math.random() * 3);  // random whole # between 0 and 2, for index b/w 0, 1, 2
    alert(this.name + ' ate ' + this.food[i]);
};

animals[0].eat();


//At this point, if we wanted to add something to every instance of person could we? 

  //No, there is no prototype object for person.  The original function would need to be altered. 



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
        A new instance of that object is created, 'this' is understood to reference the parameters given to the
        new object. 

  2) What's a good way to describe the keyword 'this'
        'this' refers to the context we want to be using for that particular operation. 

  3) Can a normal function which creates an object and then returns that object use the prototype?
        No, no prototype object was created when the function returns an object.  

  4) What happens if you forget to use 'new' when calling a constructor?
        You'll end up accessing the constructor function rather than creating new object. 
*/