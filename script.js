// løs opgaverne her
// opgave 1 -De-strukturér hundende "Max" og "Luna" ud af hunde-arrayet til variablerne "dog1" og "dog2".
let [, dog1, dog2] = dogs
console.log(dog1, dog2);

// opgave 2 - De-strukturér navn og race samt ejerens email-adresse ud af katte-objektet.
let {name, breed, owner: {contact}} = cat
console.log(name, breed, contact);

// opgave 3 -Opret en funktion, der som parametre de-strukturerer "name" og "favoriteToys" ud af et objekt. Brug console.log til at udskrive de to parametre inde i funktionen. Invokér funktionen med katte-objektet.
function catData({name, favoriteToys}) {
    console.log(name, favoriteToys);
}
catData(cat)

// opgave 4 - De-strukturér de to første hunde ud af hunde-arrayet i variablerne "dogA" og "dogB". Brug rest-operatoren til at samle de resternde hunde op i arrayet "otherDogs".
let [dogA, dogB, ...otherDogs] = dogs
console.log(dogA, dogB, ...otherDogs)

/// opgave 5 - Filtrér arrayet "otherDogs", så hunde der begynder med bogstavet "C" samles i arrayet "dogsWithC". Udskriv arrayet i konsollen. 
let dogWitchC = otherDogs.filter(dog => dog.startsWithC("C"))
console.log(dogWitchC);

// opgave 6 - De-strukturér "breed" ud af katte-objektet, og saml de restrerende nøgle-værdi par i objektet "otherInformation". Udskriv dem i konsollen.
let {breed: catBreed, ...otherInformation} = cat
// breed: catBreed er nøglen, breed, som vi kalder catBreed i stedet

// opgave 7 - Saml de to arrays "smallRabbitBreeds" og "LargeRabbitBreeds" til et samlet array "rabbitBreeds" ved hjælp af spread-operatoren.
let rabbitBreeds = [...smallRabbitBreeds, ...largeRabbitBreeds]
console.log(rabbitBreeds);

// opgave 8 - Saml de to objekter "checkeredGiantBasic" og "checkeredGiantTraits" til et samlet objekt "checkeredGiantInfo" ved hjælp af spread-operatoren.
let checkeredGiantInfo = {...checkeredGiantBasic,...checkeredGiantTraits}
console.log(checkeredGiantInfo);

// opgave 9 - Variablen "westernMovies" indeholder et array af klassiske westernfilm. Nogle af filmene har et details objekt, hvor man bland andet kan se, hvem der har instrueret filmen. Brug optional chaining til at udskrive filmens instruktør, ved først at tjekke om "details"-objektet findes.
westernMovies.forEach(movie => {
    console.log(movie.details?.director);
});
// **Ekstraopgave:** Udskriv "Ukendt instruktør", hvis details-objektet ikke er defineret.
westernMovies.forEach(movie => {
    console.log(movie.details?.director || "Ukendt instruktør");
});

// opgave 10 - I denne sidste opgave skal du selv oprette en variabel. Brugen af ternary operators i React bruges ofte til at rendere forskelligt indhold afhængigt af om en variabel er defineret eller ej. Opret en variabel og brug en ternay operator til at udskrive en type besked hvis variablen findes, og en anden type besked hvis variablen ikke findes.
let time = "frokost"

time == "frokost" ?  console.log("så hold dog den pause") : console.log("de kan sagtens klare noget mere snak!")