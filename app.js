
function Person(name,age){
    this.name = name;
    this.age = age;
}

function Cricketer(name,age,type,hobby){
    Person.call(this,name,age);

    this.type = type;
    this.hobby = hobby;
}

Person.prototype={
    play: function(){
        console.log('I would like to play cricket');
    }
}

// Cricketer.prototype = Object.create(Person.prototype);
// Cricketer.prototype.constructor = Cricketer;

Cricketer.prototype.__proto__ = Person.prototype;

Cricketer.prototype = {
    wish : function(){
        console.log('I wanna be a cricketer');
    }  
}

let player = new Cricketer('Hasan',23,'cricketer','cricket');

console.log(player);

console.log(player.wish());

console.log(player.play());



