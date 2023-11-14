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

inference: refers to the compiler's ability to automatically deduce or determine the types of variables and expressions based on their usage and context, without the need for explicit type annotations. 

implicit:  refers to actions or situations where TypeScript automatically makes decisions or performs actions without requiring explicit instructions or annotations from the developer. Implicit behaviors can be powerful and convenient, but they may also introduce risks if not used carefully, especially in terms of type safety.

explicit refers to actions or declarations that are clear, specific, and leave no room for assumptions or interpretation.

Type Coercion: refers to the automatic conversion of one data type to another in a programming language. In languages with strong typing, like TypeScript, type coercion is often more explicit, and you need to explicitly convert types. In contrast, languages with weak typing, like JavaScript, perform type coercion more implicitly, often trying to convert values between types automatically.

concatentation: refers to the process of combining two or more strings into a single string. 

RegExp: is short for "regular expression," which is a powerful tool for pattern matching and text manipulation. A regular expression is a sequence of characters that defines a search pattern. It is used for searching, matching, and manipulating strings based on certain rules or patterns.


*/





// Valid
// Implicit string
// Typescript will infer that this is a string

let myNameImplicit = 'Sam'

// Valid
// Explicit string
// Typescript no longer has to *infer* because we are explicitly specifying the type as a string

let myNameExplicit: string = 'Sam'

// Invalid
// TS will not allow you to reassign this to a number

//myNameExplicit = 42

// Valid
// TS will only allow you to reassign this to a string value

myNameExplicit = 'Not Sam'

// Valid
// any type

let myNameAny: any = true

// Valid
// TS will allow you to reasign this to any value type

myNameAny = "Anything I want"
myNameAny = 111
myNameAny = false

// Valid
// union type

let myNameUnion: string | number = 111

// Valid
// TS will let you reassign this only to the listed types

myNameUnion = 'Sam'
myNameUnion = 111

// Invalid
// boolean is not a listed type

//myNameUnion = false

//Invalid
// TS  will infer that the parameters here are any type because + can be used for both number addition and string concatenation. implicit type parameters will cause an error

// const sumImplicitAnyType = (a, b) => {
//     return a + b
// }

// Valid
// specifying the type as any is valid but not a best practice

const sumExplicitAnyType = (a:any, b:any) => {
    return a + b
}

//Valid
// specifying the number type removes the error.

const sumNumberType = (a:number, b:number) => {
    return a + b
}

// Valid
// specifying the second parameter as a string changes the returned value type to a string

const sumNumberStringType = (a:number, b:string) => {
    return a + b
}

// implicit regular expression

let regExImplicit = /\w+/g


//explicit regular expression
//RegExp type

let regExExplicit: RegExp = /\w+/g
