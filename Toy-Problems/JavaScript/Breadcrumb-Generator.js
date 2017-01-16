/*

Breadcrumb Generator

As breadcrumb menùs are quite popular today, I won't digress much on explaining them, leaving the wiki link doing the dirty work in my place.

What might not be so trivial is to get a decent breadcrumb from your current url: for this kata your purpose is to create a function that takes a url, strips the first part (labeling it always HOME) and then builds it making each element but the last a <a> element linking to the relevant path; last has to be a <span> element getting the active class.

All elements need to be turned into uppercase and separated by a separator, given as the second parameter of the function; the last element can terminate in some common extension like .html, .htm, .php or .asp; if the name of the last element is index.something, you treat it as if it wasn't there, sending users automatically to the upper folder.

Seems easy enough? Well, probably not, but we have now a last extra rule: if one element (other than the root/home) is longer than 30 characters, you have to shorten it, acronymizing it (i.e.: taking just the initials of every word); url will be always given in the format this-is-an-element-of-the-url and you should ignore words in this array while acronymizing: ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"]; url composed of more words separated by -, but equal or less than 30 characters long, needs to be just uppercased with hyphens replaced by spaces.

Ignore anchors (www.url.com#lameAnchorExample) and parameters (www.url.com?codewars=rocks&pippi=rocksToo) when present.

EXAMPLES:

generateBC("mysite.com/pictures/holidays.html", " : ") -->
'<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>'

generateBC("www.codewars.com/users/GiacomoSorbi", " / ") -->
'<a href="/">HOME</a> / <a href="/users/">USERS</a> / <span class="active">GIACOMOSORBI</span>'

generateBC("www.microsoft.com/docs/index.htm", " * ") -->
'<a href="/">HOME</a> * <span class="active">DOCS</span>'

*/

function generateBC(url, separator) {
	console.log('url: ', url)
  //your code here

  // create array with words seperated by '/'
  let urlArray = url.split('/');
  let filteredUrlArray = urlArray.map(word => {
  	if (word.includes('index.')) return '';
  	if (word.includes('#')) {
  		let tempArr = word.split('#');
  		tempArr.pop();
  		if (tempArr[0].includes('.')) {
  			let tempArr2 = tempArr[0].split('.');
  			tempArr2.pop();
  			console.log('TEMPARR2: ', tempArr2[0])
  			return tempArr2[0];
  		}

  		return tempArr[0];
  	}

  	return word;

  	// NEW THAT CODE WORKS WITH FILTER
  	// console.log('for ' + word + ': ', !word.includes('index'));
  	// if (word.includes('index')) return false;
  	// if (word.includes('#')) return false;
  	// return true;
  	// OLD STATEMENT:
  	// return !word.includes('index') && !word.includes('#');
  });

  // I NEED TO HANDLE PARAMETER (?) BETTER
  if (filteredUrlArray[filteredUrlArray.length-1].includes('?')) {
  	let temp = filteredUrlArray.pop().split('?')[0];
  	filteredUrlArray.push(temp)
  	console.log('filteredUrlArray should have proper last index: ', filteredUrlArray);
  }

  console.log('filteredUrlArray: ', filteredUrlArray);
  if (filteredUrlArray.join('').includes('.')) { 
  	// || filteredUrlArray.join('').includes('.php')) {
	  let doctoredElement = filteredUrlArray[filteredUrlArray.length - 1].split('.')[0];
	  console.log('doctoredElement: ', doctoredElement);
	  filteredUrlArray.pop();
	  filteredUrlArray.push(doctoredElement);
	}
  console.log('filteredUrlArray: ', filteredUrlArray);
  const excluded = {
  	'the':1,'of':1,'in':1,'from':1,'by':1,'with':1,'and':1,'or':1,'for':1,'to':1,'at':1,'a':1
  };3

  // takes away http, undefined, and empty strings
  let filteredArray2 = filteredUrlArray.filter(word => {
  	console.log('Does ' + word + ' pass? ', word.includes('index.'))
  	// if (word.includes('index.')) return false;
  	if (word.includes('http')) return false;
  	if (word === undefined) return false;
  	if (word === '') return false;
  	return true;
 	})

  let abbreviatedUrlArray = filteredArray2.map( string => {
  	// save whole string as variable
  	let original = string;
  	let withoutHyphens = string.split('-').join(' ');
  	console.log('original: ', original)
  	// if the length of string is > 30
  	if (string.length > 30) {
  		// split string by '-' and iterate
  		// replace each word with cap first letter
  		// save variable as join array
  		let acronym = string.split('-')
  		.map(word => {
  			if (word === 'in' && word.includes('linkedin')) {
  				console.log('recognizing ', word)
  				return word;
  			}
  			if (excluded[word] !== 1) {
  				console.log('this passed: ', word);
  				return word[0].toUpperCase();
  			}
  		})
  		.join('');

			// return an object with both values
			return { original, acronym };
		}

		return { original, acronym: null };

  });

  console.log('abbreviatedUrlArray: ', abbreviatedUrlArray);

  

  let homeAHref = '<a href="/">HOME</a>';
  let beginningAHref = '<a href=';
  let endingAHref = '</a>';
  let beginningSpan = '<span class="active">';
  let endingSpan = '</span>';

  let accRef = '/'

  // iterate through array to create final breadcrum path using reduce
  let finalBreadcrumTrail = abbreviatedUrlArray.reduce((buildingStr, word, arrIndex) => {
  	console.log('arrIndex: ', arrIndex)
  	let element;
  	word.acronym === null ? element = word.original : element = word.acronym;
  	  	if (element.includes('-')) {
  		element = element.split('-').join(' ');
  	}
  	if (word.original === '') {
  		;
  	}
  	// if its the first index
  	if (arrIndex === 0 && abbreviatedUrlArray.length !== 1) {
  		// name href '/' with 'HOME' in text area
  		// use separator and add to accumulator
  		return `${homeAHref}${separator}`;
  	}
		// if this is the last index
		if (arrIndex === abbreviatedUrlArray.length - 1
			|| abbreviatedUrlArray.length === 1) {
			// use span variables
			// capitalized word in text area
			// add to accumulator and don't use separator
			if (abbreviatedUrlArray.length !== 1) {
				return `${buildingStr}${beginningSpan}${element.toUpperCase()}${endingSpan}`;
			} else {
				return `${buildingStr}${beginningSpan}${'HOME'}${endingSpan}`;
			}
		}
		// use 'a href' variables
		// use '/' + word + '/' as href
		// use WORD in text area
		// use separator and add to accumulator
		if (accRef === '/') {
			accRef =  accRef + word.original + '/';
		} else {
			accRef = accRef + `${word.original}/`;
		}
		return `${buildingStr}${beginningAHref}"${accRef}">${element.toUpperCase()}${endingAHref}${separator}`;

  }, '');

  console.log('ANSWER: ', finalBreadcrumTrail)

  return finalBreadcrumTrail;
}

