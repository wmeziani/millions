// Meziani Walid B132 42949;
let ifTrue = true;
let reponseChoisie;
let gains = [50, 100, 200, 500, 1000, 5000, 10000, 20000, 50000, 1000000];
let i = 0;
let nb = gains[9];

/**
 * stop le jeu quand on appuie sur le bouton stop
 */
function stop() {
    // if(document.getElementById("stop").value==5 || nb){
    //document.getElementById("stop").value == 5
    // document.getElementById("btn1").disabled = true;
    // document.getElementById("btn2").disabled = true;
    // document.getElementById("btn3").disabled = true;
    // document.getElementById("btn4").disabled = true;
    document.getElementById("btn1").style.visibility = 'hidden';
    document.getElementById("btn2").style.visibility = 'hidden';
    document.getElementById("btn3").style.visibility = 'hidden';
    document.getElementById("btn4").style.visibility = 'hidden';
    document.getElementById("stop").style.visibility = 'hidden';
    document.getElementById("svt").style.visibility = 'hidden';
    palier();

    alert("merci d'avoir joué a qui veut gagner des €€€€€");
    //document.location.href = "../html/fin.html";
    // }
}
/**
 * methode pour le joker(50/50)
 */
function joker(){
    let desactive1 ;	
	let desactive2 ;
	do{
		do{
			desactive1 = Math.floor(Math.random() * 4) + 1 ;
			desactive2 = Math.floor(Math.random() * 4) + 1 ;
			
		}while(questtab[i].bonneReponse == desactive1 || questtab[i].bonneReponse == desactive2);
	}while(desactive1 == desactive2);
	if(desactive1 == 1 || desactive2 == 1){
	    document.getElementById("btn1").disabled = true;
	}
	if(desactive1 == 2 || desactive2 == 2){
        document.getElementById("btn2").disabled = true;
	}
	if(desactive1== 3|| desactive2== 3){
        document.getElementById("btn3").disabled = true;
	}
	if(desactive1== 4 || desactive2 == 4){
        document.getElementById("btn4").disabled = true;
	}
}
/**
 * Method pour cacher le bouton 50/50
 */
function jokerCondition(){
    if(i ==4){
        let del = document.getElementById("joker");
        del.classList.remove("hidd");
    }
}
function palier() {
    if(i< 4){
        document.getElementById("palier").innerHTML = "";
        document.getElementById("gain").innerHTML = "Gains: 0 €";
    }
    if (i > 3 && i < 7) {
        document.getElementById("palier").innerHTML = "Palier: 4";
        document.getElementById("gain").innerHTML = "Gains: " + gains[3] +"€";
    }
    if (i > 6) {
        document.getElementById("palier").innerHTML = "Palier: 7";
        document.getElementById("gain").innerHTML = "Gains:" +gains[6]+ "€";
    }
}
/**
 * method pour valider la reponse et passer a la question suivant
 */
function questSuivant() {
    jokerCondition();
    if (nbr == 9) {
        document.location.href = "../html/fin.html";
    } else {
        if (questtab[nbr].bonneReponse == reponseChoisie) {
            gains[i];
            document.getElementById("gain").innerHTML = "Gains: " + gains[i] + " €";
            document.getElementById("palier").innerHTML = "Palier: " + (i + 1);
            i++;
            nbr++;
            document.getElementById("btn1").style.backgroundColor = "white";
            document.getElementById("btn2").style.backgroundColor = "white";
            document.getElementById("btn3").style.backgroundColor = "white";
            document.getElementById("btn4").style.backgroundColor = "white";
            choisirQuestion();

        } else {
            //afficher la bonne réponse + erreur.
            // document.getElementById("btn1").disabled = true;
            // document.getElementById("btn2").disabled = true;
            // document.getElementById("btn3").disabled = true;
            // document.getElementById("btn4").disabled = true;
            document.getElementById("btn1").style.visibility = 'hidden';
            document.getElementById("btn2").style.visibility = 'hidden';
            document.getElementById("btn3").style.visibility = 'hidden';
            document.getElementById("btn4").style.visibility = 'hidden';
            document.getElementById("stop").style.visibility = 'hidden';
            document.getElementById("svt").style.visibility = 'hidden';
            document.getElementById("quest").style.visibility = 'hidden';
            document.getElementById("mauvaiseRep").innerHTML = "Mauvaise réponse, la bonne réponse était : " + questtab[i].reponses[questtab[i].bonneReponse - 1];
            if (questtab[nbr].bonneReponse == 1) {
                document.getElementById("btn1").style.backgroundColor = "green";

            } else if (questtab[nbr].bonneReponse == 2) {
                document.getElementById("btn2").style.backgroundColor = "green";
            } else if (questtab[nbr].bonneReponse == 3) {
                document.getElementById("btn3").style.backgroundColor = "green";
            } else if (questtab[nbr].bonneReponse == 4) {
                document.getElementById("btn4").style.backgroundColor = "green";
            }
            palier();
        }
    }
}
/**
 * mettre le premier bouton en bleu
 */
function traitement1() {
    reponseChoisie = document.getElementById("btn1").value;
    document.getElementById("btn1").style.backgroundColor = "blue";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("btn4").style.backgroundColor = "white";
}
/**
 * mettre le second bouton en bleu
 */
function traitement2() {
    reponseChoisie = document.getElementById("btn2").value;
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "blue";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("btn4").style.backgroundColor = "white";
}
/**
 * mettre le troisieme bouton en bleu
 */
function traitement3() {
    reponseChoisie = document.getElementById("btn3").value;
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "blue";
    document.getElementById("btn4").style.backgroundColor = "white";
}
/**
 * mettre le dernier bouton en bleu
 */
function traitement4() {
    reponseChoisie = document.getElementById("btn4").value;
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("btn4").style.backgroundColor = "blue";
}