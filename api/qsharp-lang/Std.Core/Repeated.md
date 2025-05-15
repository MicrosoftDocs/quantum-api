---
uid: Qdk.Std.Core.Repeated
title: Repeated function
description: "Q# Repeated function: Creates an array of given `length` with all elements equal to given `value`. `length` must be a non-negative integer."
ms.date: 01/24/2025
ms.topic: generated-reference
qsharp.kind: function
qsharp.package: __Core__
qsharp.namespace: Std.Core
qsharp.name: Repeated
qsharp.summary: "Creates an array of given `length` with all elements equal to given `value`. `length` must be a non-negative integer."
---

# Repeated function

Fully qualified name: Std.Core.Repeated

```qsharp
function Repeated<'T>(value : 'T, length : Int) : 'T[]
```

## Summary
Creates an array of given `length` with all elements equal to given
`value`. `length` must be a non-negative integer.

## Description
Use this function to create an array of length `length` where each
element is equal to `value`. This way of creating an array is preferred
over other methods if all elements of the array must be the same and
the length is known upfront.

## Input
### value
The value of each element of the new array.
### length
Length of the new array.

## Output
A new array of length `length`, such that every element is `value`.

## Example
```qsharp
// Create an array of 3 Boolean values, each equal to `true`
let array = Repeated(true, 3);
```
