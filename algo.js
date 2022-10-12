/**  Camel case algorithm
 *
 * @param {*} test
 */

// function that converts string letter to camelCase
// E.g my-house-master to myHouseMaster

// const camelCase = (test) => {
//   //const test = 'my-house-master'
//   const stringArray = test.split('-')
//   const titleCase = stringArray.map((words, index) => {
//     if (index >= 1) {
//       // console.log(words.charAt(0).toUpperCase())
//       // console.log(words.slice(1))
//       return words.charAt(0).toUpperCase() + words.slice(1)
//     }
//   })
// for (let i = 0; i < stringArray.length; i++) {
//   // stringArray[i] =
//   //   stringArray[i].charAt(0).toUpperCase() + stringArray.slice(1)
//   if (i >= 1) {
//     console.log(
//       // stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1),

//       stringArray[i]
//     )
//   }
// }
//console.log(stringArray.join(' '))
//   console.log(stringArray[0] + titleCase.join(''))
// }

// console.log(test.charAt(0).toUpperCase() + test.slice(1))
//camelCase('the-house-on-the-fucking-moon')
// camelCase('-webkit-transition')

// camelCase('the-Mouse-In-The-mucking-loon-has-Some-time-to-Kill')

//console.log('the-house-on-the-fucking-moon'.charAt(0).slice(2))

/**
 *  CONVERT TO BINARY
 
*/
// const toBinary = (num) => {
//   let rem = ''
//  // let count = 0
//   while (num) {
//     // console.log(num)
//     rem = rem + (num % 2)
//     num = Math.floor(num / 2)
//     //console.log(rem)
//     // count = count + 1
//   }
//   // console.log(count)
//   return rem
// }

// console.log(toBinary(20))

// SECOND LARGEST NUMBER IN AN ARRAY

// const arr = [3, 5, 4, 9, 5, 9, 3, 8, 7, 0, 2, 1]

// const secondLargestNum = (arr) => {
//   const sortedNumbers = arr.sort((a, b) => a - b)
//   //console.log(sortedNumbers[sortedNumbers.length - 2])
//   let uniqueNumbers = sortedNumbers.filter((c, index) => {
//     return sortedNumbers.indexOf(c) === index
//   })
//   console.log(uniqueNumbers[uniqueNumbers.length - 2])
// }

// secondLargestNum(arr)

// CHECK AND REMOVE DUPLICATES
// let chars = ['A', 'B', 'F', 'E', 'A', 'F', 'C', 'B']

// chars.forEach((c, index) => {
//   console.log(`${c} - ${index} - ${chars.indexOf(c)}`)
// })

// let uniqueChars = chars.filter((c, index) => {
//   return chars.indexOf(c) === index
// })

//console.log(uniqueChars)

// >>>> 2.
// let chars = ['A', 'B', 'F', 'E', 'A', 'F', 'C', 'B']
// const uniqueChars = []
// chars.forEach((char) => {
//   if (!uniqueChars.includes(char)) {
//     uniqueChars.push(char)
//     // console.log(char)
//   }
//   return
// })

// console.log(uniqueChars)

// chars.filter((char, index) => {
//   if (chars.indexOf(char) !== index) {
//     console.log(char)
//   }
// })
// chars.forEach((char, index) => {
//   console.log(`${char} - ${index} `)
// })

// console.log(chars.indexOf('B'))
//chars.filter((char, index) => {})

//console.log(dupChars)

// chars.filter((item, index) => {
//   if (chars.indexOf(item) !== index) {
//     console.log(item)
//   }
// })

