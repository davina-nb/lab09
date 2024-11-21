let arr = characters = ["Harry", "Ron", "Draco", "Hermoine", "Luna"];
for(let i=0; i<=1; i++){
    console.log(characters)
}

let firstName = "Harry";
let house = "Gryffindor";
let str = `Welcome, ${firstName} of ${house}!`;
console.log(str);

let characterName = "Hermoine";
console.log(characterName.toUpperCase());
console.log(characterName.toLowerCase());

let spell = " Expelliarmus ";
console.log(spell.trim());

let quote = "I solemnly swear that I am up to no good";
console.log(quote.slice(11, 17))

let firstname = "Ron";
let lastname = "Weasley";
console.log(firstname.concat(" " + lastname));

let sentence = "Draco is a good wizard";
console.log(sentence.replace("good", "bad"));

let houses = ["Gryffindor", "Ravenclaw", "Hufflepuff"];
console.log(houses.push("Slytherin"));
houses.pop();
console.log(houses);

let spells = ["Alohomora", "Lumos", "Nox"];
console.log(spells.unshift("Accio"));
