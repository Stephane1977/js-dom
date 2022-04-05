/**
 * *les fonctions
 */

function nomDeLaFonction() {

//..les arguments optionnels sont toujours placés en premier
}

let nomDeFonction = function(prenom,nom="Doe",age= null) {

let phrase =`Bonjour ${prenom}`;
    if (nom !=="Doe"){
        phrase+=`${nom}`;
    }
    if(age!==null){
        phrase+= `|,tu as ${age} ans`;
    }

    console.log(phrase);
    return phrase;
}

let nomFonction = () =>{

    //..

}
let firstName ="Guillaume"
let lastName ="Bouyer"
let number = 29;
//appel de la fonction
//nomDeFonction("guillaume","Bouyer","29")
let phraseBienvenue = nomDeFonction(firstName,lastName,number);
//console.log(phraseBienvenue)

document.querySelector("body").innerText = phraseBienvenue;


//nomDeFonction("Jérome")

// fonction recursive

let addition = function(number,limit){
    if (number != limit){
        number+=1;
        console.log(number);
        addition(number,limit)

    }
    return true;
}

let finish = addition(1,40);

if(finish===true) {
    console.log("addition terminée !");

}
