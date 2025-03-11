---
title: Leerlog JavaScript
description: Bij houden van wat ik over JS leer
date: '2024-04-18'
lastUpdated: '2024-05-31'
categories:
  - Leerlog
published: True
---

## Table of Contents

[Learnjavascript](https://learnjavascript.online/)

## Basic functions

- In JavaScript, you have to return from inside functions. If you forget to write `return`, your function will return `undefined`
- The `return` keyword will also quit/exit the function.

## Strings I

### Strings

- You can create strings with " or '
- `.length` is a property that gives you the length of a string
- `.toUpperCase()` is a function that converts the string to upper case
- `.toLowerCase()` is a function that converts the string to lower case
- parentheses () on function calls are required. `.length` is a property that is already pre-computed; therefore, it does not need parentheses.
- `console.log(...)` is used for debugging and is NOT a replacement for `return`.

### Character access

- Square brackets `[index]` are used to access a specific index from a string.
- The index starts at 0. So the first character is index 0.
- You can combine it with the length of a string to get another character in another position.
- The `.at()` method allows you to read a character at an index (which can also be negative).

### Substrings

- A substring is a part or a portion of a string.
- `string.substring(indexStart, indexEnd)` is used to return a portion of the string.
- `indexStart`: the position of the first character you'd like to include.
- `indexEnd`: the position of the first character you'd like to ignore.
- The `indexEnd` argument is optional which means you can leave it out.

### Plus operator

- The + operator is used to add 2 numbers
- The + operator is used to concatenate 2 strings
- You can rewrite the `name = name +` in a shorter way using the `+=` operator: `name += " Blue"`

### Template strings

- A template string is a string created with the backtick character: `
- Template strings can span multiple lines
- Template strings support interpolation with the `${variableName}` syntax

## Numbers

### Numbers

- Convert from a number to string: `value.toString()`
- `NaN` stands for Not a Number
- `NaN` is often a sign of a bug.

### Convert string to number

- Convert from string to number `Number.parseInt(value, 10)`.
- `Number.parseInt()` is the name of the function you're calling.
- 10 is the radix which you should specify.
- Make sure to always specify the radix to avoid unpleasant surprises.

### Operations

- The remainder operator (%) returns the division remainder between 2 numbers.
- While there are some other methods you could call on numbers, they are not very commonly used. What is commonly used, however, is the `Math` object which contains methods such as `min()`, `max()`, `round()`, etc.

## Variables

- When you use a variable for the first time in JavaScript, you need to declare it with either `let` or `const`.
- Use `let` for variables that you will need to re-assign later on (as in changing their value)
- Use `const` for variables that you won't need to re-assign later on.
- Variables declared with `const` are not constant. We will see why later in this course.
- Variables declared with `const` cannot be re-assigned so you cannot have the `=` next to that variable name after declaring it.
- If you see `var`, it's from the old version of JavaScript. You can convert it to `let` (sometimes `const` if the variable is not re-assigned).

## Conditions

### Conditions
