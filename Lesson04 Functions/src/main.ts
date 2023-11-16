/*----------------------
   Terminology
------------------------*/

// TypeScript: A strongly typed programming language compiling to JavaScript, providing better tooling at any scale.

// Compiler: Translates TypeScript code (with type annotations) into standard JavaScript for execution.

// Static Typing: Specifies types of variables, parameters, and return values at compile-time to catch errors early.

// Variable: Named storage holding a value. In TypeScript, allows declaration with specific types for clarity.

// Parameter: Variable in function/method declaration representing an input value. Defines required information for function execution.

// Expression: Piece of code producing a single value, composed of literals, variables, operators, and function calls.

// Functions: Blocks of reusable code performing specific tasks, taking input parameters and optionally returning a value.

// Basic Types: string, number, boolean, null, undefined, object, any, union.

// Inference: Compiler automatically deduces types of variables and expressions based on context, without explicit type annotations.

// Implicit: TypeScript makes decisions/actions without explicit instructions, introducing risks if not used carefully for type safety.

// Explicit: Clear, specific actions or declarations leaving no room for assumptions or interpretation.

// Type Coercion: Automatic conversion of one data type to another in programming languages.

// Concatenation: Process of combining two or more strings into a single string.

// RegExp: Powerful tool for pattern matching and text manipulation using search patterns.

// Element: Individual item within an array or collection.

// Tuple: Ordered collection of elements, each with a specific type, more strict than arrays.

// Type Alias: Creating a new name for a type, allowing descriptive or concise naming or complex type creation.

// Interface: Contract for an object's shape, specifying names, types, and methods an object must have.

// Optional Properties: Properties marked with '?' in interfaces/types, indicating non-mandatory attributes.

// Enum: Collection of named constants for related values, facilitating structured usage within a context.

// Literal Types: Represent exact values rather than a range, allowing specification of specific values.

// Void Type: Denotes absence of any specific type, used for functions returning nothing or undefined.

// Signature: Declaration of a function/method including its name, parameters, return type, and visibility/access level.

// Rest Parameter: Feature in JavaScript allowing functions to accept an indefinite number of arguments as an array.

// Never Type: Type representing values that never occur, used in scenarios where something should never happen or a function never returns.

/*----------------------
   Code
------------------------*/

// Valid
// Type Alias
// Object using Type alias syntax and a type alias as a value

type stringOrNumber = string |number

type stringOrNumberArray = string |number[]

type Guitarist = {
     name?: string,
     active: boolean,
     albums: stringOrNumberArray
}

type UserId = stringOrNumber

// Literal Type
// Dave is the literal type

let myName: 'Dave'

// Union type with literal assignment

let userName: 'Dave' | 'John' | 'Amy'

// Valid 

userName = 'Dave'

// Invalid
// Rachel isnt a literal type

//userName = 'Rachel'

// functions

// Invalid
// parameters are implicitly typed as any
// TypeScript strongly encourages explicit typing to enhance code clarity, maintainability, and type safety.

// const add = (a, b) => {
//      return a + b
// }

// Valid
// parameters are now explicitly typed
// TS is still infering that the function will return a number

const add2 = (a: number, b: number) => {
     return a + b
}

// Valid
// parameters are now explicitly typed
// return is now explicitly typed

const add3 = (a: number, b: number): number => {
     return a + b
}

// Valid
// function with explicitly typed parameters
// note the return type is void
// this function does not have an explicit return making its return type void

const logMsg = (message: any) => {
     console.log(message)

}

// Valid
// function with explicitly typed parameters
// note the return type is now specified

const logMsg2 = (message: any): void => {
     console.log(message)

}

logMsg("Hello")
// Hello
logMsg(add2(2,3))
// 5

// Valid
// non arrow function syntax

let subtract = function (c: number, d: number): number {
     return c - d
}

// Valid
// type alias for functions with the provided signature
// cannot use default values

 type mathFunction = (a:number, b:number) => number

// Valid
// Interface for functions with the provided signature
// cannot use default values

