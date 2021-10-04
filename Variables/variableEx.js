//1. Calculate:

var a=6;
var b=3;


document.write("Le résultat de l'addition est " + (a+b) + "<br/>");
document.write("Le résultat de la multiplication est: " + (a*b) + "<br>");
document.write("Le résultat du modulo est: " + (a%b) + "<br>");

//2. Concatenate sentence

var phrase1="Bonjour, je m'appelle ";
var phrase2="Nacer Samir."


document.write(phrase1+phrase2+"<br>");

//3.TVA

function prixAvecTVA(prix){
    var prixTVA=(prix+((prix/100)*21));
    document.write("Le montant sans TVA est de: " + prix + "<br>" + "Le montant avec TVA est de: " + prixTVA + "<br>");
}

prixAvecTVA(100);

//4. Surface of a circle:

function airCercle(rayon){
    var air=rayon*Math.PI;
    document.write("L'air du cercle est de: " + air + "<br>");
}

airCercle(10);

//5. Conversion of time to seconds:

var heure;
var minute;
var seconde;

function secondeMinuit(heure, minute, seconde){
    var tempsSeconde=(heure*3600)+(minute*60)+seconde;
    document.write("Le temps en secondes depuis minuit est: " + tempsSeconde + "<br>");
}

secondeMinuit(14,09,45);



