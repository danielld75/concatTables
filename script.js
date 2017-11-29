var femaleNames = ["Anna", 'Magdalena', 'Marysia', 'Eurydyka'];
var maleNames = ["Gregory", "Misiek", "Pupil", "Henio"];

var allNames = femaleNames.concat(maleNames);

var pushName = function(name, baseNames) {
  baseNames.push(name);
};

var addName = function(newName) {
  var note = console.log("Próbowałeś dodać imię: \"" + newName + "\", które już istnieje w bazie.");
  allNames.indexOf(newName) === -1 ? pushName(newName, allNames) : note;
  return allNames;
};

console.log(addName("Michał"));
console.log();
console.log(addName("Misiek"));
console.log();
console.log(addName("Julia"));