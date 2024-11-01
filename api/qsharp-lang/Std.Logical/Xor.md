---
uid: Qdk.Std.Logical.Xor
title: Xor function
ms.date: 11/01/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Logical
qsharp.name: Xor
qsharp.summary: "Returns the boolean exclusive disjunction (eXclusive OR, XOR) of two input boolean values."
---

# Xor function

Fully qualified name: Std.Logical.Xor

```qsharp
function Xor(first : Bool, second : Bool) : Bool
```

## Summary
Returns the boolean exclusive disjunction (eXclusive OR, XOR)
of two input boolean values.

## Input
### first
The first boolean value to be considered.

### second
The second boolean value to be considered.

## Output
A `Bool` which is `true` if and only if exactly one of `first` and `second` is `true`.

## Remarks
In Q#, `Xor(a, b)` is equivalent to `a != b`.

## Example
```qsharp
let result = Xor(true, false);
// result is true
```
