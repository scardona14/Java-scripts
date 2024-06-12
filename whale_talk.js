//This program translates a sentence into whale talk.
//There are a few simple rules for translating text to whale language:
//There are no consonants. Only vowels excluding “y”.
//The u‘s and e‘s are extra long, so we must double them.



let input = 'turpentine and turtles'

const vowels = ['a', 'e', 'i', 'o', 'u']

const resultArray = []

for(let inputIndex = 0; inputIndex < input.length; inputIndex++) {
 // console.log(`Input index is ${inputIndex}. `)
if(input[inputIndex] === 'e') {
  resultArray.push(input[inputIndex]);
}
if(input[inputIndex] === 'u') {
  resultArray.push(input[inputIndex]);

 for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++){
  //console.log(`vowelsIndex is ${vowelsIndex}.`)
  if(input[inputIndex] === vowels[vowelsIndex])
  //console.log(input[inputIndex])
  resultArray.push(input[inputIndex]);
  }
 }
}
//console.log(resultArray)

const resultString = resultArray.join('').toUpperCase();
console.log(resultString)

//Output: UUEEIEEAUUE
