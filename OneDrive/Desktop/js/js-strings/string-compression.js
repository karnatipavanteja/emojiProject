let String = "aaaabbcffgeeeet";
let count = 1;
let S = "";

for (let i = 0; i < String.length; i++) {
  if (String[i] == String[i + 1]) {
    count++;
  } else {
    S += String[i] + count;
    count = 1;
  }
}
console.log(S);
