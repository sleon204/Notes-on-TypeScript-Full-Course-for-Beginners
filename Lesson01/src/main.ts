/* 

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

Inference: refers to the compiler's ability to automatically deduce or determine the types of variables and expressions based on their usage and context, without the need for explicit type annotations. 

Implicit:  refers to actions or situations where TypeScript automatically makes decisions or performs actions without requiring explicit instructions or annotations from the developer. Implicit behaviors can be powerful and convenient, but they may also introduce risks if not used carefully, especially in terms of type safety.

Explicit: refers to actions or declarations that are clear, specific, and leave no room for assumptions or interpretation.

Type Coercion: refers to the automatic conversion of one data type to another in a programming language. In languages with strong typing, like TypeScript, type coercion is often more explicit, and you need to explicitly convert types. In contrast, languages with weak typing, like JavaScript, perform type coercion more implicitly, often trying to convert values between types automatically.

*/


// Implicit string
// TS will infer that this is a string via context
let username = "Sam"
console.log(username)

// Explicit number
// TS will handle this variable as a number and will only allow this variable to be reassigned to another number
let a: number = 12

// Explicit string
//let b: string = '6'

// TS will throw an error before the code is ever run. you cannot divide a number and a string
// JS would not throw an error. it would instead coerce the string into a number which can lead to unexpected results in certain situations
//console.log(a / b)


// Explicit number
let b: number = 6

// This is valid TS now that both vairables are numbers
console.log(a / b)

// Explicit number
let c: number = 2

// Valid
console.log(c * b)