/**************************************************************************

 * 
// .4 SUMATION OF BOTH STRINGS AND INT IN AN ARRAY
// const data = [3, 2, '4', 5, '4', 1, '6']
//let sum = 0
// const data = [3, 2, '4', 5, '4', 1, '6']
// const addArray = (num) => {
//   let sum = 0
//   num.forEach((number) => {
//     sum = sum + parseInt(number)

//     //sum + data[index]
//     //console.log(sum)
//     //console.log(index, number, data[index])
//     //console.log(data[index])
//   })
//   return sum
//   //console.log(sum)
// }

// console.log(addArray(data))

/// 4. SUM THE TWO LOWEST NUMBER IN AN ARRAY

const arr = [3, 5, 6, 4, 9, 5, 9, 3, 8, 7, 0, 2, 1]

const sumTwoLowest = (numbers) => {
  const descendingOrder = numbers.sort((a, b) => a - b)
  console.log(descendingOrder)

  let uniqueNumbers = descendingOrder.filter((c, index) => {
    if (c > 0) {
      return descendingOrder.indexOf(c) === index
    }
  })
  console.log(uniqueNumbers)
  return uniqueNumbers[0] + uniqueNumbers[1]
}
console.log(sumTwoLowest(arr) + ' fire')

// console.log(sumTwoLowest([19, 5, 42, 2, 77]))

// 5 FILTER LIST OF ARRAY OF INT AND STRINGS THEN RETURN INT ONLY

// const data = [3, 5, 'a', 4, 'b', 5, '5', 3, 8, 'asd', 0, 2, 1]

// const filterList = (arr) => {
//   let numbers = []
//   arr.filter((el) => {
//     if (typeof el === 'number') {
//       numbers.push(el)
//       //return el
//     }
//     // if (el > -1) {
//     //   numbers.push(el)
//     // }
//   })
//   return numbers
// }

// console.log(filterList([1, 'a', 'b', 0, 15]))

//.6

//10011 1*2^4 + 0*2^3
// const convertToDecimal = (binary) => {
//   let result = 0
//   binary += ''
//   console.log({ ...binary })
//   ;[...binary].forEach((element, index) => {
//     result += element * Math.pow(2, binary.length - index - 1)
//   })
//   return result
// }

// console.log(convertToDecimal(111))

// console.log(parseInt('111', 2))

//console.log('ddffffdf'.length)

// let text = 'uuyyuyuy'
// // for (const c of text) {
// //   console.log(text)
// // }

// ;[...text].forEach((a) => console.log(a))

//**************************************************************************/

//7.

/// ABBREVIATE NAME
// E.G oluwadamilola bola richard = Oluwadimilola B.R.
// bola richard = Bola R.

// const abbreviate = (firstName) => {
//   const nameList = firstName.split(' ')
//   let abb = ''
//   nameList.forEach((element, index) => {
//     if (index > 0) {
//       abb = abb + element.charAt(0) + '.'
//     }
//   })
//   let result = nameList[0] + ' ' + abb
//   return result.trim()
// }

// console.log(abbreviate('Oluwadamilola Bola Richard'))
// console.log(abbreviate('Junior'))
// console.log(abbreviate('W W W'))

//**************************************************************************//

//.8
/// ABBREVIATE NAME
// E.G oluwadamilola bola richard = O.B Richard.
// bola richard = B. Richard
// const abbreviateBack = (fullName) => {
//   const nameList = fullName.split(' ')
//   let abb = ''
//   nameList.forEach((element, index) => {
//     if (index < nameList.length - 1) {
//       abb = abb + element.charAt(0) + '.'
//     }
//   })

//   let result = abb + ' ' + nameList[nameList.length - 1]
//   return result.trim()
// }

// console.log(abbreviateBack('oluwadamilola deere tacha cobbs'))

//**************************************************************************//

//.9
//Clasify letters into consonants and vowels;

// const clasifyLetters = (letters) => {
//   const existingVowels = ['A', 'E', 'I', 'O', 'U']
//   let consonants = 0
//   let vowels = 0

//   const result = [...letters.toUpperCase()].forEach((letter) => {
//     existingVowels.includes(letter) ? vowels++ : consonants++
//   })
//   return { consonants, vowels }
// }

// console.log(clasifyLetters('winning'))

//

//**************************************************************************//

//.10
//Clasify letters into consonants and vowels;

// const clasifyLetters = (letters) => {
//   const existingVowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
//   let consonants = []
//   let vowels = []

//   ;[...letters].forEach((letter) => {
//     existingVowels.includes(letter)
//       ? vowels.push(letter)
//       : consonants.push(letter)
//   })
//   return { consonants, vowels }
// }

// console.log(clasifyLetters('Bastion'))

//**************************************************************************///

/*
//.11
//Clasify Numbers into odd, even, units, tens, hundreds and other>100s;

const classifyNumbers = (numbers) => {
  let odd = []
  let even = []
  let units = []
  let tens = []
  let hundreds = []
  let other = []

  numbers.forEach((number) => {
    if (number % 2 === 0) {
      even.push(number)
    } else {
      odd.push(number)
    }

    if (number > 999 || number < 1) {
      other.push(number)
    } else if (number > 99 && number < 1000) {
      hundreds.push(number)
    } else if (number > 9 && number < 100) {
      tens.push(number)
    } else {
      units.push(number)
    }
  })

  return { odd, even, units, tens, hundreds, other }
}

console.log(classifyNumbers([0, 21, 36, 4251, 5000]))

**/

