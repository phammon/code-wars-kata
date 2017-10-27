function rowSumOddNumbers(n) { 
let obj = {}
let a = 1; let total = [];
  for (var i = 1; i <= n; i++) {
    obj[i] = i;
    for (var j = 1; j <= i; j++) {
       obj[i] = a;
       a += 2;
       }
    }
     let q = obj[n];
    for (var k = n; k > 0; k--) {
        total.push(q);
        q -= 2;
     }
    obj[n] = total;
    const newTotal = obj[n].reduce((sum, value) => {
    return sum + value; }, 0);
     return newTotal;
  }
