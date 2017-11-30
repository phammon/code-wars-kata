function alphabetPosition(text) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let array = alphabet.split('');
  let letter = text.toLowerCase();
  let string;
  let myObj = {}
    for (let key of array) {
      myObj[key] = array.indexOf(key) + 1;
    }
  string = myObj[letter].toString();
  return string;
}