// 5. First multiplesOf
// const multiplesOf = (noOfMultiples, number, divisor) => {
//   let multiples = []
//   if (number % divisor === 0) {
//     divisor = 1
//   }
//   for (let i = 1; i <= noOfMultiples; i++) {
//     //console.log(number * divisor * multiples[i])
//     multiples.push(number * divisor * i)
//   }
//   return multiples
// }

// console.log(multiplesOf(5, 3, 3))

/// filterRange(arr,a,b)
// return values equals or higher than A and lower or equal to b in an array

// const filterRange = (arr, a, b) => {
//   let result = []
//   arr.forEach((value) => {
//     if (value >= a && value <= b) {
//       result.push(value)
//     }
//   })
//   return result
// }

// console.log(filterRange([5, 3, 8, 1], 1, 4))

// sort array in decreasing order

// const sortArray = (arr) => {
//   //return arr.sort((a, b) => b - a)
//   return arr.sort().reverse()
// }
// console.log(sortArray([5, 2, 1, -10, 8]))
// console.log(sortArray(['html', 'abreviate', 'javascript', 'css']))

/*******************************************************************************
 * 
 * 
 

// GET EACH USERS NAME IN AN OBJECT
const user = [
  {
    name: 'john',
    age: 25,
  },
  {
    name: 'pete',
    age: 25,
  },
  {
    name: 'mary',
    age: 25,
  },
]

const usersToArray = (users) => {
  // let names = []
  // users.forEach((user) => names.push(user.name))
  // return names
  return users.map((user) => user.name)
}

console.log(usersToArray(user))

*/

/// FUNCTION THAT RETURN UNIQUE ITEMS IN THE ARRAY

// const unique = (names) => {
//   let uniqueNames = []
//   //let newName = []
//   let arr = names.forEach((name, index) => {
//     if (names.indexOf(name) === index) {
//       //console.log(array)
//       uniqueNames.push(name)
//     }
//   })
//   // console.log(uniqueNames)
//   // names.forEach((c, index) => {
//   //   console.log(`${c} - ${index} - ${names.indexOf(c)}`)
//   // })

//   // names.forEach((name) => {
//   //   uniqueNames.forEach((Uname) => {
//   //     if (name === Uname) {
//   //       console.log(name)
//   //     }
//   //   })
//   //   // if (names.includes(Uname)) {
//   //   //   console.log(Uname)
//   //   // }

//   // })
//   //console.log(arr)

//   return uniqueNames
// }
// let strings = ['tosin', 'tobi', 'tosin', 'femi', 'tosin', 'tobi']
// let strings1 = ['omoh', 'tosin', 'tobi', 'tosin', 'femi', 'tosin', 'tobi']
// console.log(unique(strings1))

//find the factorial of N

// const factorial = (n) => {
//   // console.log(n)
//   if (n == 0) return 1
//   return n * factorial(n - 1)
// }
// console.log(factorial(10))

/***
 *
 *
 */

//PRIME FACTORS OF A NUMBER

// const primeFactor = (num) => {
//   let result = []
//   let divider = 2
//   // let number = num

//   while (num > 1) {
//     if (num % divider === 0) {
//       result.push(divider)
//       num /= divider
//      num = num/divider
//     } else {
//       divider++
//     }
//   }
//   return result
// }

// console.log(primeFactor(24))

/**
 *
 *  DIGITAL ROOT; ADD NUMBERS TILL IT is  A DIGIT
 */

// const digitaRoot = (number) => {
//   let sum = 0

//   ;[...String(number)].forEach((num) => {
//     sum = sum + parseInt(num)
//   })
//   if (sum < 10) {
//     return sum
//   }

//   return digitaRoot(sum)
// }

// console.log(digitaRoot(123455699999999995))

// // Return a new array containing multiples of the numbers in the original array from 1 through 5.
// // const arrayMultiples = (numbersArray) => {
// //   let result = []
// //   numbersArray.forEach((number) => {
// //     for (let i = 1; i < 6; i++) {
// //       result.push(i * number)
// //     }
// //   })
// //   return result
// // }

// // console.log(arrayMultiples([1,4]))

// /***
//  *  THE SUM OF AGES <= 25 IN AN ARRAY OF OBJECT
//  */

// let people = [
//   { name: 'Mary', age: 35, gender: 'female' },
//   {
//     name: 'Stephen',
//     age: 20,
//     gender: 'male',
//   },
//   {
//     name: 'Dave',
//     age: 15,
//     gender: 'male',
//   },
//   {
//     name: 'Jane',
//     age: 25,
//     gender: 'female',
//   },
//   { name: 'John', age: 10, gender: 'male' },
//   { name: 'Fred', age: 50, gender: 'female' },
//   { name: 'Caleb', age: 46, gender: 'male' },
//   { name: 'Andres', age: 16, gender: 'male' },
//   { name: 'babe', age: 16, gender: 'female' },
// ]

