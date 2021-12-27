/*
* This program is a factorial program
*
* @author  Ahmad El-khawaldeh
* @version 1.0
* @since   2021-12-05
*/

import * as readline from 'readline'

function factorial (denominator: number) {
  if (denominator === 0) {
    return 1
  } else if (denominator > 0) {
    const returnValue1: number = denominator * factorial(denominator - 1)
    return returnValue1
  } else {
    const returnValue2: number = denominator * factorial(denominator + 1)
    return returnValue2
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Input an integer: ', function (answer) {
  try {
    const factorialNum: number = factorial(parseInt(answer))
    console.log('The factorial of ' + answer + ' is ' + factorialNum)
  } catch (exeption) {
    console.log('please insert an integer.')
  }
  rl.close()
})
