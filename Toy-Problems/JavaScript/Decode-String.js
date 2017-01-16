/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {

	let s1 = s.split('');
  let index = 0;
  let temp = [];

	let makeStringArray = (result) => {
		while (index < s1.length) {
			curr = s1[index];
			if (curr === ']') {
				break; 
			}
			if (curr === '[') {
				index++;
        result.push(Number(temp.join('')))
        temp = [];
				result.push(makeStringArray([]));
			}
      // if Number(curr) === Number(curr)
			if (curr !== ']') {
        if (Number(curr) === Number(curr)) {
          temp.push(curr);
        } else {
          result.push(curr);
        }
      }
      index++;
		}
		return result;
	}

  let arrayMadeFromString = makeStringArray([]);
	console.log('after makeStringArray: ', arrayMadeFromString); 

  // let numOfRepeats;
  let decodeArray = [];

  let decode = (arr, numOfRepeats) => {
    arr.forEach((curr, index) => {
      if (typeof curr === 'number') {
        numOfRepeats = curr;
      }
      if (Array.isArray(curr)) {
        for(let i = numOfRepeats - 1; i >= 0; i--) {
          decodeArray.push(decode(curr, undefined));
        }
      }
      if (typeof curr === 'string') {
        decodeArray.push(curr);
      }
    });
  };

  decode(arrayMadeFromString, undefined);

  console.log('decodeArray: ', decodeArray);

  let decodedString = decodeArray.join('')
  return decodedString;

};


let answ = decodeString("2[abc]");
console.log('function returns : ', answ);
console.log('should return    : ', "accaccacc");
console.log(answ === "accaccacc");

