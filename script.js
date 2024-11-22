let arr = characters = ["Harry", "Ron", "Draco", "Hermoine", "Luna"];
for(let i=0; i<=0; i++){
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

let houses = ['Gryffindor', 'Ravenclaw', 'Hufflepuff',];
houses.push('Slytherin');
houses.pop();
console.log(houses);

let spells = ["Alohomora", "Lumos", "Nox"];
spells.unshift("Accio");
spells.shift();
console.log(spells);

let professors = ['Dumbledore', 'McGonagall', 'Snape', 'Hagrid'];
console.log(professors.slice(1,3));

let students = ['Neville', 'Seamus', 'Dean', 'Parvati'];
console.log(students.splice(1,2))

let phrase = " Mischief Managed ";
console.log(phrase.trim());
console.log(phrase.toLowerCase());
console.log(phrase.concat("- Harry"));

let wizards = ['Harry', 'Hermione', 'Ron'];
wizards.push("Draco, Luna");
console.log(wizards);

let message = "Welcome to Hogwarts School of Witchcraft and Wizardry";
console.log(message.slice(11,19));
console.log(message.slice() +  " Castle");