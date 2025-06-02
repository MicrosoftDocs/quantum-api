---
uid: Qdk.Std.Range.RangeStart
title: RangeStart function
description: "Q# RangeStart function: Returns the defined start value of the given range."
ms.date: 06/02/2025
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Range
qsharp.name: RangeStart
qsharp.summary: "Returns the defined start value of the given range."
---

# RangeStart function

Fully qualified name: Std.Range.RangeStart

```qsharp
function RangeStart(r : Range) : Int
```

## Summary
Returns the defined start value of the given range.

## Input
### r
Input range.

## Output
The defined start value of the given range.

## Remarks
A range expression's first element is `start`,
its second element is `start+step`, third element is `start+step+step`, etc.,
until `end` is passed.

Note that the defined start value of a range is the same as the first element of the sequence,
unless the range specifies an empty sequence (for example, 2 .. 1).

## Example
```qsharp
Message($"{ RangeStart(7..-1..3) }"); // Prints 7
```
