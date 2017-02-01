
/*

Making Anagrams
Hackerrank: Cracking the Coding Interview

Given two strings, a and b, that may or may not be of the same length, determine the minimum number of character deletions required to make a and b anagrams. Any characters can be deleted from either of the strings.

*/

function main(a, b) {  
    let anagram = {
        deletions: 0,
        first: a,
        second: b,
        firstDictionary: {},
        secondDictionary: {},
        initFirstDictionary() {
            this.first.split('').forEach((char) => {
                if (this.firstDictionary[char] === undefined)
                    this.firstDictionary[char] = 1;
                else
                    this.firstDictionary[char]++;        
            });
        },
        initSecondDictionary() {
            this.second.split('').forEach((char) => {
                if (this.secondDictionary[char] === undefined)
                    this.secondDictionary[char] = 1;
                else
                    this.secondDictionary[char]++;        
            });
        },
        countMinimumDeletions() {
            
            const firstDictKeys = Object.keys(this.firstDictionary);
            const secondDictKeys = Object.keys(this.secondDictionary);
            
            const checkDeletions = (iterateObjKeys, compareObjKeys) => {
                
                iterateObjKeys.forEach((char) => {
                    let iterateCount = this.firstDictionary[char];
                    let compareCount = this.secondDictionary[char];

                    if (compareCount === undefined) {
                        this.deletions += iterateCount;
                    } else {
                        if (compareCount !== iterateCount) {
                            this.deletions += (Math.abs(iterateCount - compareCount));
                        }
                    }
                });

                compareObjKeys.forEach((char) => {
                    let iterateCount = this.firstDictionary[char];
                    let compareCount = this.secondDictionary[char];
                    
                    if (iterateCount === undefined) {
                        this.deletions += compareCount;
                    } 
                });  
                return this.deletions;
            }
            return checkDeletions(firstDictKeys, secondDictKeys);
        }
    }

    anagram.initFirstDictionary();
    anagram.initSecondDictionary();
    return anagram.countMinimumDeletions();
    
}


console.log(main('abcdef', 'abcdfg'));




