
/** Mix the contents of an array and return the first ten elements*/
function shuffle(array) {
    let counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    //il prend 10 question au hasard;
    let question = [];
    for (let i = 0; i < 10; i++) {
        question[i] = array[i];
        console.log(question[i]);
    }
    return question;
    //choisi une question au hasard;
    let choix = Math.random;
    let choixQuestion = question[choix];
}
