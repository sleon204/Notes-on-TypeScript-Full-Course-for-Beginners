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

---- Code ----*/

// Valid
// Interface
// object using interface syntax

interface Guitarist {
     name?: string,
     active: boolean,
     albums: (string | number) []
}