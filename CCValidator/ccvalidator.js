function validate(n){
    let a = Array.from(n.toString()).map(Number);
    let b = a.slice(0).reverse();
    let c = b.map((num, index) => {
      if(index % 2 !== 0) {
        return num * 2;
      }else {
        return num;
      }
    });
    let d = c.map((num, index) => {
      if(num > 9) {
        return num - 9;
      }else{
        return num;
      }
    });
    let e = d.reduce((total, index) => {
      return total + index;
    });
    if(e % 10 !== 0) {
      return false;
    } else{
      return true;
    }
}