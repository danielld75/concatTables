var femaleNames = ["Anna", 'Magdalena', 'Marysia', 'Eurydyka'];
var maleNames = ["Gregory", "Misiek", "Pupil", "Henio"];

var allNames = femaleNames.concat(maleNames);

var addName = function(newName) {
  var note = "Próbowałeś dodać imię: \"" + newName + "\", które już istnieje w bazie.";
  allNames.indexOf(newName) === -1 ? allNames.push(newName) : console.log(note);
  return allNames;
};

console.log(addName("Michał"));
console.log("\n");
console.log(addName("Misiek"));
console.log("\n");
console.log(addName("Julia"));