interface  mathFunction2 {
     (a:number, b:number):number
}

// Valid
// function using type alias
// note the parameters only appear to be implicitly typed
// the parameters are explicitly typed in the type alias

let multiply: mathFunction = function (c, d) {
     return c * d
}

logMsg(multiply(2,2))
// 4

//Optional Parameters

// Valid
// Normal function
const addAll = (a:number, b:number, c:number):number => {
     return a + b + c

}

// Invalid
// function using optional parameter
// it is possible to leave c out, the code must account for this  in order for TS to consider this valid

// const addAll2 = (a:number, b:number, c?:number):number => {
//      return a + b + c

// }


// Invalid
// a type guard has been added but the function lacks an ending return statement and return type currently only includes number and does not include 'undefined'

// const addAll2 = (a:number, b:number, c?:number):number => {
//      if (typeof c !== 'undefined') {
//           return a + b + c
//      }
// }

// Valid
// function with optional parameter
// a typeguard is included and a return in case c is not provided
// note optional parameters must aslways be the last parameter

const addAll3 = (a:number, b:number, c?:number):number => {
     if (typeof c !== 'undefined') {
          return a + b + c
     }
     return a + b
}

// Valid
// function with a default parameter value
// note if default is not last then undefined must be passed as the parameter

const addAll4 = (a:number = 10 , b:number, c:number = 2):number => {
     return a + b + c
}

logMsg(addAll3(2,3,2))
// 7
logMsg(addAll3(2,3))
// 5
logMsg(addAll4(2,3))
// 7
logMsg(addAll4(undefined,3))
// 15

// Rest parameters

// Valid
// Function using rest paremeters
// Rest parameters offer flexibility by allowing functions to handle an arbitrary number of arguments, providing a concise and convenient way to work with variable-length argument lists. They simplify the process of handling multiple arguments without explicitly defining each parameter in the function signature.

const total = (...nums: number[]): number => {
     return nums.reduce((prev, curr)=> prev + curr)
}

logMsg(total(1,2,3,4))
// 10

// Valid
// Function using rest paremeters and normal parameters
// rest parameters should be at the end

const total2 = ( a:number, ...nums: number[]): number => {
     return a + nums.reduce((prev, curr)=> prev + curr)
}

logMsg(total2(1,2,3))
// 6

// Never type
// function with a return implicitly typed never
// this function is desinged to always throw and error


const createError1 = (errMsg: string) => {
     throw new Error(errMsg)
}

// Valid
// the return is now explicitly typed
const createError = (errMsg: string): never => {
     throw new Error(errMsg)
}


// Valid
// never type returs also occur when a function is an endless loop
// the function is commented out for safety

// const infiniteLoop = () => {
//      let i:number = 1
//      while(true) {
//           i++
//      }
// }


// Valid
// now that a break is added the retun value becomes void

const infiniteLoop2 = () => {
     let i:number = 1
     while(true) {
          i++
          if (i > 100) break
     }
}


// Invalid
// TS will warn you about not including an undefined return type.
// a return  type for all possible code paths is expected an undefined return could accur if the value input is neither string nor number

// const numberOrString1 = (value: number | string): string => {
//      if (typeof value === 'string') return 'string'
//      if (typeof value === 'number') return 'number'
     
// }

// Valid
// use of a never type
// a code path in case neither a number nor string is input has been added and throws an error instead of returning undefined
// TS now recognizes that the function always returns a string value in all possible cases, and thus, it doesn't require an explicit mention of an undefined return type

const numberOrString2 = (value: number | string): string => {
     if (typeof value === 'string') return 'string'
     if (typeof value === 'number') return 'number'
     return createError('This should never happen!')
     
}

// Valid
// custom type guard
const isNumber = (value: any): boolean => {
     return typeof value === 'number' ? true : false
}


// Valid
// function using our custom type guard and using never type return

const numberOrString = (value: number | string): string => {
     if (typeof value === 'string') return 'string'
     if (isNumber(value)) return 'number'
     return createError('This should never happen!')
     
}