console.log(generateBC("http://www.google.ca/transmutation-surfer-surfer/issues/index.html?favourite=code", " . "));






/*

www.microsoft.com/important/confidential/docs/index.htm#top

&lt;a href="/"&gt;HOME&lt;/a&gt; * &lt;a href="/important/"&gt;IMPORTANT&lt;/a&gt; * &lt;a href="/important/confidential/"&gt;CONFIDENTIAL&lt;/a&gt; * &lt;span class="active"&gt;DOCS&lt;/span&gt;

&lt;a href="/"&gt;HOME&lt;/a&gt; * &lt;a href="/important/"&gt;IMPORTANT&lt;/a&gt; * &lt;a href="/important/confidential/"&gt;CONFIDENTIAL&lt;/a&gt; * &lt;a href="/important/confidential/docs/"&gt;DOCS&lt;/a&gt; * &lt;span class="active"&gt;INDEX&lt;/span&gt;

linkedin.it/issues/skin-cauterization-in-bladder-kamehameha/games/secret-page.php

&lt;a href="/"&gt;HOME&lt;/a&gt; - &lt;a href="/issues/"&gt;ISSUES&lt;/a&gt; - &lt;a href="/issues/skin-cauterization-in-bladder-kamehameha/"&gt;SCBK&lt;/a&gt; - &lt;a href="/issues/skin-cauterization-in-bladder-kamehameha/games/"&gt;GAMES&lt;/a&gt; - &lt;span class="active"&gt;SECRET PAGE&lt;/span&gt;

&lt;a href="/"&gt;HOME&lt;/a&gt; - &lt;a href="/issues/"&gt;ISSUES&lt;/a&gt; - &lt;a href="/issues/skin-cauterization-in-bladder-kamehameha/"&gt;SCINBK&lt;/a&gt; - &lt;a href="/issues/skin-cauterization-in-bladder-kamehameha/games/"&gt;GAMES&lt;/a&gt; - &lt;span class="active"&gt;SECRET PAGE&lt;/span&gt;

http://www.google.ca/transmutation-surfer-surfer/issues/index.html?favourite=code

&lt;a href="/"&gt;HOME&lt;/a&gt; : &lt;a href="/transmutation-surfer-surfer/"&gt;TRANSMUTATION SURFER SURFER&lt;/a&gt; : &lt;span class="active"&gt;ISSUES&lt;/span&gt;

&lt;a href="/"&gt;HOME&lt;/a&gt; : &lt;a href="/transmutation-surfer-surfer/"&gt;TRANSMUTATION SURFER SURFER&lt;/a&gt; : &lt;a href="/transmutation-surfer-surfer/issues/"&gt;ISSUES&lt;/a&gt; : &lt;span class="active"&gt;INDEX&lt;/span&gt;

*/















