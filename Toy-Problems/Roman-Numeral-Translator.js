function translateRomanNumeral (romanNumeral) {

  var add = [];
  var sub = [];
  var rnArr = romanNumeral.slice().split('');
  
  for (var i = 0; i < rnArr.length; i++) {
    var val = rnArr[i];
    if(!DIGIT_VALUES[val]){
      return "null";
    }
  }
  
    for (var i = 1; i < rnArr.length; i++) {
      var cVal = rnArr[i];
      var pVal = rnArr[i - 1];
      
      if (DIGIT_VALUES[pVal] < DIGIT_VALUES[cVal]) {
        var tempVal = rnArr[i - 1];
        rnArr.splice(i - 1, 1);
        sub.push(tempVal)
      } 
    } 
    
    add = rnArr;
     
   var posNum = add.reduce(function(acc, curr){
   	console.log('add', acc + DIGIT_VALUES[curr])
   acc = acc + DIGIT_VALUES[curr];
   	return acc;
   }, 0);
   
   var negNum = sub.reduce(function(acc, curr){
   	console.log('add', acc + DIGIT_VALUES[curr])
   acc = acc - DIGIT_VALUES[curr];
   	return acc;
   }, 0);
   
   return (posNum) + (negNum)
   
}