// const sumOfAges = (students) => {
//   let femaleAgeSum = 0
//   let maleAgesum = 0
//   students.forEach((student) => {
//     if (student.age <= 25 && student.gender === 'male') {
//      // maleAgesum += student.age
//      maleAgesum = maleAgesum + student.age
//     }
//     if (student.age <= 25 && student.gender === 'female') {
//       femaleAgeSum += student.age
//     }
//   })
//   return { male: maleAgesum, female: femaleAgeSum }
// }

// console.log(sumOfAges(people))

/**
 * ************************************************************************
 * */
///  withdraw money<=10000 from atm and Dispense corresponding 100s, 20s, 9, 1, bills

// const withdraw = (amount) => {
//   const hundreds = Math.floor(amount / 100)
//   amount %= 100
//   // amount = amount - hundreds * 100

//   const twenties = Math.floor(amount / 20)
//   //amount %= 20
//   amount = amount - twenties * 20

//   const nines = Math.floor(amount / 9)
//   amount = amount % 9

//   const ones = Math.floor(amount / 1)

//   return [hundreds, twenties, nines, ones]
// }

// console.log(withdraw(9851))
/***
 *
 *  FIND THE NUMBER THAT ARE NON UNIQUE IN AN ARRAY
 */

// const findNonUnique = (numbers) => {
//   let result = []

//   numbers.forEach((item, index) => {
//     if (numbers.indexOf(item) !== index) {
//       if (!result.includes(item)) {
//         result.push(item)
//       }
//     }
//   })
//   const duplicates = numbers.filter(
//     (item, index) => numbers.indexOf(item) === index
//   )
//   return { result, duplicates }
// }

// console.log(findNonUnique([1, 2, 2, 3, 3, 3]))

// const arry = [1, 2, 1, , 3, 1, 2, 3, 1, 3, 4, 3, 5]

// const toFindDuplicates = (arry) =>
//   arry.filter((item, index) => arry.indexOf(item) !== index)
// const duplicateElements = toFindDuplicates(arry)
// console.log(duplicateElements)

/**
 *  GROUP GRADES <50 FAILED >=90 EXECEPTIONAL
 */

// const groupGrades = (numbers) => {
//   let failed = 0
//   let passed = 0
//   let exceptional = 0

//   numbers.forEach((number) => {
//     if (number < 50) {
//       failed = failed + 1
//     } else {
//       passed++
//     }
//     // } else if (number <= 100) {
//     //   exceptional++
//     // } else {
//     //   console.log('out of range')
//     // }
//     if (number >= 90) {
//       exceptional++
//     }
//   })
//   return { failed, passed, exceptional }
// }

// console.log(groupGrades([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]))

/**
 *  IN AN ARRAY OF X RETURN ARRAY OF X WHERE X>=Y AND <= Z
 */

// const noOfElements = (numbersArray, y, z) => {
//   // let result = []
//   // numbersArray.forEach((number) => {
//   //   if (number >= y && number <= z) {
//   //     result.push(number)
//   //   }
//   // })
//   const result = numbersArray.filter((number) => number >= y && number <= z)
//   return result.length
// }

// console.log(noOfElements([3, 3, 3, 5, 18, 6, 20], 15, 30))
// console.log(noOfElements([4, 6, 2, 6, 7, 7], 0, 7))

/**
 *
 * Implement the function divisible(a)
 *  which returns the number of the elements in that array a
 * that are divisible by 2 and greater than 15.
 */

// const divisible = (a) => {
//   //let result = []
//   let number = a.filter((number) => number % 2 === 0 && number > 15)

//   return number.length
// }

// console.log(divisible([2, 3, 12, 18, 42, 24]))
// console.log(divisible([100, 84, 37]))
// console.log(divisible([5, 8, 6, 12]))

/**
 * Implement the function isDivisbleByN(arr, n)
 * which extracts all the values in the input array arr that are divisible
 * by n into another array and returns the new array.
 */

// const isDivisbleByN = (arr, n) => {
//   let result = arr.filter((number) => {
//     if (number % n === 0) {
//       return number
//     }
//   })
//   return result
// }

// console.log(isDivisbleByN([1, 3, 5, 6, 3, 6, 7, 4], 2))
// console.log(isDivisbleByN([21, 3, 5, 6, 3, 6, 7, 4], 7))

