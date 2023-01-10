/** Exercice 1 : Divisible Par Trois */

let nombres = [123, 8409, 100053, 333333333, 7]

//1. Parcourez le tableau ci-dessus et déterminez si chaque nombre est divisible par trois ou non.

for (let i = 0; i < nombres.length; i++) {

    if (nombres[i] % 3 === 0) {

        console.log(nombres[i] + ' est divisible par 3');

    } else {

        console.log(nombres[i] + ' n\'est pas divisible par 3');

    }
}

//2. Chaque fois que vous bouclez console.log true ou false.


/** Exercice 2 : Présence */


let guestList = {

    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"

}

// 1.Invitez l'élève à donner son nom.

let studentName = prompt("Bonjour, pourriez-vous s'il vous plaît nous donner votre nom afin que nous puissions vérifier si vous êtes sur notre liste d'invités ?");

// 2.Si le nom est dans l'objet, console.log le nom de l'étudiant et le pays d'où il vient.
//Par exemple:"Hi! I'm [name], and I'm from [country]."
    //Astuce : Vous n'avez pas besoin d'utiliser une boucle for, recherchez simplement l'instruction if ... in

    if (guestList[studentName]) {

        console.log(`Bienvenue, ${studentName} ! Vous êtes sur notre liste d'invités et vous venez de ${guestList[studentName]}.`);
    
    }
    //Si le nom n'est pas dans l'objet, console.log :"Hi! I'm a guest."

    else {

        console.log(`Salut, je suis un invité !`);
   
    }



/** Exercice 3 : Jouer Avec Les Chiffres */

let age = [20,5,12,43,98,55];


//1. Console.log la somme de tous les nombres dans le tableau d'âge.

let totalAge = 0;

for (let i = 0; i < age.length; i++) {

    totalAge += age[i];

}


//2. Console.log l'âge le plus élevé de la baie.

let maxAge = age[0];

for (let i = 1; i < age.length; i++) {

    if (age[i] > maxAge) {

        maxAge = age[i];

    }

}

console.log(maxAge);
