---
title: TypeScript Tutorial
description: A comprehensive TypeScript tutorial for JavaScript developers and beginners
slug: typescript-tutorial
date: 05/20/2024
author: Aman
image: /typescript.webp
---

# TypeScript Tutorial: From Basics to Advanced Concepts

Welcome to this comprehensive TypeScript tutorial! Whether you're an experienced JavaScript developer looking to add static typing to your toolkit or a beginner in web development, this guide will take you through the fundamentals of TypeScript and introduce you to more advanced concepts as you progress.

## Introduction to TypeScript

TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. It adds optional types, classes, and modules to JavaScript, allowing for more robust software development and better tooling.

### Why Learn TypeScript?

- **Type Safety**: Catch errors at compile-time rather than runtime.
- **Enhanced IDE Support**: Better autocomplete, refactoring, and navigation features.
- **Object-Oriented Features**: Classes, interfaces, and modules for cleaner, more maintainable code.
- **Compatibility**: Works with existing JavaScript code and gradually adoptable.
- **Popular in Enterprise**: Widely used in large-scale applications and frameworks like Angular.

## Setting Up Your TypeScript Development Environment

To start coding in TypeScript, you'll need the following setup:

1. **Install Node.js**: Download and install from nodejs.org.
2. **Install TypeScript**: Run `npm install -g typescript` in your terminal.
3. **Choose an Integrated Development Environment (IDE)**: Popular options include Visual Studio Code, WebStorm, or Atom with TypeScript plugins.
4. **Initialize a TypeScript Project**: Run `tsc --init` to create a `tsconfig.json` file.

## TypeScript Basics

Let's start with the fundamentals of TypeScript programming:

### Hello World Program

```typescript
function greet(name: string) {
    console.log(`Hello, ${name}!`);
}

greet("World");
```

### Basic Types

TypeScript introduces static typing to JavaScript:

```typescript
let age: number = 25;
let name: string = "John Doe";
let isStudent: boolean = true;
let hobbies: string[] = ["reading", "coding", "gaming"];
let tuple: [string, number] = ["apple", 5];
```

### Interfaces

Interfaces define the structure of objects:

```typescript
interface Person {
    name: string;
    age: number;
    email?: string; // Optional property
}

let employee: Person = {
    name: "Alice",
    age: 30
};
```

### Functions

TypeScript allows you to specify parameter and return types for functions:

```typescript
function add(a: number, b: number): number {
    return a + b;
}

let result = add(5, 10);
```

## Advanced Types

TypeScript offers several advanced type features:

### Union Types

```typescript
let id: string | number;
id = "abc123";
id = 123;
```

### Type Aliases

```typescript
type Point = {
    x: number;
    y: number;
};

let center: Point = { x: 0, y: 0 };
```

### Generics

```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");
```

## Object-Oriented Programming in TypeScript

TypeScript fully supports object-oriented programming concepts:

### Classes

```typescript
class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public makeSound(sound: string): void {
        console.log(`${this.name} says ${sound}`);
    }
}

let dog = new Animal("Buddy");
dog.makeSound("Woof!");
```

### Inheritance

```typescript
class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    public makeSound(sound: string = "Woof"): void {
        super.makeSound(sound);
    }
}

let myDog = new Dog("Rex");
myDog.makeSound(); // Rex says Woof
```

### Interfaces for Classes

```typescript
interface Printable {
    print(): void;
}

class Book implements Printable {
    constructor(private title: string) {}

    print() {
        console.log(`Printing: ${this.title}`);
    }
}
```

## Advanced TypeScript Concepts

As you become more comfortable with TypeScript basics, explore these advanced topics:

### Decorators

Decorators provide a way to add annotations and metadata to your code:

```typescript
function logged(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${propertyKey} with`, args);
        return originalMethod.apply(this, args);
    };
    return descriptor;
}

class Calculator {
    @logged
    add(a: number, b: number): number {
        return a + b;
    }
}

const calc = new Calculator();
calc.add(5, 3); // Logs: Calling add with [5, 3]
```

### Mapped Types

Create new types based on existing ones:

```typescript
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

interface Mutable {
    x: number;
    y: number;
}

type PointReadonly = Readonly<Mutable>;

let readonlyPoint: PointReadonly = { x: 10, y: 20 };
// readonlyPoint.x = 5; // Error: Cannot assign to 'x' because it is a read-only property.
```

### Conditional Types

Types that act like if statements:

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;

type ResultType = NonNullable<string | null | undefined>;  // ResultType is string
```

## TypeScript with Popular Frameworks and Libraries

TypeScript integrates well with many popular JavaScript frameworks and libraries:

### React with TypeScript

```typescript
import React from 'react';

interface GreetingProps {
    name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
};

export default Greeting;
```

### Angular (Built with TypeScript)

Angular is written in TypeScript and provides excellent integration:

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: '<h1>{{title}}</h1>'
})
export class AppComponent {
    title: string = 'My Angular App';
}
```

### Node.js with TypeScript

Use TypeScript on the server-side with Node.js:

```typescript
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, TypeScript with Express!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```

## Best Practices and Tips

1. **Use `strictNullChecks`**: Catch null and undefined errors early.
2. **Leverage Type Inference**: Let TypeScript infer types when possible for cleaner code.
3. **Use Interfaces for Object Shapes**: Prefer interfaces over type aliases for object types.
4. **Avoid `any`**: Use `unknown` for truly unknown types, and be as specific as possible.
5. **Make Good Use of Union Types**: They're great for modeling state machines and API responses.

## Conclusion

Congratulations on completing this TypeScript tutorial! You've covered everything from basic types to advanced concepts like decorators and conditional types. TypeScript offers a powerful set of tools to write more robust and maintainable JavaScript code.

Remember, the best way to learn TypeScript is by using it in your projects. Start by migrating small parts of your JavaScript projects to TypeScript, and gradually increase your usage as you become more comfortable. Happy coding!