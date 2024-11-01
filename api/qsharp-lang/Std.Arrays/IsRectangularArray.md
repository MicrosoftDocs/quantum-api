---
uid: Qdk.Std.Arrays.IsRectangularArray
title: IsRectangularArray function
ms.date: 11/01/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Arrays
qsharp.name: IsRectangularArray
qsharp.summary: "Returns whether a 2-dimensional array has a rectangular shape"
---

# IsRectangularArray function

Fully qualified name: Std.Arrays.IsRectangularArray

```qsharp
function IsRectangularArray<'T>(array : 'T[][]) : Bool
```

## Summary
Returns whether a 2-dimensional array has a rectangular shape

## Type Parameters
### 'T
The type of each element of `array`.

## Input
### array
A 2-dimensional array of elements.

## Output
`true` if the array is rectangular, `false` otherwise.

## Example
```qsharp
IsRectangularArray([[1, 2], [3, 4]]);       // true
IsRectangularArray([[1, 2, 3], [4, 5, 6]]); // true
IsRectangularArray([[1, 2], [3, 4, 5]]);    // false
```

## See Also
- Microsoft.Quantum.Arrays.IsSquareArray
