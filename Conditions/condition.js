
//1. Cinema tariffs:

var reduc;
var prix=10;
var prixReduc=8;

if (reduc=true){
    document.write("Le prix est de : " + prixReduc + "<br>")
} else {
    document.write("Le prix est de: " + prix + "<br>");
}

//2. Maximum:

document.write("Le chiffre le plus grand: " + Math.max(6,5,3) + "<br>");

//3. Identical dice:
var de1;
var de2;
var de3;


function desIdent(de1, de2, de3) {
    if (de1 == de2 && de2 == de3) {
        document.write("Les 3 dés sont identiques <br>");
    } else if ((de1 == de2 && de1 != de2) || (de1 == de3 && de2 != de3) || (de2 == de3 && de1 != de2)) {
        document.write("2 dés sont identiques <br>");
    } else {
        document.write("Aucun des dés n'est identique <br>");
    }
}

desIdent(1, 2, 3);

//4. Day’s number:

var numJour;

function jour(numJour) {
    switch (numJour) {
        case (1):
            document.write("Lundi <br>");
            break;
        case (2):
            document.write("Mardi <br>");
            break;
        case (3):
            document.write("Mercredi <br>");
            break;
        case (4):
            document.write("Jeudi <br>");
            break;
        case (5):
            document.write("Vendredi <br>");
            break;
        case (6):
            document.write("Samedi <br>");
            break;
        case (7):
            document.write("Dimanche <br>");
            break;
    }
}

jour(5);

//5. Print shop:

var nbreCopy;
var prixFinal;

function prixCopy(nbreCopy){
    if (nbreCopy <= 10){
        prixFinal=(nbreCopy*0.12);
        document.write("Le nombre de copies est: " + nbreCopy + "et son prix est de: " + prixFinal);
    } else if (nbreCopy>10 && nbreCopy <= 30){
        var prix1=nbreCopy-10;
        prixFinal=(prix1*0.11)+(10*0.12);
        document.write("Le nombre de copies est: " + nbreCopy + "et son prix est de: " + prixFinal);
    } else if (nbreCopy>30){
        var prix2=nbreCopy-30;
        prixFinal=(prix3*0.10)+(10*0.12)+(20*0.11);
        document.write("Le nombre de copies est: " + nbreCopy + "et son prix est de: " + prixFinal);
    } else {
        document.write("Vous n\'avez pas écrit un chiffre");
    }
}

prixCopy(11);