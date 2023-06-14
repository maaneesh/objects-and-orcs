const movies = [
    {
        title: "Tokyo Story"
    },
    {
        title: "Paul Bart: Mall Cop"

    },
   
];
/*
const foo = {
    arr: [1,2,3],
    obj: {
        prop: 'object property'
    },
    doSomething: () => {
        console.log("I did something");

    }

}
console.log(foo.arr[0]);
///looping over array of objects
for ( let i = 0 ; i< movies.length; i++ ){
    console.log(movies[i].title);

}
*/
/*
const foo = [
    [1,2,3],
    ["4","5","6"],
    [7,8,9],
    () => {
        console.log("I am a function inside an array");
    }
]

console.log(foo[3]());

*/


//CREATING A CLASS

class Character {
    constructor(_name,_age, _eyes, _hair, _lovesCats =true, _lovesDogs=true){
        this.legs = 2;
        this.arms = 2;
        this.name= _name;
        this.eyes = _eyes;
        this.hair = _hair;
        this.lovesCats=_lovesCats;
        this.lovesDogs=_lovesDogs;
    }
    greet (otherCharacter){
        console.log(`Hello ${otherCharacter}`);

    }
    smite(){
        console.log("I smite the you nerd!");
    }

}

//name, age, eyes, hair
const Manish = new Character("Manish",31,"brown","black", false, false);
const Alex = new Character("Alex", 26,"brown", "brown",true ,true);


console.log(Manish);
console.log(Alex); 

