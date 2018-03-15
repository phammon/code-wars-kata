function mergeString(a, b) {
  let merge = [];
  let first = a.split('');
  let second = b.split('');
  let remainder = [];

  //find the difference in lengths then splice off extra chars
  if(first.length < second.length) {
        //find the index where we need to slice
        let a = second.length - first.length;
        remainder.push(second.splice(a));
  } else if(first.length > second.length) {
        let a = first.length - second.length;
        remainder.push(first.splice(a))
  }
  //flatten remainder array because it looks like ex: [[1,2,3]]
  let flatRemain = remainder.reduce(function(accumulator, currentEle) {
      return accumulator.concat(currentEle);
   }, []);

  first.map(function(ele, index) {
      //push first element, then push second element
      merge.push(ele) && merge.push(second[index]);
  });
  flatRemain.map(function(ele){
    merge.push(ele)
  })
  console.log(merge);
}
mergeString('abc', 'stuvwx')
