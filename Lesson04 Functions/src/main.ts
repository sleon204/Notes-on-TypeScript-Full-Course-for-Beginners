/*---- Terminology ----

Terminology
Typescript: a strongly typed programming language that builds on and compiles to JavaScript, giving you better tooling at any scale.

Compiler: refers to the TypeScript compiler, which is a tool that translates TypeScript code (which includes type annotations and other TypeScript-specific syntax) into standard JavaScript code that can be executed by browsers or other JavaScript runtime environments.

Static Typing: refers to the practice of specifying the types of variables, parameters, and return values at compile-time, before the code is executed with the goal being to catch type-related errors early in the development process.

Variable:  refers to a named storage location that holds a value. Variables are used to store and manipulate data within a program. TypeScript, being a statically-typed language, allows developers to declare variables with specific types, providing clarity about the kind of data the variable is intended to store.

Parameter: refers to a variable that is used in the declaration of a function or method to represent an input value. Parameters allow you to pass values into a function when it is called, and they define the information that a function requires to perform its task.

Expression: refers to a piece of code that produces a value. It can be a combination of literals, variables, operators, and function calls that, when evaluated, results in a single value. Expressions are fundamental building blocks in programming languages, and they can appear in various contexts within the code.

Functions: refer to blocks of reusable code that perform a specific task. They take input parameters, execute a set of statements, and optionally return a value.

Basic Types:
     string: Represents textual data.
     number: Represents numeric data, both integer and floating-point.
     boolean: Represents true or false values.
     null and undefined: Represent absence of value.
     object: Represents a non-primitive type (e.g., arrays, functions, objects).
     any: a dynamic type that essentially opts out of static typing. It can be assigned any value of any type, and TypeScript doesn't perform type checking on values of the any type. 
     union: a way to express that a variable or parameter can have multiple types. It allows you to declare that a value may be of one type or another, providing flexibility in the types of values that can be assigned to a particular variable.

inference: refers to the compiler's ability to automatically deduce or determine the types of variables and expressions based on their usage and context, without the need for explicit type annotations. 

implicit:  refers to actions or situations where TypeScript automatically makes decisions or performs actions without requiring explicit instructions or annotations from the developer. Implicit behaviors can be powerful and convenient, but they may also introduce risks if not used carefully, especially in terms of type safety.

explicit refers to actions or declarations that are clear, specific, and leave no room for assumptions or interpretation.

Type Coercion: refers to the automatic conversion of one data type to another in a programming language. In languages with strong typing, like TypeScript, type coercion is often more explicit, and you need to explicitly convert types. In contrast, languages with weak typing, like JavaScript, perform type coercion more implicitly, often trying to convert values between types automatically.

concatentation: refers to the process of combining two or more strings into a single string. 

RegExp: is short for "regular expression," which is a powerful tool for pattern matching and text manipulation. A regular expression is a sequence of characters that defines a search pattern. It is used for searching, matching, and manipulating strings based on certain rules or patterns.

Element: refers to an individual item within an array or a collection

Tuple: refers to data structure that allows you to define an ordered collection of elements, each with a specific type. Unlike arrays, which can hold elements of the same or different types, tuples are more strict, have a fixed number of elements, a set order, and each element's type is explicitly defined.

Type Alias: refers to a way of creating a new name for a type. It allows developers to give a more descriptive or concise name to an existing type or to create complex types by combining existing ones.
     
     Capabilities:

    Can represent simple types (e.g., primitives, unions, intersections).
    Allows for combining existing types into new types.
    Cannot be extended or merged.
    Useful for creating descriptive names for types and defining complex types.



Interface: refers to  a contract for the shape of an object, specifying the names, types, and optional methods that an object must have to conform to that interface. It acts as a blueprint for objects ensuring specific properties and methods.

     Capabilities:

    Defines object shapes by specifying properties and methods that must be present.
    Supports extending other interfaces to inherit properties.
    Allows declaration merging, combining multiple interface declarations into a single definition.
    Cannot represent union types, intersections, or simple type aliases.

Optional: Properties: refer to properties that are marked with a ? character following their name in an interface or type definition, indicating that they are not required when creating objects that adhere to that interface.

     Potential for Undefined Values: 
     
     Using optional properties means those properties might be undefined if not explicitly set. Always handle potential undefined values when accessing optional properties to prevent runtime errors.

Enum: short for "enumerations," in TypeScript are a language feature that allows developers to define a collection of named constants, providing a way to represent a set of related and distinct values within a specific context. Enums assign friendly names to these constant values, making code more readable, maintainable, and type-safe. They enable the creation of a fixed set of options or choices, facilitating the usage of predefined values in a structured and descriptive manner.

Literal Types refer to specific types that represent exact values rather than a range of values. They allow you to specify a value explicitly, ensuring that variables or parameters can only hold that specific value or a finite set of predefined values.

Void Type: represents the absence of any specific type. It is used to denote that a function does not return any value, or more precisely, that it returns undefined.

Signature:  refers to a function signature or method signature, which represents the declaration of a function or method including its name, parameters, return type, and possibly its visibility or access level.

Rest parameter:  refers to a feature in JavaScript that allows functions to accept an indefinite number of arguments as an array. They enable a function to gather multiple arguments into a single parameter, making it easier to handle an arbitrary number of arguments.

Never Type: refers to a type for values that never occur. It denotes a type that has no values and is typically used to indicate scenarios where something should never happen or when a function never returns (or always throws an error).

---- Code ----*/

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
