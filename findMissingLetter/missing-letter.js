function findMissingLetter(array) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  let newAlpha = alpha.split('');
  let first = array[0].toLowerCase();
  let firstIndex = newAlpha.indexOf(first);
  let last = newAlpha.indexOf(array[array.length-1].toLowerCase());
  
  let sliceArr = newAlpha.slice(firstIndex, last);
  let lowerCase = array.map((i) => {
    return i.toLowerCase();
  })
  for(let i = 0; i < array.length; i++) {
      if(lowerCase[i] !== sliceArr[i]) {
          if (array[0] == array[0].toLowerCase()){
            return sliceArr[i];
          } else {
            return sliceArr[i].toUpperCase();
          }
      }
   }
}