/**
 * Implement the function highestSum(x, y) where x and y are both arrays, return the sum of the array with the highest value when it's elements are summed respectively.

 */

// const highestSum = (num1, num2) => {
//   let sum1 = 0
//   let sum2 = 0
//   num1.forEach((num) => (sum1 += num))
//   num2.forEach((num) => (sum2 += num))
//   return sum1 > sum2 ? sum1 : sum2
// }

// // highestSum([2, 5, 1, 0, 5, 7], [2, 3, 5, 6, 2, 1])
// console.log(highestSum([2, 5, 1, 0, 5, 7], [2, 3, 5, 6, 2, 1]))

// console.log(highestSum([15, 7], [12, 17]))

// console.log(highestSum([30], [3, 6, 2, 6]))

/**
 * Implement the function replaceDivisible(x, y)
 *  which replaces all numbers in an array,
 * x divisible by an integer, y with string “isDivisible”
 */

// const replaceDivisible = (array, divider) => {
//   let results = []
//   array.map((number) => {
//     if (number % divider === 0) {
//       results.push('isDivisible')
//     } else {
//       results.push(number)
//     }
//   })
//   const f = array.entries()

//   //console.log(f)
//   return results
// }

// console.log(replaceDivisible([2, 4, 3, 6, 5], 3))
// console.log(replaceDivisible([12, 4, 3, 6, 5], 2))

// const findNonUnique = (numbers) => {
//   let result = []
//   numbers.forEach((num, index) => {
//     if (numbers.indexOf(num) !== index) {
//       if (!result.includes(num)) {
//         result.push(num)
//       }
//     }
//     // if (!result.includes(num)) {
//     //   result.push(num)
//     // }
//   })
//   return result
// }

// console.log(findNonUnique([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]))

/**
 *
 * Given a string, return a new string that contains all the vowels of the given string first and its consonants last; in the same order, and same casing.
 */

// const groupLetters = (word) => {
//   let knownVowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
//   let group = []
//   ;[...word].forEach((letter) => {
//     if (knownVowels.includes(letter)) {
//       group.push(letter)
//     }
//   })
//   ;[...word].forEach((letter) => {
//     if (!knownVowels.includes(letter)) {
//       group.push(letter)
//     }
//   })

//   return group
// }

// console.log(groupLetters('aQEWiYoNum'))

/**
 *   A GAME OF LENGTH BETWEEN CONSONANTS AND VOWELS
 *
 */
const vowelsVsConsonants = (words) => {
  let knownVowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let vowels = 0
  let consonants = 0
  ;[...words].forEach((word) => {
    if (knownVowels.includes(word)) {
      vowels++
    } else {
      consonants++
    }
  })
  // console.log(consonants, vowels)
  if (consonants > vowels) {
    return 'consonant wins'
  } else if (vowels > consonants) {
    return 'vowel wins'
  } else {
    return 'draw'
  }
}

console.log(vowelsVsConsonants('alive'))

// GET THE 4 MINIMUM SUM AND 5 MAXIMUM SUM OF AN ARRAY

const minMaxSum = (numbersArray) => {
  let minSum = 0
  let maxSum = 0
  let sortedDesc = numbersArray.sort((a, b) => b - a)
  for (let i = 0; i < 4; i++) {
    maxSum += sortedDesc[i]
  }
  for (let i = sortedDesc.length - 1; i >= sortedDesc.length - 4; i--) {
    console.log(i)
    minSum += sortedDesc[i]
  }
  console.log(sortedDesc)
  return { minSum, maxSum }
}

console.log(minMaxSum([1, 3, 5, 7, 9, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9]))

// find missing num in an array

const findMissing = (arrayOfNumbers) => {
  let Knumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  // const test = arrayOfNumbers.filter((number, index) => {
  //   if (Knumbers[index] !== number) {
  //     console.log(number)
  //     return
  //   }
  // })
  let result = []
  Knumbers.forEach((number) => {
    if (!arrayOfNumbers.includes(number)) {
      result.push(number)
    }
  })
  return result.length ? result : -1
}

console.log(findMissing([1, 2, 5, 4, 6, 6, 8, 9, 0]))

const toBinaryNum = (number) => {
  let rem = ''
  while (number) {
    rem = rem + (number % 2)
    number = Math.floor(number / 2)
  }
  return rem
}

console.log(toBinaryNum(5))

const toDecimal = (num) => {
  let rem = 0

  ;[...String(num)].forEach((number) => {
    rem = 2 * rem + parseInt(number)
  })
  return rem
}

console.log(toDecimal(1011))
