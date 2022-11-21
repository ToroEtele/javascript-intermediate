function getDate() {
  return new Date().toDateString();
}
//NOT PURE

function getWorkshopDate () {
  return new Date(2020, 11, 4).toDateString();
}
//PURE
//A function is pure if its output depends on nothing but its inputs, and it always returns the same output if called with the same inputs (in this case, no inputs).

function toHex(n) {
  let hex = n.toString(16);
  return hex.padStart(2, '0');
}
//PURE

function rgbToHex(R, G, B) {
  return '#' + [toHex(R), toHex(G), toHex(B)].join('');
}
//PURE

function setColor(R, G, B) {
  const hex = rgbToHex(R, G, B);
  const colorMe = document.getElementById('color-me');
  colorMe.setAttribute('style', 'color: ' + hex);
}
//NOT PURE
//A function is not pure if it does anything besides return its output. Any other effect it has on the program or world is a side effect (in this case, changing the properties of an HTML element on the page).

async function readJsonFile(filename) {
  const file = await fetch(
    'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson'
  );
  return await file.json();
}
//NOT PURE
//A function is not pure if its output depends on the state of the world (in this case, the contents of web-hosted file), or if calling the function at different times with the same inputs can give different outputs.

function writeJsonString(object) {
  return JSON.stringify(object, null, 2);
}
//PURE

function exclusiveOr(A, B) {
  return (A || B) && !(A && B);
}
//PURE

function computeTruthTable(operator) {
  const truthValues = [true, false];
  const table = [];
  for (const A of truthValues) {
    for (const B of truthValues) {
      const value = operator(A, B);
      table.push({ A, B, value });
    }
  }
  return table;
}
//PURE

function showTruthTable(operator) {
  console.table(computeTruthTable(operator));
}
//NOT PURE
//A function is not pure if it does anything besides return its output. Any other effect it has on the program or world is a side effect (in this case, logging information to the console).