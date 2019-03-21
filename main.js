/*
Your job is to sign each of these promising young music stars to the appropriate label.
JumpStop Records works with Funk and Rap artists.
Chatten Records works with Country and Bluegrass artists.
Polar Records works with Pop artists.
Create an array for each of these record labels.
*/

const chatten  = []
const jumpStop = []
const polar = []

/* Create an array for each of these record labels.

 Create a factory function for each possible genre (e.g. createBluegrassArtist()).
Then invoke the appropriate function for each of the following artists and place
the resulting object in the corresponding label array.
*/

// Avilee Dallas is a Country artist and is 19 years old
// Austin Kinkaid is a Pop artist and is 22 years old
// Loyoncé Branis is a Rap artist and is 27 years old
//Bruce Atikins is a Country artist and is 23 years old
const createCountryArtist = (name, age) => ({
    "name": name,
    "age": age
})

// Jensen Brown is a Pop artist and is 20 years old
const createPopArtist = (name, age) => ({
    "name": name,
    "age": age
})
// Dre Funkz is a Funk artist and is 25 years old
const createFunkArtist = (name, age) => ({
    "name": name,
    "age": age
})
// Dusta Grimes is a Rap artist and is 21 years old
const createRapArtist = (name, age) => ({
    "name": name,
    "age": age
})
// Bartholomew Danielson is a Bluegrass artist and is 23 years old
const createBluegrassArtist = (name, age) => ({
    "name": name,
    "age": age
})

//pushing all names and ages to an appropriate field positions
 chatten.push(createCountryArtist("Bruce Atikins", "23"))
 chatten.push(createCountryArtist("Avilee Dallas", "19"))
 chatten.push(createBluegrassArtist("Bartholomew Danielson", "33"))
 jumpStop.push(createRapArtist("Loyoncé Branis", "27"))
 jumpStop.push(createRapArtist("Dusta Grimes", "21"))
 jumpStop.push(createFunkArtist("Dre Funkz ", "25"))
 polar.push(createPopArtist("Jensen Brown", "20"))
 polar.push(createPopArtist ("Austin Kinkaid ", "22"))

 console.log(chatten, jumpStop, polar)

