console.log("My first JS line");

var car = {
  model : "Toyota",
  power : 8
}

console.log(car);

console.log(1 == 1);
console.log("1" == 1);
console.log(1 === 1);
console.log("1" === 1);

// Je crée une fonction que je stocke dans une variable
const sayHello = function () {
  console.log("Hello there!");
}

// J'appelle ma fonction en utilisant le nom de ma variable
// Suivi de parenthèses
sayHello();

// La même chose qu'avant mais en fléché
const sayBonjour = () => console.log("Bonjour toi!");

sayBonjour();

function sayWelcome(string) {
  const hello = string;
  return function(name) {
    return hello + " " + name;
  }
}

// J'exécute directement les deux fonctions
console.log(sayWelcome("Bonjour")("Jules"));

// Je déclare un objet robert
const robert = {
  firstName: "Robert",
  lastName: "De Niro",

  // Present function
  present: function() {
    return "Mr " + this.firstName + " " + this.lastName;
  }
}

console.log(robert.present());

// Je déclare un objet george
const george = {
  firstName: "George",
  lastName: "Clooney"
}

// J'ajoute au prototype de george une fonction present
george.__proto__.present = function() {
  return "Mr " + this.firstName + " " + this.lastName;
};

console.log(george.present());

const leonardo = Object.create(george);
leonardo.firstName = "Leonardo";
leonardo.lastName = "Di Caprio";
leonardo.__proto__.prenom = "Leo";
leonardo.nom = "Caprio";

console.log(leonardo.present());
console.log(leonardo);
console.log(george);
console.log(george.present());

// Récupération du paragraphe p avec class lien
const pLien = document.querySelector("p.lien");

const newLink = document.createElement("a"); // Création du lien
newLink.href = "simplon.co"; // Remplissage de l'url du lien
newLink.textContent = "Simplon"; // Remplissage du titre du lien
newLink.style.color = "rgb(206, 15, 15)"; // Lien en rouge
newLink.style.textDecoration = "none"; // Texte non souligné

pLien.appendChild(document.createElement("br"));
pLien.appendChild(newLink); // Ajout de la balise a au paragraphe
