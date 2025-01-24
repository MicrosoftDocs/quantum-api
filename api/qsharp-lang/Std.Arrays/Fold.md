---
uid: Qdk.Std.Arrays.Fold
title: Fold function
description: "Q# Fold function: Iterates a function `f` through an array `array`, returning `f(...f(f(initialState, array[0]), array[1]), ...)`."
ms.date: 01/24/2025
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Arrays
qsharp.name: Fold
qsharp.summary: "Iterates a function `f` through an array `array`, returning `f(...f(f(initialState, array[0]), array[1]), ...)`."
---

# Fold function

Fully qualified name: Std.Arrays.Fold

```qsharp
function Fold<'State, 'T>(folder : (('State, 'T) -> 'State), state : 'State, array : 'T[]) : 'State
```

## Summary
Iterates a function `f` through an array `array`, returning
`f(...f(f(initialState, array[0]), array[1]), ...)`.

## Type Parameters
### 'State
The type of states the `folder` function operates on, i.e., accepts as its first
argument and returns.
### 'T
The type of `array` elements.

## Input
### folder
A function to be folded over the array.
### state
The initial state of the folder.
### array
An array of values to be folded over.

## Output
The final state returned by the folder after iterating over
all elements of `array`.

## Example
```qsharp
let sum = Fold((x, y) -> x + y, 0, [1, 2, 3, 4, 5]); // `sum` is 15.
```
