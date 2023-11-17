

/*
------------------------
   Terminology
------------------------

TypeScript: A strongly typed programming language compiling to JavaScript, providing better tooling at any scale.

Compiler: Translates TypeScript code (with type annotations) into standard JavaScript for execution.

Static Typing: Specifies types of variables, parameters, and return values at compile-time to catch errors early.

Variable: Named storage holding a value. In TypeScript, allows declaration with specific types for clarity.

Parameter: Variable in function/method declaration representing an input value. Defines required information for function execution.

Expression: Piece of code producing a single value, composed of literals, variables, operators, and function calls.

Functions: Blocks of reusable code performing specific tasks, taking input parameters and optionally returning a value.

Basic Types: string, number, boolean, null, undefined, object, any, union.

Inference: Compiler automatically deduces types of variables and expressions based on context, without explicit type annotations.

Implicit: TypeScript makes decisions/actions without explicit instructions, introducing risks if not used carefully for type safety.

Explicit: Clear, specific actions or declarations leaving no room for assumptions or interpretation.

Type Coercion: Automatic conversion of one data type to another in programming languages.

Concatenation: Process of combining two or more strings into a single string.

RegExp: Powerful tool for pattern matching and text manipulation using search patterns.

Element: Individual item within an array or collection.

Tuple: Ordered collection of elements, each with a specific type, more strict than arrays.

Type Alias: Creating a new name for a type, allowing descriptive or concise naming or complex type creation.

Interface: Contract for an object's shape, specifying names, types, and methods an object must have.

Optional Properties: Properties marked with '?' in interfaces/types, indicating non-mandatory attributes.

Enum: Collection of named constants for related values, facilitating structured usage within a context.

Literal Types: Represent exact values rather than a range, allowing specification of specific values.

Void Type: Denotes absence of any specific type, used for functions returning nothing or undefined.

Signature: Declaration of a function/method including its name, parameters, return type, and visibility/access level.

Rest Parameter: Feature in JavaScript allowing functions to accept an indefinite number of arguments as an array.

Never Type: Type representing values that never occur, used in scenarios where something should never happen or a function never returns.

Type Assertions: Mechanism to tell TypeScript about the intended type of a value, providing flexibility when TypeScript cannot infer it automatically.

Unknown Type: Represents a type-safe 'any'. Unlike any, you can't operate on its values without narrowing the type. Useful for stricter type checking in uncertain scenarios.


------------------------
   Code
------------------------
*/
// Valid 
// Type Alias

type One = string
type Two = string | number

//Valid
// Type Literal

type Three = 'hello'

// Valid
// using type assertions to convert to a more or less specific type

let a: One = 'hello'

// Valid
// assignment to a less specific type
let b = a as Two 

// Valid
// assignment to a more specific type
let c = a as Three

// Valid
// type assertion with angle brackets
// equivalent to:
// let d = 'world' as One;
// not usable in react

let d = <One> 'world'


// Valid
// type assertion with angle brackets
// alias is not required
// equivalent to:
// let e = 'world' as string | number
// not usable in react

let e = <string | number> 'world'


//practical examples

// Valid
// This function can either add two numbers together or concatenate them as strings based on the value of the third parameter c. If c is 'add', it performs addition; otherwise, it performs string concatenation.

const addOrConcat = (a:number, b:number, c: 'add'|'concat'): number|string => {
   if(c === 'add') return a + b
   return '' + a + b
}


// Valid
// this line of code invokes the addOrConcat function and assigns its result (the concatenated string) to the variable myVal, ensuring that TypeScript treats myVal as a string type regargless of TS's inferences

let myVal: string = addOrConcat(2,2,'concat') as string

// Valid with warning
// Ts will be overwritten by your assertion despite this function actually returning a string
// It's important to note that if the addOrConcat function returns a string (due to the 'concat' argument), forcibly assigning it to a variable with the type number using as number might result in unexpected behavior or errors during runtime, especially if the returned value cannot be safely converted to a number.

let nextVal: number = addOrConcat(2,2,'concat') as number
// this function is actually returning a string

// TS will still at times check assertions for validity
// here TS waould warn you about converting 10 to a string and suggests converting to unknown first

//10 as string


// Unknown Types
// like any except it requires two assertions ( double casting or force casting)


// Valid
// unknown type with double assertions

(10 as unknown) as string


// The DOM

// Valid
// asserting img as HTMLImageElement

const img = document.getElementById('img') as HTMLImageElement


// Valid
// aserting myImg as HTMLImageElement
// non null assertion (!) not required if asserted as HTMLImageElement

const myImg = document.getElementById('#img')! as HTMLImageElement

// angle breacket notation is valid here as well

const img2 = <HTMLImageElement>document.getElementById('img')
const myImg2 = <HTMLImageElement>document.getElementById('#img')!


// TS will warn you about this unless we assert img as HTMLImageElement
img.src
myImg.src