// Ejercicio 14
const words = ["code","repeat","eat","sleep","code","enjoy","sleep","code","enjoy","sleep","code"];

function repeatCounter(list) {
  const count = {};
  for (let i = 0; i < list.length; i++) {
    if (count[list[i]]) {
      count[list[i]]++;
    } else {
      count[list[i]] = 1;
    }
  }
  return count;
}

console.log(repeatCounter(words));
// { code: 4, repeat: 1, eat: 1, sleep: 3, enjoy: 2 }
