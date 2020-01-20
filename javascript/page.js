/**
 * Meziani Walid B231 g42949;
 */
let questtab = shuffle(questions);
let nbr = 0 ; 
choisirQuestion();

foot();
/**
 * compte le nombre de question
 */
function comptage() {
    let cpt = 0;
    for (let i = 0; i < questtab.length; i++) {
        cpt++;
    }
    console.log(cpt);
}
/**
 * affiche les bonnes reponses
 */
function bonneReponse() {
    for (let i = 0; i < questtab.length; i++) {
        let bonreponse = questtab[i].bonneReponse;
        console.log(bonreponse);
    }

}
/**
 * affiche les question de la v03
 */
function affichage() {
    console.log(questtab[0].question + questtab[0].bonneReponse);
    console.log(questtab[2].question + questtab[2].bonneReponse);
    console.log(comptage());
    console.log(bonneReponse());
}
//appel de methode
comptage();
bonneReponse();
affichage();
/**
 * affiche les questions avec  les 4 possibilite
 */
function choisirQuestion() {
    document.getElementById("quest").innerHTML = questtab[nbr].question;
    document.getElementById("reponse1").innerHTML = questtab[nbr].reponses[0];
    document.getElementById("reponse2").innerHTML = questtab[nbr].reponses[1];
    document.getElementById("reponse3").innerHTML = questtab[nbr].reponses[2];
    document.getElementById("reponse4").innerHTML = questtab[nbr].reponses[3];
}
/**
 * affiche les données entrée dans le formulaire et le mets dans le footer 
 */
function foot() {
    let name = new URL(location.href).searchParams.get("nom");
    let prenom = new URL(location.href).searchParams.get("prenom");
    let login = new URL(location.href).searchParams.get("login");
    let nomProf = new URL(location.href).searchParams.get("nomProf");
    document.getElementById("write").innerHTML = name + " - " + prenom + " - " + login + " - " + nomProf;
}

