---
uid: Microsoft.Quantum.Logical.Xor
title: Xor function
ms.date: 02/21/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Logical
qsharp.name: Xor
qsharp.summary: Returns the boolean exclusive disjunction (XOR) of two input boolean values.
---

# Xor function

Namespace: [Microsoft.Quantum.Logical](xref:Microsoft.Quantum.Logical)

```qsharp
function Xor(first : Bool, second : Bool) : Bool
```

## Summary
Returns the boolean exclusive disjunction (XOR) of two input boolean values.

## Input
### first
The first boolean value to be considered.

### second
The second boolean value to be considered.

## Output
A `Bool` which is `true` if and only if exactly one of `first` and `second` is `true`.

## Example
```qsharp

let result = Xor(true, false);
// result is true
```
