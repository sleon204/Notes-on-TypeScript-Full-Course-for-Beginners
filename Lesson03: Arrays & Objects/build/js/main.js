"use strict";
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

Element: refers to an individual item within an array or a collection


*/
// Implicit String Array
// TS will infer that this is an array of strings based off context
let stringArr = ['one', 'hey', 'Dave'];
// TS will allow you to reassign this elements value to another string
stringArr[0] = 'two';
// TS will allow you to push an additional element into the array as long as it is a string
stringArr.push("three");
// TS will not allow you to assign this value to a number because it has infered that the elements value should be a string
//stringArr[0] = 1
// TS will not allow you to push a number into the array because it has infered that this is an array of string elements
//stringArr.push(42)
// Implicit Union Array
// TS will infer that the element types in this array shoulld be numbers or strings (union type) via context of its contents
let guitars = ['Strat', 'Les Paul', 5150];
// Valid as long as the value is a number or string
guitars[0] = 1984;
// Valid the value is a string and modifying the length of the array is allowed
guitars.unshift('Jim');
// Invalid this is a boolean value not a string or number
//guitars.unshift(true)
// Invalid TS all elements in stringArr must be string as infered by TS the elements in guitar are union type number|string
//stringArr = guitars
// Valid TS since guitars allows (number|string) elements and stringArr contains only string elements
guitars = stringArr;
// Implicit Union Array
// TS infers this is a union type (string|number|boolean)
let mixedData = ['EVH', 1984, true];
// Implicit Any Array
// TS will infer that this an an any type Array
let test = [];
