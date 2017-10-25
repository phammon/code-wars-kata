function solution(number){
  let array = [];
   for (let i = 0; i < number; i++) {
     if(i % 3 === 0) {
      array.push(i);
     }else if(i % 5 === 0) {
      array.push(i);
     } //end else
   } //end loop
   return sum = array.reduce((a, b) => a + b, 0);
}
