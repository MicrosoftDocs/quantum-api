---
uid: Qdk.Std.Arrays.IndexRange
title: IndexRange function
ms.date: 10/30/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Arrays
qsharp.name: IndexRange
qsharp.summary: "Given an array, returns a range over the indices of that array, suitable for use in a for loop."
---

# IndexRange function

Fully qualified name: Std.Arrays.IndexRange

```qsharp
function IndexRange<'TElement>(array : 'TElement[]) : Range
```

## Summary
Given an array, returns a range over the indices of that array, suitable
for use in a for loop.

## Type Parameters
### 'TElement
The type of elements of the array.

## Input
### array
An array for which a range of indices should be returned.

## Output
A range over all indices of the array.

## Example
The following `for` loops are equivalent:
```qsharp
for idx in IndexRange(array) { ... }
for idx in 0 .. Length(array) - 1 { ... }
```
